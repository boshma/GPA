//src/app/meals/_meals/add-meal.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import { AddMealForm } from "~/app/_meals/add-meal";

export const dynamic = "force-dynamic";

export default function AddMealPage() {
    return (

        <div>
            <SignedIn>
                <AddMealForm />
            </SignedIn>

            <SignedOut>
                Please sign in above
            </SignedOut>
        </div>

    );
}