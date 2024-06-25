// src/app/page.tsx
import { SignedIn, SignedOut } from "@clerk/nextjs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "~/components/ui/carousel";

const foodImages = [
  "/Foodlog.jpg",
  "/AddFood.jpg",
  "/UpdatedFoodLog.jpg",
  "/calendar.jpg",
];

const exerciseImages = [
  "/exercisedashboard.jpg",
  "/editset.jpg",
  "/AddExercise.jpg",
  "/SeeAddedExercise.jpg",
];

export default function HomePage() {
  return (
    <main className="p-4 min-h-screen flex flex-col justify-center items-center">
      <SignedOut>
        <div className="h-full w-full text-center text-2xl mb-8">
          Please sign in above
        </div>
        <div className="flex flex-col items-center">
          <div>Track Your macros</div>
          <div className="flex justify-center mt-4">
            <Carousel className="w-full max-w-2xl">
              <CarouselContent>
                {foodImages.map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto max-h-64 object-contain" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="mt-8">Track Your lifts!</div>
          <div className="flex justify-center mt-4">
            <Carousel className="w-full max-w-2xl">
              <CarouselContent>
                {exerciseImages.map((src, index) => (
                  <CarouselItem key={index} className="flex justify-center">
                    <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto max-h-64 object-contain" />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col items-center">
          <div>Welcome to the Gym Progress App!</div>
        </div>
      </SignedIn>
    </main>
  );
}