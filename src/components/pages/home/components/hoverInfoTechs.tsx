"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { User } from "lucide-react";
import { useState } from "react";

interface IProps {
  text: string;
  img: string;
}

export const HoverInfoTechsComponent = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <HoverCard open={open} onOpenChange={setOpen}>
      <HoverCardTrigger onClick={() => setOpen((prevState) => !prevState)}>
        <User size={30} />
      </HoverCardTrigger>
      <HoverCardContent className="w-80">{props.text}</HoverCardContent>
    </HoverCard>
  );
};
