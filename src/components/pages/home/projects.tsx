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

const findRepositoriesGithub = async () => {
  try {
    const result: IAxiosRepositoriesGithub = await axios.get(
      "https://api.github.com/users/Kyoudan/repos"
    );

    result.data.forEach((repository, index) => {
      if (repository.name == "Kyoudan") {
        result.data.splice(index, 1);
      }
    });

    return result.data;
  } catch (err) {
    console.log("Err", err);
  }
};

export const ProjectsHome = async () => {
  const repositoriesGithub = await findRepositoriesGithub();

  return (
    <div className="w-full min-h-[500px] flex items-center justify-center flex-row flex-wrap gap-6 mt-6">
      {repositoriesGithub &&
        repositoriesGithub.map((repository) => (
          <Card className="md:min-h-[320px] md:min-w-[320px] md:max-h-[320px] md:max-w-[320px] w-[90%] max-h-[320px] bg-inherit text-white font-montserrat">
            <CardHeader>
              <CardTitle>{repository.name}</CardTitle>
              <CardDescription className="text-gray-500 font-bold">
                {repository.description
                  ? repository.description
                  : "Não tem descrição"}
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter>
              <Button className="w-full bg-white text-black font-bold hover:bg-gray-200">
                <a href={repository.url}>
                  <Link className="mr-2 h-4 w-4" /> Repositorio
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}

      {/* <Card className="md:min-h-[320px] md:min-w-[320px] md:max-h-[320px] md:max-w-[320px] w-[90%] max-h-[320px] bg-inherit text-white font-montserrat">
        <CardHeader>
          <CardTitle>Teste</CardTitle>
          <CardDescription className="text-gray-500 font-bold">
            Card Description
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-white text-black font-bold hover:bg-gray-200">
            <Link className="mr-2 h-4 w-4" /> Repositorio
          </Button>
        </CardFooter>
      </Card> */}
    </div>
  );
};
