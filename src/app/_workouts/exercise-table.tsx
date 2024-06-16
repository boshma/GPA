//src/app/_workouts/exercise-table.tsx
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
  
  interface Set {
    id: number;
    repetitions: number;
    weight: number;
  }
  
  interface Exercise {
    id: number;
    name: string;
    sets: Set[];
  }
  
  interface ExerciseTableProps {
    exercises: Exercise[];
  }
  
  export default function ExerciseTable({ exercises }: ExerciseTableProps) {
    return (
      <>
        {exercises.map((exercise) => (
          <Table key={exercise.id}>
            <TableCaption>{exercise.name}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Set #</TableHead>
                <TableHead>Repetitions</TableHead>
                <TableHead>Weight</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {exercise.sets.map((set, index) => (
                <TableRow key={set.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{set.repetitions}</TableCell>
                  <TableCell>{set.weight}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ))}
      </>
    );
  }
  