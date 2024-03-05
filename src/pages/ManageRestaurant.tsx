import { useCreateRestaurant, useGetRestaurant } from "@/api/data/restaurant";
import ManageRestaurantForm from "@/forms/restaurant-form/ManageRestaurant";

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  const { restaurant } = useGetRestaurant();
  return (
    <ManageRestaurantForm
      restaurant={restaurant}
      onSave={createRestaurant}
      isLoading={isLoading}
    />
  );
}
