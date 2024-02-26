import { CircleUserRound } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-cebter px-3 font-bold hover:text-orange-600 gap-2 ">
          <CircleUserRound className="text-orange-500" />
          {user?.email}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              className="font-bold hover:text-orange-500 "
              to="/user-profile"
            >
              User profile
            </Link>
          </DropdownMenuItem>
          <Separator />
          <DropdownMenuItem>
            <Button
              onClick={() => logout()}
              className="flex flex-1 font-bold bg-orange-500"
            >
              Logout
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UsernameMenu;
