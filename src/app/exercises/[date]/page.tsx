// src/app/exercises/[date]/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { getExercisesByDate } from "~/server/queries";
import ExerciseTable from "~/app/_workouts/exercise-table";

export default async function ExercisesByDatePage({
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
  const exercises = await getExercisesByDate(date);

  return (
    <main>
      <SignedIn>
        <ExerciseTable exercises={exercises} />
      </SignedIn>
    </main>
  );
}
