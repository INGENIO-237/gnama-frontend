import { useCreateUser } from "@/api/data/users";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function CallBackPage() {
  const { user } = useAuth0();
  const { registerUser } = useCreateUser();

  const navigate = useNavigate();
  const userCreated = useRef(false);

  useEffect(() => {
    if (user && !userCreated.current) {
      registerUser({
        authProviderId: user.sub as string,
        email: user.email as string,
      });

      userCreated.current = true
    }

    navigate("/");
  }, [navigate, registerUser, user]);

  return (
    <>
      <p>Loading...</p>
    </>
  );
}
