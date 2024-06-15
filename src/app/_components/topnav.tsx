// src/app/_components/topnav.tsx
"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";
import moment from "moment-timezone";

export function TopNav() {
  const today = moment().tz("America/Los_Angeles").format("YYYY-MM-DD");
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link href="/images">Images</Link>
        <Link href={`/meals/${today}`}>Meals</Link>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
