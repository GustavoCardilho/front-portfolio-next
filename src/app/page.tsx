import { MenuComponent } from "@/components/menu";
import { OpeningHome } from "@/components/pages/home/opening";
import { ProjectsHome } from "@/components/pages/home/projects";
import Image from "next/image";

export default async function Home() {
  return (
    <main className="">
      <MenuComponent />
      <OpeningHome />
      <ProjectsHome />
    </main>
  );
}
