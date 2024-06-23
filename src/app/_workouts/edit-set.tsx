// src/app/_workouts/edit-set.tsx
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { deleteSet, getSetById, updateSet } from "~/server/queries";

export async function EditSetForm(props: { setId: string }) {
  const set = await getSetById(parseInt(props.setId, 10));

  if (!set) {
    return <div>Set not found</div>;
  }

  return (
    <div className="flex h-full w-screen min-w-0 items-center justify-center text-white">
      <div className="flex-shrink flex-grow p-4">
        <h1 className="text-2xl mb-4">Edit Set</h1>
        <form action={async (formData) => {
          "use server";

          const repetitions = parseInt(formData.get("repetitions")?.toString() || "0", 10);
          const weight = parseFloat(formData.get("weight")?.toString() || "0");

          await updateSet(set.id, repetitions, weight);
        }}>
          <div className="mb-2">
            <label>
              <strong>Repetitions:</strong>
              <Input type="number" name="repetitions" defaultValue={set.repetitions} required />
            </label>
          </div>
          <div className="mb-2">
            <label>
              <strong>Weight:</strong>
              <Input type="number" name="weight" step="0.01" defaultValue={set.weight} required />
            </label>
          </div>
          <Button type="submit" variant="default">
            Save Changes
          </Button>
        </form>

        <form
          action={async () => {
            "use server";

            await deleteSet(set.id);
          }}
        >
          <Button type="submit" variant="destructive">
            Delete
          </Button>
        </form>
      </div>
    </div>
  );
}
