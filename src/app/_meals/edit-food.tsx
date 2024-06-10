import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { deleteMeal, getMealById } from "~/server/queries";

export async function EditMealForm(props: { mealId: string }) {
  const meal = await getMealById(props.mealId);

  if (!meal) {
    return <div>Meal not found</div>;
  }

  const userInfo = await clerkClient.users.getUser(meal.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow p-4">
        <h1 className="text-2xl mb-4">{meal.name}</h1>
        <div className="mb-2">
          <strong>Protein:</strong> {meal.protein}g
        </div>
        <div className="mb-2">
          <strong>Carbs:</strong> {meal.carbs}g
        </div>
        <div className="mb-2">
          <strong>Fats:</strong> {meal.fat}g
        </div>
        <div className="mb-2">
          <strong>Date:</strong> {new Date(meal.date).toLocaleDateString()}
        </div>
        <div className="mb-2">
          <strong>Uploaded By:</strong> {userInfo.fullName}
        </div>

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
      </div>
    </div>
  );
}
