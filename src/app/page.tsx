import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany();


  return (
    <main className="">
      <main className="">
        <SignedOut>
          <div className="h-full w-full text-2xl">Please sign in above</div>
        </SignedOut>
        <SignedIn>
          <ul>

            {images.map((image) => (
              <li key={image.id}>
                <Link href={`/posts/${image.id}`}>
                  {image.name}
                </Link>
              </li>
            ))}
          </ul>

        </SignedIn>
      </main>




    </main>
  );
}

