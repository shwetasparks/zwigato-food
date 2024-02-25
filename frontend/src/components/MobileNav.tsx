import { Menu } from "lucide-react";
import { Sheet, SheetTrigger } from "./ui/sheet";
import { Separator } from "@radix-ui/react-separator";
import { SheetContent } from "./ui/sheet";
import { SheetDescription } from "./ui/sheet";
import { Button } from "./ui/button";

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-600" />
      </SheetTrigger>
      <SheetContent className="space-y-3">
        <span>Welcome to ZWIGATO</span>

        <Separator />
        <SheetDescription className="flex">
          <Button className="flex-1 font-bold bg-orange-500">Log In</Button>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
