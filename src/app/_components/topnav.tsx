// src/app/_components/topnav.tsx
"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { SimpleUploadButton } from "./simple-upload-button";

export function TopNav() {
  const today = new Date().toISOString().split('T')[0];

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
