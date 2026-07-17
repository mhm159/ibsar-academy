import Link from "next/link"
import type { ReactNode } from "react"

export default function AuthShell({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: ReactNode
}) {
  return (
    <main
      className="min-h-screen flex items-center justify-center px-4 py-10"
      style={{
        background:
          "radial-gradient(ellipse at 20% 30%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 85% 70%, rgba(27,108,168,0.12) 0%, transparent 55%), var(--ivory)",
      }}
    >
      <div className="w-full max-w-md">
        <div className="flex flex-col items-center gap-2 mb-8">
          <Link href="/" className="flex items-center gap-3" aria-label="أكاديمية إبصار - الصفحة الرئيسية">
            <span
              className="grid place-items-center rounded-2xl font-black text-2xl"
              style={{
                width: 56,
                height: 56,
                background: "linear-gradient(135deg, var(--gold-dark), var(--gold-light))",
                color: "#0F1923",
              }}
            >
              إ
            </span>
            <span className="text-2xl font-black" style={{ color: "var(--text-primary)" }}>
              أكاديمية إبصار
            </span>
          </Link>
        </div>

        <div className="glass-card p-8" style={{ background: "rgba(255,255,255,0.7)" }}>
          <div className="text-center mb-6">
            <h1 className="text-2xl font-black mb-2" style={{ color: "var(--text-primary)" }}>
              {title}
            </h1>
            <p className="text-sm" style={{ color: "var(--text-secondary)" }}>
              {subtitle}
            </p>
          </div>
          {children}
        </div>

        <p className="text-center text-xs mt-6" style={{ color: "var(--text-muted)" }}>
          بالمتابعة أنت توافق على{" "}
          <Link href="/terms" style={{ color: "var(--gold-dark)" }}>
            شروط الاستخدام
          </Link>{" "}
          و{" "}
          <Link href="/privacy" style={{ color: "var(--gold-dark)" }}>
            سياسة الخصوصية
          </Link>
        </p>
      </div>
    </main>
  )
}
