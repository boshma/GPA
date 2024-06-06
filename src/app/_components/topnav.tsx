"use client";


import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { SimpleUploadButton } from "./simple-upload-button";


export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4" >
      <div>Home</div>

      <div className="flex flex-row gap-4 items-center">

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