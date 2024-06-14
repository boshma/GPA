// src/app/meals/[date]/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMealsByDate } from "~/server/queries";
import MealTable from "~/app/_meals/meal-table";
import { clerkClient } from "@clerk/nextjs/server";
import { auth } from "@clerk/nextjs/server";

export default async function MealsByDatePage({
  params: { date },
}: {
  params: { date: string };
}) {
  const { userId } = auth();

  if (!userId) {
    // User is not logged in, return early with SignedOut component
    return (
      <main>
        <SignedOut>
          <div className="h-full w-full text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
      </main>
    );
  }

  // User is logged in, call the server action
  const meals = await getMealsByDate(date);

  return (
    <main>
      <SignedIn>
        <MealTable meals={meals} />
      </SignedIn>
    </main>
  );
}
