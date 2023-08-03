"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { ReactNode, useState } from "react";


interface IProps {
  name: string;
  alt: string;
  key: string | number;
  children: ReactNode;
}

export const HoverInfoTechsComponent = (props: IProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <HoverCard open={open} onOpenChange={setOpen} key={props.key}>
      <HoverCardTrigger onClick={() => setOpen((prevState) => !prevState)}>
        {props.children}
      </HoverCardTrigger>
      <HoverCardContent className="w-80">{props.name}</HoverCardContent>
    </HoverCard>
  );
};
