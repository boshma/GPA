//src/app/addExercise/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AddExerciseForm } from "../_workouts/add-exercise";
import { redirect } from "next/navigation";


export const dynamic = "force-dynamic";

export default function AddExercisePage() {
  return (
    <div>
      <SignedIn>
        <AddExerciseForm />
      </SignedIn>
      <SignedOut>
        {redirect("/")}
      </SignedOut>
    </div>
  );
}


