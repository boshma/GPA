//src/app/_meals/add-meal.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AddMealForm } from "../_meals/add-meal";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default function AddMealPage() {
    return (

        <div>
            <SignedIn>
                <AddMealForm />
            </SignedIn>

            <SignedOut>
                {redirect("/")}
            </SignedOut>
        </div>

    );
}