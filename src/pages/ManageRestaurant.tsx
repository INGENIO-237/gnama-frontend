import ManageRestaurantForm from "@/forms/restaurant-form/ManageRestaurant";

export default function ManageRestaurantPage() {
  function onSave(restaurantFormData: FormData): void {
    console.log(restaurantFormData);
  }
  return <ManageRestaurantForm onSave={onSave} isLoading={false} />;
}
