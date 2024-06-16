//src/app/_workouts/add-exercise.tsx

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { addExercise } from "~/server/queries";

export async function AddExerciseForm() {
  const handleSubmit = async (formData: FormData) => {
    "use server";

    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const setCount = parseInt(formData.get("setCount") as string);

    const sets = [];
    for (let i = 0; i < setCount; i++) {
      sets.push({
        repetitions: parseInt(formData.get(`repetitions${i}`) as string),
        weight: parseFloat(formData.get(`weight${i}`) as string),
      });
    }

    await addExercise(name, description, sets);
  };

  return (
    <form action={handleSubmit}>
      <div>
        <label htmlFor="name">Exercise Name:</label>
        <Input type="text" name="name" id="name" required />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <Input type="text" name="description" id="description" />
      </div>
      <div>
        <label htmlFor="setCount">Number of Sets:</label>
        <Input type="number" name="setCount" id="setCount" defaultValue={1} required />
      </div>
      <Button type="submit">Generate Sets</Button>
    </form>
  );
}
