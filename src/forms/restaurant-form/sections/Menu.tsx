import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItem from "./MenuItem";
import { Button } from "@/components/ui/button";
import getKey from "@/utils/generate-key";

export default function MenuSection() {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Menu</h2>
        <FormDescription>Create your menu here</FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => {
          return (
            <FormItem>
              {fields.map((_, index) => (
                <MenuItem index={index} removeItem={() => remove(index)} key={getKey()} />
              ))}
            </FormItem>
          );
        }}
      />
      <Button type="button" onClick={() => append({ name: "", price: 0 })}>
        + Menu Item
      </Button>
    </div>
  );
}
