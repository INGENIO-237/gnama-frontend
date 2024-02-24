import { useCreateUser } from "@/api/data/users";
import { AppState, Auth0Provider, User } from "@auth0/auth0-react";

type Props = {
  children: React.ReactNode;
};

export default function CustomAuth0Provider({ children }: Props) {
  const { registerUser } = useCreateUser();

  const domain = import.meta.env.VITE_AUTH0_DOMAIN;
  const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
  const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;

  if (!domain || !clientId || !redirectUri) {
    throw new Error("Unable to initialize auth0");
  }

  function onRedirectCallback(appState?: AppState, user?: User) {
    if (user) {
      registerUser({
        authProviderId: user.sub as string,
        email: user.email as string,
      });
    }
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
