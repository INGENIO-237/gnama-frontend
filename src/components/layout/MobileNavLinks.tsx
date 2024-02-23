import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { useAuth0 } from "@auth0/auth0-react";

export default function MobileNavLinks() {
  const { logout } = useAuth0();

  return (
    <div className="flex flex-col flex-1 space-y-5 justify-center">
      <Link to="/my-shop" className="font-bold hover:text-orange-500">
        My Restaurant
      </Link>
      <Link to="/profile" className="font-bold hover:text-orange-500">
        Profile
      </Link>
      <Button
        className="px-3 font-bold hover:bg-gray-500"
        onClick={async () => await logout()}
      >
        Log Out
      </Button>
    </div>
  );
}
