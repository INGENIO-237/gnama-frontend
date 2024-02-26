import { useMutation } from "react-query";
import server from "../server";
import { useAuth0 } from "@auth0/auth0-react";

type CreateUserPayload = {
  authProviderId: string;
  email: string;
};

export function useCreateUser() {
  const { getAccessTokenSilently } = useAuth0();

  getAccessTokenSilently().then(
    (token) =>
      (server.defaults.headers.common.Authorization = "Bearer " + token)
  );

  async function createUser(user: CreateUserPayload) {
    return server
      .post("/users", user)
      .then(async (response) => response)
      .catch((error) => {
        console.log({ error });
        throw new Error("Failed to create user");
      });
  }
  const {
    mutateAsync: registerUser,
    isError,
    isLoading,
    isSuccess,
  } = useMutation(createUser);

  return { registerUser, isError, isLoading, isSuccess };
}
