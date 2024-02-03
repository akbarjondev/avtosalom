import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";

export const Menu = () => {
  return (
    <Button variant={'ghost'} className="flex p-0 h-auto">
      <MenuIcon className="text-primary-red" />
    </Button>
  );
}