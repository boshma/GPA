//src/app/addExercise/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AddExerciseForm } from "~/app/_workouts/add-exercise";


export const dynamic = "force-dynamic";

export default function AddExercisePage() {
  return (
    <div>
      <SignedIn>
        <AddExerciseForm />
      </SignedIn>
      <SignedOut>
         Please sign in above
      </SignedOut>
    </div>
  );
}


