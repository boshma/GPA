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
import { Button } from "~/components/ui/button";
import { addSetToExercise } from "~/server/queries";

interface ExerciseTableProps {
  exercise: Exercise;
}

export default function ExerciseTable({ exercise }: ExerciseTableProps) {
  // Sort sets by ID
  const sortedSets = [...exercise.sets].sort((a, b) => a.id - b.id);

  return (
    <Table>
      <TableCaption>
        <Link href={`/exercise/${exercise.id}`}>{exercise.name}</Link>
        <form action={async () => {
          "use server";
          await addSetToExercise(exercise.id);
        }}>
          <Button type="submit" variant="ghost" className="icon-button">
            Add Set
          </Button>
        </form>
      </TableCaption>
      <TableHeader>
        <TableRow>
          {sortedSets.map((_, index) => (
            <TableHead key={index}>Set {index + 1}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          {sortedSets.map((set, index) => (
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
