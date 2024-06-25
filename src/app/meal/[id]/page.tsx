//src/app/meal/[id]/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { EditMealForm } from "~/app/_meals/edit-food";

export default async function EditMealModal({
  params: { id: mealId },
}: {
  params: { id: string };
}) {
  return (
    <div>
      <SignedIn>
        <EditMealForm mealId={mealId} />
      </SignedIn>

      <SignedOut>
        Please sign in above
      </SignedOut>
    </div>



  );
}