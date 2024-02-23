import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";
("lucide-react");

export default function UserMenu() {
  const { user, logout } = useAuth0();
  return (
    <div className="space-x-6 text-orange-500 flex-1 flex">
      <Link to="/orders">Orders</Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex gap-1 items-center text-ellipsis">
          <CircleUser />
          <span className="text-ellipsis">{user?.email}</span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link to="#" className="hover:text-orange-500">
              My Restaurant
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/profile" className="hover:text-orange-500">
              Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="flex justify-center">
            <Button onClick={async () => logout()}>Log Out</Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
