import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

type Props = {
  index: string | number;
  removeItem: () => void;
};

export default function MenuItem({ index, removeItem }: Props) {
  const { control } = useFormContext();
  return (
    <div className="flex items-end gap-2">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          );
        }}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => {
          return (
            <FormItem>
              <FormLabel>Price ($)</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          );
        }}
      />
      <Button type="button" className="bg-red-500" onClick={removeItem}>
        Remove
      </Button>
    </div>
  );
}
