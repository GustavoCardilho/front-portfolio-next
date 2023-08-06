import { HoverInfoTechsComponent } from "./components/hoverInfoTechs";
import { TechsMock } from "@/mocks/techs";

export const TechsHome = async () => {
  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 my-[80px] relative">
      <p className="text-4xl font-righteous text-center text-white">
        Tecnologias
      </p>
      <p className="text-lg font-righteous text-center text-gray-500 sm:hidden block max mx-6">
        {"> "} Para a versão de celular, clique nos icones para saber seu nome
      </p>
      <div className="w-full flex lg:flex-row flex-col gap-8 lg:max-w-[500px] max-w-[90%] flex-wrap text-white items-center justify-center">
        {TechsMock &&
          TechsMock.map((item, index) => (
            <>
              <HoverInfoTechsComponent
                key={`HoverInfoTechsCompoent-${index}`}
                alt={item.alt}
                name={item.name}
              >
                <item.img />
              </HoverInfoTechsComponent>
            </>
          ))}
      </div>
    </div>
  );
};
