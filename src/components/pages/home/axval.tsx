"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { getWebContainerInstance } from "@/utils/web-container";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

export const AxvalHome = () => {
  const [code, setCode] = React.useState(
    `import Axval from "axval"; \n
const verify = Axval.verify({
    type: {
        field: "email",
    },
    value: "example@email.com",
});
    
console.log(verify);
    `
  );
  const [codeResult, setCodeResult] = useState("");

  const handleContainer = async () => {
    const webContainer = await getWebContainerInstance();

    await webContainer.mount({
      "index.ts": {
        file: {
          contents: code,
        },
      },
      "package.json": {
        file: {
          contents: JSON.stringify({
            name: "example-app",
            dependencies: {
              axval: "^1.2.0",
              "ts-node-dev": "^2.0.0",
            },
            scripts: {
              start: "tsnd --respawn --transpile-only index.ts",
            },
          }),
        },
      },
    });

    const install = await webContainer.spawn("npm", ["i"]);

    install.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log("install", data);
        },
      })
    );

    if ((await install.exit) !== 0) {
      console.error("Erro no install");
    }

    const verifyDependencies = await webContainer.spawn("npm", ["list"]);

    verifyDependencies.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log("lista", data);
        },
      })
    );

    if ((await verifyDependencies.exit) !== 0) {
      console.error("Erro nas dependencias");
    }

    const start = await webContainer.spawn("npm", ["start"]);

    start.output.pipeTo(
      new WritableStream({
        write(data) {
          console.log("start", data);
          setCodeResult(data + "\n");
        },
      })
    );

    return (
      <div>
        <h1>oi</h1>
      </div>
    );
  };

  return (
    <>
      <div className="w-full h-[500px] flex items-center justify-center">
        <CodeEditor
          value={code}
          language="js"
          placeholder="Please enter JS code."
          onChange={(evn) => setCode(evn.target.value)}
          padding={15}
          style={{
            fontSize: 18,
            fontFamily: "montserrat",
          }}
          className="rounded border border-gray-500 border-dashed font-montserrat  bg-gradient-to-r from-white to-zinc-300 font-bold"
        />
        <button onClick={handleContainer} className="text-white">
          click
        </button>
        <p className="text-white"> {codeResult}</p>
      </div>
    </>
  );
};
