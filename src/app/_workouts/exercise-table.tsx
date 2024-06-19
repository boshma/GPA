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

export default function ExerciseTable({ exercise }: ExerciseTableProps) {
  return (
    <Table>
      <TableCaption>{exercise.name}</TableCaption>
      <TableHeader>
        <TableRow>
          {exercise.sets.map((_, index) => (
            <TableHead key={index}>Set {index + 1}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {exercise.sets.map((set, index) => (
            <TableCell key={index}>
              {set.repetitions}x{set.weight}
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
