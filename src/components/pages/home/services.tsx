import { Briefcase, FileCode2, Server } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const ServicesHome = () => {
  return (
    <>
      {" "}
      <p className="text-4xl font-righteous text-center   text-white">
        Informações
      </p>
      <div className="w-full p-4 flex items-center justify-center gap-4 flex-wrap">
        <div
          id="services"
          className="w-[450px] h-[400px] flex p-6 flex-col gap-2 bg-gradient-to-b from-black rounded border border-zinc-700 hover:bg-gradient-to-b hover:from-black hover:to-zinc-900 transition-all"
        >
          <div className="w-full flex-col gap-6 text-white font-montserrat font-bold text-2xl">
            {" "}
            <FileCode2 size={50} className="p-2 bg-zinc-900 rounded" />
            <Separator className="my-6" color="#6b7280" />
            <h1>Freelancer</h1>
          </div>
          <p className="text-lg text-gray-500 font-montserrat font-bold text-justify">
            Só faço freelancer de sites pequenos que não seja necessário a
            manutenção e criação de sistemas (por enquanto){" "}
          </p>
        </div>

        <div
          id="services2"
          className="w-[450px] h-[400px] flex p-6 flex-col gap-2 bg-gradient-to-b from-black rounded border border-zinc-700 hover:bg-gradient-to-b hover:from-black hover:to-zinc-900 transition-all"
        >
          <div className="w-full flex-col gap-6 text-white font-montserrat font-bold text-2xl">
            {" "}
            <Briefcase size={50} className="p-2 bg-zinc-900 rounded" />
            <Separator className="my-6" color="#6b7280" />
            <h1>Disponivel para trabalhar</h1>
          </div>
          <p className="text-lg text-gray-500 font-montserrat font-bold text-justify">
            Estou aceitando qualquer trabalho voltado a área de programação
          </p>
        </div>

        <div
          id="services3"
          className="w-[450px] h-[400px] flex p-6 flex-col gap-2 bg-gradient-to-b from-black rounded border border-zinc-700 hover:bg-gradient-to-b hover:from-black hover:to-zinc-900 transition-all"
        >
          <div className="w-full flex-col gap-6 text-white font-montserrat font-bold text-2xl">
            {" "}
            <Server size={50} className="p-2 bg-zinc-900 rounded" />
            <Separator className="my-6" color="#6b7280" />
            <h1>Foco em back-end</h1>
          </div>
          <p className="text-lg text-gray-500 font-montserrat font-bold text-justify">
            Tenho foco em back-end apesar de ter conhecimentos basicos em
            front-end
          </p>
        </div>
      </div>
    </>
  );
};
