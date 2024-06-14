// src/app/meals/layout.tsx
import "~/styles/globals.css";
import { MealsTopNav } from "../_components/mealstopnav";
import { SignedIn } from "@clerk/nextjs";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="h-screen grid grid-rows-[auto,1fr]">
      <SignedIn>
      <MealsTopNav />
      </SignedIn>
      <main className="overflow-y-scroll">{children}</main>
    </div>
  );
}