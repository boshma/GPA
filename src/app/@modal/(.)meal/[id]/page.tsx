import { Modal } from "../../modal";
import { EditMealForm } from "~/app/_meals/edit-food";

export default async function EditFoodModal({
  params: { id: mealId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <EditMealForm mealId={mealId} />
    </Modal>
  );
}