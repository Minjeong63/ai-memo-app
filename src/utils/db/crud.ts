import { db } from "@/lib/db";
import { users, memos, categories, type NewUser, type NewMemo, type NewCategory } from "@/lib/schema";
import { eq } from "drizzle-orm";

// 사용자 CRUD 함수
export async function createUser(userData: NewUser) {
  try {
    const [user] = await db.insert(users).values(userData).returning();
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function getUser(id: string) {
  try {
    const user = await db.select().from(users).where(eq(users.id, id)).limit(1);
    return { success: true, data: user[0] || null };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function updateUser(id: string, userData: Partial<NewUser>) {
  try {
    const [user] = await db.update(users).set(userData).where(eq(users.id, id)).returning();
    return { success: true, data: user };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function deleteUser(id: string) {
  try {
    await db.delete(users).where(eq(users.id, id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// 메모 CRUD 함수
export async function createMemo(memoData: NewMemo) {
  try {
    const [memo] = await db.insert(memos).values(memoData).returning();
    return { success: true, data: memo };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function getMemo(id: string) {
  try {
    const memo = await db.select().from(memos).where(eq(memos.id, id)).limit(1);
    return { success: true, data: memo[0] || null };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function updateMemo(id: string, memoData: Partial<NewMemo>) {
  try {
    const [memo] = await db.update(memos).set(memoData).where(eq(memos.id, id)).returning();
    return { success: true, data: memo };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function deleteMemo(id: string) {
  try {
    await db.delete(memos).where(eq(memos.id, id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// 카테고리 CRUD 함수
export async function createCategory(categoryData: NewCategory) {
  try {
    const [category] = await db.insert(categories).values(categoryData).returning();
    return { success: true, data: category };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function getCategory(id: string) {
  try {
    const category = await db.select().from(categories).where(eq(categories.id, id)).limit(1);
    return { success: true, data: category[0] || null };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function updateCategory(id: string, categoryData: Partial<NewCategory>) {
  try {
    const [category] = await db.update(categories).set(categoryData).where(eq(categories.id, id)).returning();
    return { success: true, data: category };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function deleteCategory(id: string) {
  try {
    await db.delete(categories).where(eq(categories.id, id));
    return { success: true };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

// 관계 쿼리 함수
export async function getUserMemos(userId: string) {
  try {
    const userMemos = await db.select().from(memos).where(eq(memos.userId, userId));
    return { success: true, data: userMemos };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}

export async function getUserCategories(userId: string) {
  try {
    const userCategories = await db.select().from(categories).where(eq(categories.userId, userId));
    return { success: true, data: userCategories };
  } catch (error) {
    return { success: false, error: error instanceof Error ? error.message : "Unknown error" };
  }
}
