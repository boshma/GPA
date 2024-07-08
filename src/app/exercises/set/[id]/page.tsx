// src/app/set/[id]/page.tsx
import { EditSetForm } from "~/app/_workouts/edit-set";

export default async function EditSetModal({
  params: { id: setId },
}: {
  params: { id: string };
}) {
  return (
    <EditSetForm setId={setId} />
  );
}
