import { addMeal } from "~/server/queries";
import { Button } from "~/components/ui/button";

export async function AddMealForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";
    
    const name = formData.get("name") as string;
    const protein = Number(formData.get("protein"));
    const carbs = Number(formData.get("carbs"));
    const fat = Number(formData.get("fat"));

    await addMeal(name, protein, carbs, fat);
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor="name">Meal Name:</label>
        <input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="protein">Protein (g):</label>
        <input type="number" name="protein" id="protein" required />
      </div>
      <div>
        <label htmlFor="carbs">Carbs (g):</label>
        <input type="number" name="carbs" id="carbs" required />
      </div>
      <div>
        <label htmlFor="fat">Fat (g):</label>
        <input type="number" name="fat" id="fat" required />
      </div>
      <Button type="submit">Add Meal</Button>
    </form>
  );
}
