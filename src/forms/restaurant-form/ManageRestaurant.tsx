/* eslint-disable @typescript-eslint/no-unused-vars */
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { array, coerce, object, string, z } from "zod";
import DetailsSection from "./sections/Details";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import CuisinesSection from "./sections/Cuisines";

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
  console.log(onSave, isLoading);

  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [{ name: "", price: 0 }],
    },
  });

  function onSubmit(data: RestaurantFormData) {
    return data;
  }

  return (
    <Form {...form}>
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 bg-gray-50 p-10 rounded-lg"
        >
          <DetailsSection />
          <Separator />
          <CuisinesSection />
        </form>
      </FormProvider>
    </Form>
  );
}
