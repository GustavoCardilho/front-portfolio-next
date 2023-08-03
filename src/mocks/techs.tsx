import { ReactNode } from "react";
import {
  BiLogoGraphql,
  BiLogoNodejs,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoTypescript,
} from "react-icons/bi";

interface ITechMock {
  img: () => ReactNode;
  alt: string;
  name: string;
}

// ReactJS
// NodeJS
// Typescript
// TailwindCss
// GraphQL

export const TechsMock: ITechMock[] = [
  {
    img: () => <BiLogoTypescript size={50} />,
    alt: "Logo do typescript",
    name: "Typescript",
  },
  {
    img: () => <BiLogoTailwindCss size={50} />,
    alt: "Logo do tailwindcss",
    name: "TailwindCss",
  },
  {
    img: () => <BiLogoReact size={50} />,
    alt: "Logo do React",
    name: "ReactJS",
  },
  {
    img: () => <BiLogoNodejs size={50} />,
    alt: "Logo do NodeJS",
    name: "NodeJs",
  },
  {
    img: () => <BiLogoGraphql size={50} />,
    alt: "Logo do graphql",
    name: "GraphQL",
  },
];
