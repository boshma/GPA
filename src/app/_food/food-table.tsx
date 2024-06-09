import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "~/components/ui/table"


export function MealTable() {
    return (
        <Table>
            <TableCaption>A list of today's meals.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Meal Name</TableHead>
                    <TableHead>Protein(g)</TableHead>
                    <TableHead>Carbs(g)</TableHead>
                    <TableHead className="">Fats</TableHead>
                    <TableHead className="">Calories</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell>5</TableCell>
                    <TableCell className="">5</TableCell>
                    <TableCell className="">5</TableCell>
                </TableRow>
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={4}>Total</TableCell>
                    <TableCell className="">2500</TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    )
}


export default MealTable;