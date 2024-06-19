//src/app/exercises/layout.tsx
import "~/styles/globals.css";
import { SignedIn } from "@clerk/nextjs";
import { S } from "node_modules/@upstash/redis/zmscore-22fd48c7";
import { ExercisesTopNav } from "../_components/exercisestopnav";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (

      <div className="h-screen grid grid-rows-[auto,1fr]">
        <SignedIn>

        <ExercisesTopNav />

        </SignedIn>

        <main className="">{children}</main>
      </div>

  );
}