import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { cuisines } from "@/config/cuisine-options";
import { useFormContext } from "react-hook-form";
import CuisineItem from "./CuisineItem";
import getKey from "@/utils/generate-key";

export default function CuisinesSection() {
  const { control } = useFormContext();

  return (
    <div className="space-y-2">
      <div>
        <h2 className="text-2xl font-bold">Cuisines</h2>
        <FormDescription>
          Select the cuisines that your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="cuisines"
        render={({ field }) => {
          return (
            <FormItem>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
                {cuisines.map((cuisine) => (
                  <CuisineItem
                    field={field}
                    cuisine={cuisine}
                    index={getKey()}
                    key={getKey()}
                  />
                ))}
              </div>
            </FormItem>
          );
        }}
      />
    </div>
  );
}
