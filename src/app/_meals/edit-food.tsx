import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { deleteMeal, getMealById, updateMeal } from "~/server/queries";

export async function EditMealForm(props: { mealId: string }) {
  const meal = await getMealById(props.mealId);

  if (!meal) {
    return <div>Meal not found</div>;
  }

  const userInfo = await clerkClient.users.getUser(meal.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow p-4">
        <h1 className="text-2xl mb-4">Edit Meal: {meal.name}</h1>
        <form action={async (formData) => {
          "use server";

          const name = formData.get("name")?.toString() || "";
          const protein = parseFloat(formData.get("protein")?.toString() || "0");
          const carbs = parseFloat(formData.get("carbs")?.toString() || "0");
          const fat = parseFloat(formData.get("fat")?.toString() || "0");

          await updateMeal(meal.id, name, protein, carbs, fat);
        }}>
          <div className="mb-2">
            <label>
              <strong>Name:</strong>
              <Input type="text" name="name" defaultValue={meal.name} required />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <strong>Protein (g):</strong>
              <Input type="number" name="protein" defaultValue={meal.protein} required />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <strong>Carbs (g):</strong>
              <Input type="number" name="carbs" defaultValue={meal.carbs} required />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <strong>Fats (g):</strong>
              <Input type="number" name="fat" defaultValue={meal.fat} required />
            </label>
          </div>
          <Button type="submit" variant="default">
            Save Changes
          </Button>
        </form>

        <form
          action={async () => {
            "use server";

            await deleteMeal(meal.id);
          }}
        >
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </form>

        <div className="mb-2">
          <strong>Uploaded By:</strong> {userInfo.fullName}
        </div>


      </div>
    </div>
  );
}
