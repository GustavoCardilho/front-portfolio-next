import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { IAxiosRepositoriesGithub } from "./types/repositoriesGithub";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const findRepositoriesGithub = async () => {
  try {
    const result: IAxiosRepositoriesGithub = await axios.get(
      "https://api.github.com/users/Kyoudan/repos"
    );
    /*     "https://api.github.com/users/Kyoudan/repos" */
    result.data.forEach((repository, index) => {
      if (repository.name == "Kyoudan") {
        result.data.splice(index, 1);
      }
    });

    result.data.forEach(async (repository, index) => {
      const language: { data: Object } = await axios.get(
        repository.languages_url
      );

      result.data[index].language = await Object.keys(language.data);
      console.log(result.data[index]);
      console.log(Object.keys(language.data));
      console.log("É array?", Array.isArray(result.data[index].language));
      console.log("Array", result.data[index].language);
    });

    console.log("Requisição");

    return result.data;
  } catch (err: any) {
    console.log("Req");
    return;
  }
};

export const ProjectsHome = async () => {
  const repositoriesGithub = await findRepositoriesGithub();

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center flex-row flex-wrap gap-6 mt-6">
      {repositoriesGithub &&
        repositoriesGithub.map((repository) => (
          <Card
            key={repository.id}
            className="md:min-h-[320px] md:min-w-[320px] md:max-h-[320px] md:max-w-[320px] w-[90%] max-h-[320px] bg-inherit text-white font-montserrat border-gray-700 hover:border-white transition-all border-dashed flex flex-col justify-between"
          >
            <CardHeader>
              <CardTitle>{repository.name}</CardTitle>
              <CardDescription className="text-gray-500 font-bold">
                {repository.description
                  ? repository.description
                  : "Não tem descrição"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full bg-zinc-900 rounded p-2">
                <p>Languages:</p>
                <div className="w-full flex flex-row flex-wrap gap-2 ">
                  {repository.language &&
                    repository.language.length > 0 &&
                    Array.isArray(repository.language) &&
                    repository.language.map((language) => (
                      <Badge
                        className="bg-zinc-800 cursor-default hover:bg-zinc-700"
                        key={language}
                      >
                        {language}
                      </Badge>
                    ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-black font-bold hover:bg-gray-200 flex flex-row items-center justify-center">
                <a href={repository.url}>
                  <Link className="mr-2 h-4 w-4" />
                </a>
                <p>Repositorio</p>
              </Button>
            </CardFooter>
          </Card>
        ))}

      {/*< Card className="md:min-h-[320px] md:min-w-[320px] md:max-h-[320px] md:max-w-[320px] w-[90%] max-h-[320px] bg-inherit text-white font-montserrat border-gray-700 hover:border-white transition-all border-dashed flex flex-col justify-between">
        <CardHeader>
          <CardTitle>Teste</CardTitle>
          <CardDescription className="text-gray-500 font-bold">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full bg-zinc-900 rounded p-2">
            <p>Languages:</p>
            <div className="w-full flex flex-row flex-wrap gap-2 ">
              <Badge className="bg-zinc-800 cursor-default hover:bg-zinc-700">
                Typescript
              </Badge>
              <Badge className="bg-zinc-800 cursor-default hover:bg-zinc-700">
                CSS
              </Badge>
              <Badge className="bg-zinc-800 cursor-default hover:bg-zinc-700">
                Java
              </Badge>
              <Badge className="bg-zinc-800 cursor-default hover:bg-zinc-700">
                Objective-C
              </Badge>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-white text-black font-bold hover:bg-gray-200 flex flex-row items-center justify-center">
            <a href="#">
              <Link className="mr-2 h-4 w-4" />
            </a>
            <p>Repositorio</p>
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
};
