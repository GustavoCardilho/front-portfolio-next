"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import {
  IAxiosRepositoriesGithub,
  IRepositoriesGithub,
} from "./types/repositoriesGithub";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";

export const ProjectsHome = () => {
  const [isFetch, setIsFetch] = useState<boolean>(false);
  const [repositoriesGithub, setRepositoriesGithub] = useState<
    IRepositoriesGithub[] | undefined
  >();

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

        result.data[index].languageArray = Object.keys(language.data);
        console.log("languagearray", result.data[index].languageArray);
      });

      setIsFetch(true);

      return result.data;
    } catch (err: any) {
      console.log("Req");
      return;
    }
  };

  const handleRepositories = async () => {
    const repositories = await findRepositoriesGithub();
    setRepositoriesGithub(repositories);
  };

  useEffect(() => {
    handleRepositories();
  }, []);

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center flex-row flex-wrap gap-6 mt-6">
      {isFetch &&
        repositoriesGithub &&
        repositoriesGithub.map((repository, index) => (
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
                  {isFetch &&
                    repository.languageArray &&
                    repository.languageArray.map((lang) => (
                      <Badge
                        className="bg-zinc-800 cursor-default hover:bg-zinc-700"
                        key={`languageArray-${lang}`}
                      >
                        {lang}
                      </Badge>
                    ))}
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => window.open(repository.html_url, "_blank")}
                className="w-full bg-white text-black font-bold hover:bg-gray-200 flex flex-row items-center justify-center"
              >
                <Link className="mr-2 h-4 w-4" />
                <p>Repositorio</p>
              </Button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
};
