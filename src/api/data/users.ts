import { useMutation } from "react-query";
import server from "../server";
import { useAuth0 } from "@auth0/auth0-react";
import { ProfileFormData } from "@/forms/UserProfile";
import { toast } from "sonner";

type CreateUserPayload = {
  authProviderId: string;
  email: string;
};

export function useCreateUser() {
  const { getAccessTokenSilently } = useAuth0();

  getAccessTokenSilently().then((token) => {
    localStorage.setItem("token", token);
    server.defaults.headers.common.Authorization = "Bearer " + token;
  });

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

export function useUpdateUser() {
  async function updateUserRequest(user: ProfileFormData) {
    const { email, name, street, city, country } = user;
    return server
      .put("/users", {
        email,
        name,
        address: { street, city, country },
      })
      .then((response) => response)
      .catch((error) => {
        console.log(error);
        throw new Error("Failed to update user");
      });
  }
  const {
    mutateAsync: updateUser,
    isLoading,
    isSuccess,
    error,
    reset,
  } = useMutation(updateUserRequest);

  if (isSuccess) {
    toast.success("Profile updated!");
  }

  if (error) {
    toast.error(error.toString());

    reset();
  }

  return { updateUser, isLoading };
}
