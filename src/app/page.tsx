import { MenuComponent } from "@/components/menu";
import { OpeningHome } from "@/components/pages/home/opening";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <MenuComponent />
      <OpeningHome />
    </main>
  );
}
