import Image from "next/image";
import fundo from "@/assets/fundocomlistrasbrancas.png";
import logo from "@/assets/logosemfundobranca.png";
import { Github, Linkedin } from "lucide-react";
import { HoverInfoOpeningComponent } from "./components/hoverInfoOpening";

export const OpeningHome = () => {
  return (
    <div className="w-full sm:h-[950px] h-[750px] relative flex items-center justify-center">
      <div className="w-full h-full items-center justify-center absolute inset-0 pointer-events-none select-none md:flex hidden">
        <Image
          src={fundo}
          alt="fundo com listas brancas"
          className="w-auto h-[98%] opacity-20"
        />
      </div>
      <div className="w-full flex items-center justify-center flex-row gap-2 flex-wrap">
        <div className="md:w-[300px] md:h-[300px] w-[60%] h-auto">
          <Image src={logo} alt="logo" />
        </div>

        <div className="min-w-[300px] flex flex-col gap-2 ml-6 mr-6">
          <HoverInfoOpeningComponent />
          <div>
            <h1 className="text-3xl text-white font-righteous font-medium md:text-start text-center">
              Gustavo Cardilho Developer
            </h1>
            <p className="text-sm text-gray-400 font-righteous md:mt-0 mt-8 md:text-start text-center">
              {"> "}Desenvolvedor back-end apaixonado por tecnologia {"<3"}
            </p>
          </div>
          <div className="w-full flex flex-row gap-4 md:justify-start md:align-start justify-center items-center">
            <button className="bg-white text-black font-righteous font-medium text-xl p-2 rounded transition-colors hover:bg-gray-200 inline">
              Projetos
            </button>
            <button className="border border-white text-white font-righteous font-medium text-xl p-2 rounded transition-colors hover:bg-zinc-700 inline">
              Tecnologias
            </button>
          </div>

          <span className="w-full text-sm text-gray-500 font-righteous font-medium m-auto flex items-center justify-center ">
            <span className="w-full relative after:absolute after:w-[45%] after:h-[0.2px] after:bg-gray-500 after:top-2 after:right-0 before:absolute before:w-[45%] before:h-[0.2px] before:bg-gray-500 before:top-2 before:left-0 text-center">
              OU
            </span>
          </span>

          <div className="w-full flex flex-row gap-4 items-center justify-center">
            <a
              href="https://github.com/Kyoudan"
              className="p-2 rounded-[50%] transition-colors hover:bg-gray-700"
              target="_blank"
            >
              <Github className="text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavo-rafael-cardilho-24b984248/"
              className="p-2 rounded-[50%] transition-colors hover:bg-gray-700"
              target="_blank"
            >
              <Linkedin className="text-gray-300" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
