import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import Image from "next/image";
import { getMyImages } from "~/server/queries";
import MealTable from "../_meals/meal-table";
import { AddMealForm } from "../_meals/add-meal";

export const dynamic = "force-dynamic";


export default function MealsPage() {
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please sign in above
        </div>
      </SignedOut>
      <SignedIn>
      <Link href={`/addMeal`}>add meal</Link>
        <MealTable />
      </SignedIn>
    </main>
  );
}