import { MenuComponent } from "@/components/menu";
import { AboutHome } from "@/components/pages/home/about";
import { AxvalHome } from "@/components/pages/home/axval";
import { OpeningHome } from "@/components/pages/home/opening";
import { ProjectsHome } from "@/components/pages/home/projects";
import { TechsHome } from "@/components/pages/home/techs";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <MenuComponent />
      <OpeningHome />
      <AboutHome />
      <TechsHome />

      <AxvalHome />
      <p className="text-4xl font-righteous text-center my-12 text-white">
        Repositorio
      </p>
      <ProjectsHome />
    </main>
  );
}
