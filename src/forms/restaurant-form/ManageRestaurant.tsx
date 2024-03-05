/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { array, coerce, object, string, z } from "zod";
import DetailsSection from "./sections/Details";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./sections/Cuisines";
import MenuSection from "./sections/Menu";
import ImageSection from "./sections/Image";
import LoadingButton from "@/components/helpers/LoadingButton";
import { Button } from "@/components/ui/button";

const formSchema = object({
  name: string({ required_error: "Name is required" }),
  city: string({ required_error: "City is required" }),
  country: string({ required_error: "Country is required" }),
  deliveryPrice: coerce.number({
    required_error: "Price is required",
    invalid_type_error: "Price must be a number",
  }),
  estimatedDeliveryTime: coerce.number({
    required_error: "Delivery time is required",
    invalid_type_error: "Delivery time must be a number",
  }),
  cuisines: array(string()).nonempty({ message: "Select at least one item" }),
  menuItems: array(
    object({
      name: string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  image: z.instanceof(File, { message: "Image is required" }),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

export default function ManageRestaurantForm({ onSave, isLoading }: Props) {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  function onSubmit(data: RestaurantFormData) {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("city", data.city);
    formData.append("country", data.country);
    formData.append("deliveryPrice", (data.deliveryPrice * 100).toString());
    formData.append(
      "estimatedDeliveryTime",
      data.estimatedDeliveryTime.toString()
    );
    data.cuisines.forEach((cuisine, index) => {
      formData.append(`cuisines[${index}]`, cuisine);
    });
    data.menuItems.forEach((menuItem, index) => {
      formData.append(`menuItems[${index}].name`, menuItem.name);
      formData.append(
        `menuItems[${index}].price`,
        (menuItem.price * 100).toString()
      );
    });
    formData.append("image", data.image);

    onSave(formData);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 bg-gray-50 p-10 rounded-lg"
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />
        {isLoading ? <LoadingButton /> : <Button type="submit">Save</Button>}
      </form>
    </Form>
  );
}
