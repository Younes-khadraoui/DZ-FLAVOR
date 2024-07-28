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

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const formSchema = z.object({
  recipeName: z.string().min(2, {
    message: "Recipe name must be at least 2 characters",
  }),
  recipeImage: z.string().min(2, {
    message: "Recipe name must be at least 2 characters",
  }),
});

const Suggest = () => {
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
      await axios.post(`${BACKEND_URL}/api/suggestions`, newRecipe);
    } catch (err) {
      console.log("Error creating suggestion");
    }
  }
  return (
    <div className="flex flex-col gap-10 md:flex-row justify-around p-10 pb-20 ">
      <div className="flex flex-col  gap-10 flex-1">
        <div className="flex items-center gap-10">
          <h2 className="text-3xl font-bold">Suggest a Recipe</h2>
          <a
            href="/suggestions"
            className="text-green-600 font-semibold text-lg"
          >
            Click here &gt;
          </a>
        </div>
        <div className="mb-4 ">
          <p className="text-xl">
            If you know or have an Algerian recipe and want to suggest it, we
            would be happy to add it to our collection. Your contributions help
            us celebrate the rich and diverse culinary traditions of Algeria.
            <br /> <br />
            By sharing your recipes, you can help others discover new flavors
            and cooking techniques, and you may even see your recipe featured on
            our website!
            <br />
          </p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-1 ">
        <div className="shadow-lg p-10 pb-14 bg-white rounded-xl flex-1 md:flex-none  flex flex-col justify-between">
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
    </div>
  );
};

export default Suggest;
