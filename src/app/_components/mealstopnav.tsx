// src/app/_components/mealstopnav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Calendar } from "~/components/ui/calendar";

export function MealsTopNav() {
  const params = useParams();
  const dateParam = params?.date;
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  useEffect(() => {
    if (dateParam) {
      setCurrentDate(new Date(dateParam as string));
    } else {
      setCurrentDate(new Date());
    }
  }, [dateParam]);

  const formatDate = (date: Date) => date.toISOString().split('T')[0];

  const handleDayClick = (date: Date) => {
    router.push(`/meals/${formatDate(date)}`);
    setIsCalendarVisible(false); 
  };

  const toggleCalendarVisibility = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  return (
    <nav className="relative flex w-full items-center justify-between border-b p-4">
      <div>
        <Link href="addMeal">Add Meal</Link>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <span onClick={toggleCalendarVisibility} style={{ cursor: "pointer" }}>
          {formatDate(currentDate)}
        </span>
      </div>
      {isCalendarVisible && (
        <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-black z-10 shadow-lg border rounded">
          <Calendar onDayClick={handleDayClick} />
        </div>
      )}
    </nav>
  );
}
