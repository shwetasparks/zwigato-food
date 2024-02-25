import { Menu } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetDescription,
  SheetContent,
  SheetTitle,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <SheetTitle>
          <span>Welcome to ZWIGATO</span>
        </SheetTitle>
        <Separator />
        <SheetDescription className="flex flex-col gap-4">
          <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  ); 
};

export default MobileNav;
