import { useMutation } from "react-query";
import server from "../server";

type CreateUserPayload = {
  authProviderId: string;
  email: string;
};

export function useCreateUser() {
  async function createUser(user: CreateUserPayload) {
    return server
      .post("/users", user)
      .then((response) => response)
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
