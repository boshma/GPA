// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  date,
  doublePrecision,
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `gpa_${name}`);

export const images = createTable(
  "image",
  {
    id: serial("id").primaryKey(),
    name: varchar("name", { length: 256 }).notNull(),
    url: varchar("url", {length: 1024}).notNull(),

    userId: varchar("user_id", { length: 256 }).notNull(),

    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updatedAt", { withTimezone: true }),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
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
    servingSize: doublePrecision("serving_size").default(1).notNull(),
    userId: varchar("user_id", { length: 256 }).notNull(),
  },
  (foodEntry) => ({
    userIdDateIndex: index("user_id_date_idx").on(foodEntry.userId, foodEntry.date),
  })
);