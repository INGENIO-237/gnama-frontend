import { useCreateRestaurant } from "@/api/data/restaurant";
import ManageRestaurantForm from "@/forms/restaurant-form/ManageRestaurant";

export default function ManageRestaurantPage() {
  const { createRestaurant, isLoading } = useCreateRestaurant();
  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
}
