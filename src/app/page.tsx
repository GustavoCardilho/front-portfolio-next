import { MenuComponent } from "@/components/menu";
import { AxvalHome } from "@/components/pages/home/axval";
import { OpeningHome } from "@/components/pages/home/opening";
import { ProjectsHome } from "@/components/pages/home/projects";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <MenuComponent />
      <OpeningHome />
      <p className="text-4xl font-righteous text-center mx-2 text-white">
        Destaques - Axval
      </p>
      <AxvalHome />
      <p className="text-4xl font-righteous text-center mt-12 text-white">
        Repositorio
      </p>
      <ProjectsHome />
    </main>
  );
}
