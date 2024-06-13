//src/app/editMeal/[id]/page.tsx
import { EditMealForm } from "~/app/_meals/edit-food";

export default async function EditMealModal({
  params: { id: mealId },
}: {
  params: { id: string };
}) {
  return (
      <EditMealForm mealId = {mealId} />
  );
}