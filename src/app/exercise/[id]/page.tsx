// src/app/exercise/[id]/page.tsx
import { EditExerciseForm } from "~/app/_workouts/edit-exercise";

export default async function EditExerciseModal({
  params: { id: exerciseId },
}: {
  params: { id: string };
}) {
  return (
    <EditExerciseForm exerciseId={exerciseId} />
  );
}
