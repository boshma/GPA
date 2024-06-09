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
import { getMyMeals } from "~/server/queries";

export default async function MealTable() {
    const meals = await getMyMeals();

    return (
        <Table>
            <TableCaption>A list of today's meals.</TableCaption>
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
                        <TableCell className="font-medium">{meal.name}</TableCell>
                        <TableCell>{meal.protein}</TableCell>
                        <TableCell>{meal.carbs}</TableCell>
                        <TableCell>{meal.fat}</TableCell>
                        <TableCell>{meal.protein * 4 + meal.carbs * 4 + meal.fat * 9}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="">
                        {meals.reduce((total, meal) => total +  (meal.protein * 4 + meal.carbs * 4 + meal.fat * 9), 0)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
