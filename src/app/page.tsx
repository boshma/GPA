import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";


export default async function HomePage() {

  const images = await db.query.images.findMany();


  return (
    <main className="">
      Hello, in progresss
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <Link href={`/posts/${image.id}`}>
              {image.name}
            </Link>
          </li>
        ))}
      </ul>
      
      
      

    </main>
  );
}

