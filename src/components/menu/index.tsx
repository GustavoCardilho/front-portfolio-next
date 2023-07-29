import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Menu as MenuIcon } from "lucide-react";

export const MenuComponent = () => {
  return (
    <div className="absolute top-2 left-2 z-10 cursor-pointer">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <MenuIcon />
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Projetos</MenubarItem>
            <MenubarItem>Contato</MenubarItem>
            <MenubarItem>Sobre mim</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
