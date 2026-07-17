"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { authClient } from "@/lib/auth-client"

type Mode = "sign-in" | "sign-up"

export default function AuthForm({ mode }: { mode: Mode }) {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isSignUp = mode === "sign-up"

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (isSignUp) {
        const { error } = await authClient.signUp.email({
          email,
          password,
          name,
          phone,
        } as Parameters<typeof authClient.signUp.email>[0])
        if (error) {
          setError(translateError(error.message))
          return
        }
      } else {
        const { error } = await authClient.signIn.email({ email, password })
        if (error) {
          setError(translateError(error.message))
          return
        }
      }
      router.push("/dashboard")
      router.refresh()
    } catch {
      setError("حدث خطأ غير متوقع. حاول مرة أخرى.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      {isSignUp && (
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
            الاسم الكامل
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="مثال: أحمد محمد"
            className="input"
            autoComplete="name"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
          البريد الإلكتروني
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="input"
          autoComplete="email"
          dir="ltr"
        />
      </div>

      {isSignUp && (
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
            رقم الهاتف <span style={{ color: "var(--text-muted)" }}>(اختياري)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="01xxxxxxxxx"
            className="input"
            autoComplete="tel"
            dir="ltr"
          />
        </div>
      )}

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-bold" style={{ color: "var(--text-primary)" }}>
          كلمة المرور
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="8 أحرف على الأقل"
          className="input"
          autoComplete={isSignUp ? "new-password" : "current-password"}
          dir="ltr"
        />
      </div>

      {error && (
        <p
          role="alert"
          className="text-sm font-semibold rounded-xl px-4 py-3"
          style={{ background: "rgba(255,107,107,0.12)", color: "#FF6B6B", border: "1px solid rgba(255,107,107,0.3)" }}
        >
          {error}
        </p>
      )}

      <button type="submit" disabled={loading} className="btn btn-gold w-full" style={{ opacity: loading ? 0.7 : 1 }}>
        {loading ? "جارٍ المعالجة..." : isSignUp ? "إنشاء الحساب" : "تسجيل الدخول"}
      </button>

      <p className="text-center text-sm" style={{ color: "var(--text-secondary)" }}>
        {isSignUp ? "لديك حساب بالفعل؟ " : "ليس لديك حساب؟ "}
        <Link
          href={isSignUp ? "/auth/login" : "/auth/register"}
          className="font-bold"
          style={{ color: "var(--gold-dark)" }}
        >
          {isSignUp ? "سجّل الدخول" : "أنشئ حساباً جديداً"}
        </Link>
      </p>
    </form>
  )
}

function translateError(message?: string): string {
  if (!message) return "حدث خطأ. حاول مرة أخرى."
  const m = message.toLowerCase()
  if (m.includes("invalid") && m.includes("password")) return "البريد الإلكتروني أو كلمة المرور غير صحيحة."
  if (m.includes("invalid email") || m.includes("credential")) return "البريد الإلكتروني أو كلمة المرور غير صحيحة."
  if (m.includes("already") || m.includes("exists")) return "هذا البريد الإلكتروني مسجّل بالفعل."
  if (m.includes("password")) return "كلمة المرور يجب أن تكون 8 أحرف على الأقل."
  return "حدث خطأ. تأكد من البيانات وحاول مجدداً."
}
