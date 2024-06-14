//src/server/queries.ts (server actions)
import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { and, eq, sql } from "drizzle-orm";
import { foodEntries, images } from "./db/schema";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages() {

    const user = auth();

    if (!user.userId) throw new Error("Not authenticated");

    const images = await db.query.images.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc } ) => desc(model.id),
    });
    return images;

}

export async function getImage(id: number) {

    const user = auth();

    if (!user.userId) throw new Error("Not authenticated");

    const image = await db.query.images.findFirst({
        where: (model, { eq }) => eq(model.id, id),
    });

    if (!image) throw new Error("Image not found");

    if (image.userId !== user.userId) throw new Error("Not authorized");

    return image;

}
export async function deleteImage(id: number) {
    const user = auth();
    if (!user.userId) throw new Error("Unauthorized");
  
    await db
      .delete(images)
      .where(and(eq(images.id, id), eq(images.userId, user.userId)));

      analyticsServerClient.capture({
        distinctId: user.userId,
        event: "delete image",
        properties: {
          imageId: id,
        },
      });
  
    redirect("/images");
  }

  export async function getMyMeals() {
    const user = auth();

    if (!user.userId) throw new Error("Not authenticated");

    const meals = await db.query.foodEntries.findMany({
        where: (model, { eq }) => eq(model.userId, user.userId),
        orderBy: (model, { desc }) => desc(model.date),
    });
    return meals;
}



export async function addMeal(name: string, protein: number, carbs: number, fat: number) {
  const user = auth();
  if (!user.userId) throw new Error("Not authenticated");

  const date = new Date().toISOString().split('T')[0];
  const now = new Date().toISOString(); 

  await db.insert(foodEntries).values({
      name: sql`${name}`,
      protein: sql`${protein}`,
      carbs: sql`${carbs}`,
      fat: sql`${fat}`,
      userId: sql`${user.userId}`,
      date: sql`${date}`,
      createdAt: sql`${now}`,
      updatedAt: sql`${now}`,
  });

  analyticsServerClient.capture({
      distinctId: user.userId,
      event: "add meal",
      properties: {
          name,
          protein,
          carbs,
          fat,
      },
  });

  redirect(`/meals/${date}`);
}

export async function getMealById(id: string) {
  const user = auth();

  if (!user.userId) throw new Error("Not authenticated");

  const meal = await db.query.foodEntries.findFirst({
      where: (model, { eq }) => eq(model.id, id),
  });

  if (!meal) throw new Error("Meal not found");

  if (meal.userId !== user.userId) throw new Error("Not authorized");

  return meal;
}

export async function deleteMeal(id: string) {
  const user = auth();
  if (!user.userId) throw new Error("Unauthorized");

  const meal = await db.query.foodEntries.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!meal) throw new Error("Meal not found");
  if (meal.userId !== user.userId) throw new Error("Not authorized");

  await db.delete(foodEntries)
    .where(and(eq(foodEntries.id, id), eq(foodEntries.userId, user.userId)));

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "delete meal",
    properties: {
      mealId: id,
    },
  });

  const today = new Date().toISOString().split('T')[0];
  redirect(`/meals/${today}`);
}


export async function updateMeal(id: string, name: string, protein: number, carbs: number, fat: number) {
  const user = auth();
  if (!user.userId) throw new Error("Not authenticated");

  const now = new Date().toISOString(); // Get current timestamp for updatedAt

  await db.update(foodEntries)
    .set({
      name: sql`${name}`,
      protein: sql`${protein}`,
      carbs: sql`${carbs}`,
      fat: sql`${fat}`,
      updatedAt: sql`${now}`
    })
    .where(and(eq(foodEntries.id, id), eq(foodEntries.userId, user.userId)));

  analyticsServerClient.capture({
    distinctId: user.userId,
    event: "update meal",
    properties: {
      mealId: id,
      name,
      protein,
      carbs,
      fat,
    },
  });

  const today = new Date().toISOString().split('T')[0];
  redirect(`/meals/${today}`);
}

export async function getMealsByDate(date: string) {
  const user = auth();

  if (!user.userId) throw new Error("Not authenticated");

  const meals = await db.query.foodEntries.findMany({
    where: (model, { eq }) => eq(model.date, date),
    orderBy: (model, { desc }) => desc(model.date),
  });
  
  return meals;
}