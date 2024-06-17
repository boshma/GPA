// src/app/_workouts/exercise-table.tsx
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
import { Exercise } from "~/server/types";

interface ExerciseTableProps {
  exercise: Exercise;
}

export default function ExerciseTable() {
  return (
    <Table>
    <TableCaption>Sets for a given exercise</TableCaption>
    <TableHeader>
      <TableRow>
        <TableHead className="w-[100px]">Set 1</TableHead>
        <TableHead>Set 2</TableHead>
        <TableHead>Set 3</TableHead>
        <TableHead>Set 4</TableHead>
        <TableHead>Set 5</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
 
        <TableRow>
          <TableCell className="font-medium">
          
          </TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell></TableCell>
          <TableCell>
    
          </TableCell>
        </TableRow>
    </TableBody>
    <TableFooter>

    </TableFooter>
  </Table>
  );
}
