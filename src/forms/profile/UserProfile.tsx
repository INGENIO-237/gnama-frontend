import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/helpers/LoadingButton";
import { Button } from "@/components/ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { User } from "@/types/user";

const ProfileFormSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(3, "Name is required"),
  street: z.string().min(3, "Street is required"),
  city: z.string().min(3, "City is required"),
  country: z.string().min(3, "Country is required"),
});

export type ProfileFormData = z.infer<typeof ProfileFormSchema>;

type Props = {
  onSave: (userProfileData: ProfileFormData) => void;
  isLoading: boolean;
  currentUser: User;
};

export default function UserProfileForm({
  onSave,
  isLoading,
  currentUser,
}: Props) {
  const { user } = useAuth0();

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(ProfileFormSchema),
    defaultValues: currentUser,
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 bg-gray-50 rounded-lg p-3 md:p-10"
      >
        <div>
          <h2 className="text-2xl font-bold">Profile</h2>
          <FormDescription>View and change your profile here</FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  value={user?.email}
                  disabled
                  className="bg-white"
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="street"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Street</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
}
