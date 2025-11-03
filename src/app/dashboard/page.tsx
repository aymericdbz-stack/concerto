import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createSupabaseServerClient } from "@/lib/supabase-server";
import { DashboardClient } from "./_components/DashboardClient";

export const metadata: Metadata = {
  title: "Espace abonné — Concerto",
};

export default async function DashboardPage() {
  const supabase = createSupabaseServerClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/login");
  }

  return <DashboardClient />;
}
