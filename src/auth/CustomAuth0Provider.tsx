import { AppState, Auth0Provider, User } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

export default function CustomAuth0Provider({ children }: Props) {
  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  const navigate = useNavigate();

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth0");
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  function onRedirectCallback(appState?: AppState, user?: User) {
    navigate("/auth-callback");
  }

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{ redirect_uri: redirectUri }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
}
