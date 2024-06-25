// src/app/_workouts/edit-exercise.tsx
import { clerkClient } from "@clerk/nextjs/server";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { getExerciseById, updateExercise, deleteExercise } from "~/server/queries";
import { Icon } from "@iconify/react";

export async function EditExerciseForm(props: { exerciseId: string }) {

  const idAsNumb = parseInt(props.exerciseId);
  const exercise = await getExerciseById(idAsNumb);

  if (!exercise) {
    return <div>Exercise not found</div>;
  }

  const userInfo = await clerkClient.users.getUser(exercise.userId);

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow p-4">
        <h1 className="text-2xl mb-4">Edit Exercise: {exercise.name}</h1>
        <form action={async (formData) => {
          "use server";

          const name = formData.get("name")?.toString() || "";

          await updateExercise(exercise.id, name);
        }}>
          <div className="mb-2">
            <label>
              <strong>Name:</strong>
              <Input type="text" name="name" defaultValue={exercise.name} required />
            </label>
          </div>
          <Button type="submit" variant="ghost" className="icon-button">
            <Icon icon="material-symbols:done" style={{ color: '#ffffff', fontSize: '24px' }} />
          </Button>
        </form>

        <form
          action={async () => {
            "use server";

            await deleteExercise(exercise.id);
          }}
        >
          <Button type="submit" variant="ghost" className="icon-button">
            <Icon icon="material-symbols:delete" style={{ color: "#ef0606", fontSize: '24px' }} />
          </Button>
        </form>

        <div className="mb-2">
          <strong>Uploaded By:</strong> {userInfo.fullName}
        </div>
      </div>
    </div>
  );
}
