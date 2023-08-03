"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-textarea-code-editor/dist.css";
import { getWebContainerInstance } from "@/utils/web-container";
import { AlertTriangle, Zap } from "lucide-react";
import "./styles/loading.css";

const CodeEditor = dynamic(
  () => import("@uiw/react-textarea-code-editor").then((mod) => mod.default),
  { ssr: false }
);

export const AxvalHome = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
  const [codeResult, setCodeResult] = useState<string[]>([
    "> Console do código\n",
  ]);

  const handleContainer = async () => {
    try {
      setIsLoading(true);
      setCodeResult([]);
      setTimeout(async () => {
        setCodeResult(["----------------------------------"]);
        setCodeResult((prevState) => [...prevState, "Carregando..."]);
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

        setCodeResult((prevState) => {
          return [...prevState, "> ✨ Instalando dependencias..."];
        });

        install.output.pipeTo(new WritableStream());

        if ((await install.exit) !== 0) {
          console.error("Erro no install");
          setCodeResult(["!!! Erro ao instalar as dependencias !!!"]);
          return;
        }

        const start = await webContainer.spawn("npm", ["start"]);

        setCodeResult((prevState) => {
          return [...prevState, "> 🚀 Iniciando servidor"];
        });
        setCodeResult((prevState) => [
          ...prevState,
          "----------------------------------",
        ]);

        start.output.pipeTo(
          new WritableStream({
            write(data) {
              setCodeResult((prevState) => [...prevState, data]);
            },
          })
        );

        setIsLoading(false);
      }, 500);
    } catch (err: any) {
      setIsLoading(false);
      console.error(err);
      setCodeResult(err.message);
    }
  };

  return (
    <>
      <div className="w-full lg:h-[500px] min-h-[300px] flex items-center justify-center flex-col gap-2">
        <div className="">
          <div className="w-full h-full flex lg:flex-row flex-col gap-2 items-center justify-center flex-wrap">
            <CodeEditor
              value={code}
              language="js"
              placeholder="Please enter JS code."
              onChange={(evn) => setCode(evn.target.value)}
              padding={15}
              style={{
                fontSize: 18,
                fontFamily: "montserrat",
                color: "#fff",
                height: "100%",
              }}
              className="rounded border border-gray-500 border-dashed font-montserrat  bg-zinc-900 lg:w-[500px] w-[95vw]"
            />
            <div className="h-full">
              <div className="bg-zinc-950 border border-gray-500 border-dashed lg:w-[500px] w-[95vw] lg:h-full p-2 overflow-x-hidden">
                <div className="text-white font-montserrat">
                  <div className="w-full p-2 flex flex-row gap-2 bg-zinc-850 border border-gray-500 border-dashed">
                    <img
                      src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png"
                      alt="Logo typescript"
                      height={20}
                      width={20}
                    ></img>
                    <h1 className="w-full font-montserrat font-bold text-blue-600 pl-2">
                      index.ts
                    </h1>
                  </div>{" "}
                  {codeResult &&
                    codeResult.map((log, index) => (
                      <p className="max-w-full flex-wrap" key={index}>
                        {log}
                      </p>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-row gap-2 items-center justify-center my-3 flex-wrap sm:hidden ">
            <AlertTriangle size={30} className=" text-red-600" />
            <p className="text-lg font-righteous text-center text-red-600  max-w-[90%] mx-6">
              O Carregamento é lento, é possível que o código não execute em
              alguns dispositivos
            </p>
          </div>
          {!isLoading ? (
            <button
              onClick={handleContainer}
              className="text-gray-500 rounded w-full bg-white mt-4"
            >
              <div className="w-full flex items-center justify-center p-2 gap-2 flex-row">
                <Zap />
                Run Code
              </div>
            </button>
          ) : (
            <button className="text-gray-500 rounded w-full bg-white mt-4">
              <div className="w-full flex items-center justify-center p-2 gap-2 flex-row">
                <div className="loading-spinner"></div>
              </div>
            </button>
          )}
        </div>
      </div>
    </>
  );
};
