import axios from "axios";
import { HoverInfoTechsComponent } from "./components/hoverInfoTechs";

interface IAxios {
  data: {
    languages: ILanguages[];
  };
}

interface ILanguages {
  language: string;
  img: string;
}

const getTechs = async () => {
  try {
    const response: IAxios = await axios.get(
      "https://gist.githubusercontent.com/Kyoudan/d4fe3a38ea022025d42d7f578977a6b2/raw/680ce3aaf712704157975350f8234cc3d1cb58bc/programming.json"
    );

    if (!response) return;;

    return response;
  } catch (err) {
    console.log(err);
  }
};

export const TechsHome = async () => {
  const tecnologias: IAxios | undefined = await getTechs();

  return (
    <div className="w-full flex items-center justify-center flex-col gap-2 my-[80px] relative">
      <p className="text-4xl font-righteous text-center text-white">
        Tecnologias
      </p>
      <div className="w-full flex lg:flex-row flex-col gap-8 lg:max-w-[500px] max-w-[90%] flex-wrap text-white items-center justify-center">
        {tecnologias &&
          tecnologias.data &&
          tecnologias.data.languages.map((item, index) => (
            <HoverInfoTechsComponent img={item.img} text={item.language} key={index}/>
          ))}
      </div>
    </div>
  );
};
