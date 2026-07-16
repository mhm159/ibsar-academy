"use client";

import Link from "next/link";

export function CTASection() {
  return (
    <section
      id="cta"
      className="section relative overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.2) 0%, transparent 60%), radial-gradient(ellipse at 70% 50%, rgba(27,108,168,0.15) 0%, transparent 60%), linear-gradient(180deg, #0A0F1C 0%, #0F1923 100%)",
      }}
      aria-labelledby="cta-heading"
    >
      {/* Decorative elements */}
      <div aria-hidden="true" className="absolute top-10 right-10 text-6xl opacity-10 animate-float">
        💻
      </div>
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-10 text-6xl opacity-10 animate-float delay-300"
      >
        🤖
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-1/4 text-4xl opacity-5 animate-bounce-subtle"
      >
        🧮
      </div>

      <div className="container relative z-10">
        <div className="glass-card max-w-3xl mx-auto p-10 md:p-16 text-center">
          {/* Glowing ring */}
          <div
            aria-hidden="true"
            className="w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center relative"
            style={{ background: "rgba(201, 168, 76, 0.1)", border: "2px solid var(--gold)" }}
          >
            <span className="text-3xl">🚀</span>
            <div
              className="absolute inset-0 rounded-full animate-pulse-gold"
              style={{ background: "rgba(201, 168, 76, 0.05)" }}
            />
          </div>

          <h2 id="cta-heading" className="text-heading text-white mb-4">
            جاهز تبدأ رحلة{" "}
            <span className="gradient-text-gold">طفلك؟</span>
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto text-lg">
            الحصة التجريبية مجانية تماماً — ٢٥ دقيقة مع معلم متخصص لن تنساها.
            لا بطاقة ائتمانية، لا التزامات.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/auth/register/student"
              id="final-cta-student"
              className="btn btn-gold text-lg px-10 py-4"
            >
              🎓 احجز الحصة التجريبية مجاناً
            </Link>
            <Link
              href="/auth/register/teacher"
              id="final-cta-teacher"
              className="btn btn-outline-gold text-base px-8 py-4"
            >
              👨‍🏫 انضم كمعلم
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-gray-500 text-sm">
            {[
              "✓ مجاني 100%",
              "✓ لا التزامات",
              "✓ دفع آمن",
              "✓ معلمون معتمدون",
            ].map((signal) => (
              <span key={signal} className="text-gray-400">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
