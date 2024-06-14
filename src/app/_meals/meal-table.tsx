// src/app/_meals/meal-table.tsx
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";

export interface Meal {
  id: string;
  name: string;
  protein: number;
  carbs: number;
  fat: number;
  date: string;
  userId: string;
}

interface MealTableProps {
  meals: Meal[];
}

export default function MealTable({ meals }: MealTableProps) {
  const totalProtein = meals.reduce((total, meal) => total + meal.protein, 0);
  const totalCarbs = meals.reduce((total, meal) => total + meal.carbs, 0);
  const totalFats = meals.reduce((total, meal) => total + meal.fat, 0);
  const totalCalories = meals.reduce(
    (total, meal) =>
      total + (meal.protein * 4 + meal.carbs * 4 + meal.fat * 9),
    0
  );

  return (
    <Table>
      <TableCaption>A list of meals for the selected date.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Meal Name</TableHead>
          <TableHead>Protein(g)</TableHead>
          <TableHead>Carbs(g)</TableHead>
          <TableHead>Fats(g)</TableHead>
          <TableHead>Calories</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {meals.map((meal) => (
          <TableRow key={meal.id}>
            <TableCell className="font-medium">
              <Link href={`/meal/${meal.id}`}>{meal.name}</Link>
            </TableCell>
            <TableCell>{meal.protein}</TableCell>
            <TableCell>{meal.carbs}</TableCell>
            <TableCell>{meal.fat}</TableCell>
            <TableCell>
              {meal.protein * 4 + meal.carbs * 4 + meal.fat * 9}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell>Total</TableCell>
          <TableCell>{totalProtein}</TableCell>
          <TableCell>{totalCarbs}</TableCell>
          <TableCell>{totalFats}</TableCell>
          <TableCell>{totalCalories}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}
