import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import axios from "axios";

const formSchema = z.object({
  recipeName: z.string().min(2, {
    message: "Recipe name must be at least 2 characters",
  }),
  recipeImage: z.string().min(2, {
    message: "Recipe name must be at least 2 characters",
  }),
});

const Suggestions = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      recipeName: "",
      recipeImage: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const newRecipe = {
        name: values.recipeName,
        image: values.recipeImage,
      };
      await axios.post("https://recipe-manager-api.vercel.app/api/suggestions", newRecipe);
    } catch (err) {
      console.log("Error creating suggestion");
    }
  }

  return (
    <div className="flex justify-center items-center flex-1 bg-light">
      <div className="shadow-xl p-10 bg-white rounded-xl flex flex-col justify-between">
        <h1 className="pb-10 text-2xl font-semibold">
          Suggest an algerien Recipe
        </h1>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="recipeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Recipe Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="recipeImage"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Recipe image Link</FormLabel>
                  <FormControl>
                    <Input placeholder="Recipe Image" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default Suggestions;
