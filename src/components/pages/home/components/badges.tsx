import { Badge } from "@/components/ui/badge";

interface IProps {
  languages: string[] | undefined;
}

export const BadgesComponentHome = (props: IProps) => {
  return (
    <>
      {props.languages && (
        <Badge className="bg-zinc-800 cursor-default hover:bg-zinc-700">
          {props.languages}
        </Badge>
      )}
    </>
  );
};
