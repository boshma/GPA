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
import { getMyMeals } from "~/server/queries";

export default async function MealTable() {
    const today = new Date().toISOString().split('T')[0] || ''; // Format as YYYY-MM-DD or use an empty string as default

    // Fetch meals for today's date
    const meals = await getMyMeals(today);;

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
                        <TableCell className="font-medium">
                            <Link href={`/meal/${meal.id}`}>
                                {meal.name}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href={`/meal/${meal.id}`}>
                                {meal.protein}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href={`/meal/${meal.id}`}>
                                {meal.carbs}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href={`/meal/${meal.id}`}>
                                {meal.fat}
                            </Link>
                        </TableCell>
                        <TableCell>
                            <Link href={`/meal/${meal.id}`}>
                                {meal.protein * 4 + meal.carbs * 4 + meal.fat * 9}
                            </Link>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="">
                        {meals.reduce((total, meal) => total + (meal.protein * 4 + meal.carbs * 4 + meal.fat * 9), 0)}
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}
