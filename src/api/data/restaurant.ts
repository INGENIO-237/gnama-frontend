import { useMutation, useQuery } from "react-query";
import server from "../server";
import { toast } from "sonner";
import { Restaurant } from "@/types/restaurant";

export function useCreateRestaurant() {
  async function createRestaurantRequest(
    restaurant: FormData
  ): Promise<Restaurant> {
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

export function useGetRestaurant() {
  async function getRestaurantRequest() {
    const user = localStorage.getItem("userId");

    return server
      .get("/restaurants", {
        params: {
          user,
        },
      })
      .then((response) =>
        response.data.length > 0 ? response.data[0] : response.data
      )
      .catch((error) => {
        console.error(error);
        throw new Error("Could not get the restaurant!");
      });
  }

  const {
    data: restaurant,
    isLoading: isRestaurantLoading,
    error,
  } = useQuery("getRestaurant", getRestaurantRequest);

  if (error) {
    toast.error(error.toString());
  }

  return { restaurant, isRestaurantLoading };
}
