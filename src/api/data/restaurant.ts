import { useMutation } from "react-query";
import server from "../server";
import { toast } from "sonner";
import { Restaurant } from "@/types/restaurant";

export function useCreateRestaurant() {
  async function createRestaurantRequest(restaurant: FormData): Promise<Restaurant> {
    return server
      .post("/restaurants", restaurant, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((response) => response.data)
      .catch((error) => {
        console.error(error);
        throw new Error("Failed to create restaurant !");
      });
  }

  const {
    mutateAsync: createRestaurant,
    error,
    isLoading,
    isSuccess,
  } = useMutation(createRestaurantRequest);

  if (error) {
    toast.error(error.toString());
  }

  if (isSuccess) {
    toast.success("Restaurant created successfully!");
  }

  return { createRestaurant, isLoading };
}
