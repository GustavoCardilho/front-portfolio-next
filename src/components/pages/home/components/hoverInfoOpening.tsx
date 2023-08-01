"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Info } from "lucide-react";
import { useState } from "react";

export const HoverInfoOpeningComponent = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger
        className="w-[300px]"
        onClick={() => setOpen((prevState) => !prevState)}
      >
        <Info className="text-gray-500" size={20} />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        Tecnologias utilizadas nesse site: NextJS, TailwindCSS, Shadcn/ui
      </HoverCardContent>
    </HoverCard>
  );
};
