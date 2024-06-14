// src/app/meals/[date]/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMealsByDate } from "~/server/queries";
import MealTable from "~/app/_meals/meal-table";

export default async function MealsByDatePage({
    params: { date },
  }: {
    params: { date: string };
  }) {
    const meals = await getMealsByDate(date);
  
    return (
      <main>
        <SignedOut>
          <div className="h-full w-full text-center text-2xl">
            Please sign in above
          </div>
        </SignedOut>
        <SignedIn>
          <MealTable meals={meals} />
        </SignedIn>
      </main>
    );
  }