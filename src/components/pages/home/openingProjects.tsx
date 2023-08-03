import {ChevronsDown} from 'lucide-react'
export const OpeningProjectsHome = async () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 my-[80px] relative">
      <p className="text-4xl font-righteous text-center text-white">Projetos</p>
      <h1 className="text-lg font-montserrat font-bold text-gray-500 text-center max-w-[500px] mx-12">
        A seguir você vai ver um dos meus principais projetos já feito
      </h1>
      <p className="text-xl text-white animate-bounce">
      <ChevronsDown size={30}/>
      </p>
    </div>
  );
};
