import Link from "next/link";
import { db } from "~/server/db";


export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  return (
    <main className="">
      Hello, in progresss
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              {post.name}
            </Link>
          </li>
        ))}
      </ul>
      
      
      

    </main>
  );
}

