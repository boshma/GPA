//src/app/_workouts/add-exercise.tsx

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { useState } from "react";
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

  const [setCount, setSetCount] = useState(1);

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
        <Input type="number" name="setCount" id="setCount" value={setCount} onChange={(e) => setSetCount(parseInt(e.target.value))} required />
      </div>
      {Array.from({ length: setCount }).map((_, index) => (
        <div key={index}>
          <label htmlFor={`repetitions${index}`}>Set {index + 1} Repetitions:</label>
          <Input type="number" name={`repetitions${index}`} id={`repetitions${index}`} required />
          <label htmlFor={`weight${index}`}>Set {index + 1} Weight:</label>
          <Input type="number" name={`weight${index}`} id={`weight${index}`} step="0.01" required />
        </div>
      ))}
      <Button type="submit">Add Exercise</Button>
    </form>
  );
}
