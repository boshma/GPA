import MealTable from "~/app/_meals/meal-table";
import { Modal } from "../(.)img/[id]/modal";
import { AddMealForm } from "~/app/_meals/add-meal";

export default async function AddMealModal() {
  return (
    <Modal>
      <AddMealForm />
    </Modal>
  );
}