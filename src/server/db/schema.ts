import { sql } from "drizzle-orm";
import {
  serial,
  varchar,
  timestamp,
  doublePrecision,
  integer,
  pgTableCreator,
  index,
  foreignKey,
  date,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `gpa_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", { length: 1024 }).notNull(),
    userId: varchar("user_id", { length: 256 }).notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }),
  },
  (image) => ({
    nameIndex: index("image_name_idx").on(image.name), // Updated index name
  })
);

export const foodEntries = createTable(
  "food_entry",
  {
    id: varchar("id", { length: 256 }).primaryKey().default(sql`gen_random_uuid()`),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).default(sql`CURRENT_TIMESTAMP`),
    name: varchar("name", { length: 256 }).notNull(),
    protein: doublePrecision("protein").notNull(),
    carbs: doublePrecision("carbs").notNull(),
    fat: doublePrecision("fat").notNull(),
    date: date("date").notNull(),
    userId: varchar("user_id", { length: 256 }).notNull(),
  },
  (foodEntry) => ({
    userIdDateIndex: index("user_id_date_idx").on(foodEntry.userId, foodEntry.date),
  })
);
export const exercises = createTable(
  "exercise",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    description: varchar("description", { length: 1024 }),
    userId: varchar("user_id", { length: 256 }).notNull(),
    date: date("date").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (exercise) => ({
    nameIndex: index("exercise_name_idx").on(exercise.name), 
    userIdIndex: index("exercise_user_id_idx").on(exercise.userId), 
  })
);

export const sets = createTable(
  "set",
  {
    id: serial("id").primaryKey(),
    exerciseId: integer("exercise_id").notNull()
      .references(() => exercises.id, { onDelete: "cascade" }),
    repetitions: integer("repetitions").notNull(),
    weight: doublePrecision("weight").notNull(),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
  },
  (set) => ({
    exerciseIdIndex: index("set_exercise_id_idx").on(set.exerciseId), 
  })
);