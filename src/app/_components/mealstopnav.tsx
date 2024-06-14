// src/app/_components/mealstopnav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

export function MealsTopNav() {
  const params = useParams();
  const dateParam = params?.date;

  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (dateParam) {
      setCurrentDate(new Date(dateParam as string));
    } else {
      setCurrentDate(new Date());
    }
  }, [dateParam]);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const getPreviousDay = (date: Date) => {
    const previousDay = new Date(date);
    previousDay.setDate(previousDay.getDate() - 1);
    return previousDay;
  };

  const getNextDay = (date: Date) => {
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    return nextDay;
  };

  return (
    <nav className="flex w-full items-center justify-between border-b p-4">
      <div>
        <Link href="/addMeal">Add Meal</Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <Link href={`/meals/${formatDate(getPreviousDay(currentDate))}`}>
          Yesterday
        </Link>
        <span>{formatDate(currentDate)}</span>
        <Link href={`/meals/${formatDate(getNextDay(currentDate))}`}>
          Tomorrow
        </Link>
      </div>
    </nav>
  );
}
