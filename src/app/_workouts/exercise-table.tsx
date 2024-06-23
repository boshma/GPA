// src/app/_workouts/exercise-table.tsx
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
import { Exercise } from "~/server/types";

interface ExerciseTableProps {
  exercise: Exercise;
}
export default function ExerciseTable({ exercise }: ExerciseTableProps) {
  return (
    <Table>
      <TableCaption>
        <Link href={`/exercise/${exercise.id}`} >{exercise.name}</Link>
      </TableCaption>
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
              <Link href={`/set/${set.id}`}>
                {set.repetitions}x{set.weight}
              </Link>
            </TableCell>
          ))}
        </TableRow>
      </TableBody>
    </Table>
  );
}
