//src/app/_workouts/add-exercise.tsx
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { addExercise } from "~/server/queries";

export async function AddExerciseForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const setCount = parseInt(formData.get("setCount") as string, 10);

    await addExercise(name, setCount);
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor="name">Exercise Name:</label>
        <Input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="setCount">Number of Sets:</label>
        <Input type="number" name="setCount" id="setCount" defaultValue={1} required />
      </div>
      <Button type="submit">Add Exercise</Button>
    </form>
  );
}