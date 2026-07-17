import { pgTable, text, timestamp, boolean, serial, integer } from "drizzle-orm/pg-core"

// --- Better Auth required tables -------------------------------------------
// Column names are camelCase to match Better Auth's defaults. Do not rename.

export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("emailVerified").notNull().default(false),
  image: text("image"),
  // Application-level role: "parent" | "student" | "teacher" | "admin"
  role: text("role").notNull().default("parent"),
  phone: text("phone"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expiresAt").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
  ipAddress: text("ipAddress"),
  userAgent: text("userAgent"),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
})

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("accountId").notNull(),
  providerId: text("providerId").notNull(),
  userId: text("userId")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("accessToken"),
  refreshToken: text("refreshToken"),
  idToken: text("idToken"),
  accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
  refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  updatedAt: timestamp("updatedAt").notNull().defaultNow(),
})

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expiresAt").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
})

// --- App tables ------------------------------------------------------------
// Every app table carries a plain `userId` column for per-user scoping.
// No FK constraints on app tables (per Neon stack guidance).

// A child/student registered by a parent account.
export const student = pgTable("student", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(), // owner (parent) account id
  name: text("name").notNull(),
  age: integer("age"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

// Enrollment of a student into a specialization track.
// track: "programming" | "robotics" | "mental-math"
export const enrollment = pgTable("enrollment", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(), // owner (parent) account id
  studentId: integer("studentId").notNull(),
  track: text("track").notNull(),
  status: text("status").notNull().default("active"), // active | paused | completed
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})

// Subscription created via Stripe checkout.
// plan: "basic" | "standard" | "premium"
export const subscription = pgTable("subscription", {
  id: serial("id").primaryKey(),
  userId: text("userId").notNull(),
  plan: text("plan").notNull(),
  status: text("status").notNull().default("pending"), // pending | active | canceled
  stripeSessionId: text("stripeSessionId"),
  stripeCustomerId: text("stripeCustomerId"),
  currentPeriodEnd: timestamp("currentPeriodEnd"),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
})
