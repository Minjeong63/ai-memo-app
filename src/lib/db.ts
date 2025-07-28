import { createClient } from "@supabase/supabase-js";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

// Supabase 클라이언트 생성
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

// DrizzleORM 클라이언트 생성
const connectionString = process.env.DATABASE_URL!;
const client = postgres(connectionString);
export const db = drizzle(client);

// 싱글톤 패턴으로 데이터베이스 연결 관리
let dbInstance: typeof db | null = null;

export function getDb() {
  if (!dbInstance) {
    dbInstance = db;
  }
  return dbInstance;
}
