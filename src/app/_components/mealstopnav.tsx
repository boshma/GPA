import Link from "next/link";

export function MealsTopNav() {
  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div>
        <Link href="/">Home</Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link href="/">tommorow</Link>
        <Link href="/">yesterday</Link>
      </div>
    </nav>
  );
}