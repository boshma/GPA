// src/app/exercises/[date]/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { getExercisesByDate } from "~/server/queries";
import ExerciseTable from "~/app/_workouts/exercise-table";
import { Exercise } from "~/server/types";
import Link from "next/link";

interface ExercisesByDatePageProps {
  params: { date: string };
}

export default async function ExercisesByDatePage({
  params: { date },
}: ExercisesByDatePageProps) {
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
  const exercises: Exercise[] | null = await getExercisesByDate(date);

  if (!exercises || exercises.length === 0) {
    return (
      <main>
        <SignedIn>
          <div className="h-full w-full text-center text-2xl">
            No exercises found for this date
          </div>
          <Link href="/addExercise">Add Exercise</Link>
        </SignedIn>
      </main>
    );
  }

  // Create an exercise table for each exercise on that given day
  return (
    <main>
      <SignedIn>
        {exercises.map((exercise) => (
          <ExerciseTable key={exercise.id} exercise={exercise} />
        ))}

        <Link href="/addExercise">Add Exercise</Link>
      </SignedIn>
    </main>
  );
}
