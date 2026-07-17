import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import AuthShell from "@/components/auth/AuthShell"
import AuthForm from "@/components/auth/AuthForm"

export const metadata: Metadata = {
  title: "تسجيل الدخول",
  description: "سجّل الدخول إلى حسابك في أكاديمية إبصار.",
}

export default async function LoginPage() {
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect("/dashboard")

  return (
    <AuthShell title="مرحباً بعودتك" subtitle="سجّل الدخول لمتابعة رحلة أبنائك التعليمية">
      <AuthForm mode="sign-in" />
    </AuthShell>
  )
}
