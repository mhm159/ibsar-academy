"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type Star = { id: number; x: number; y: number; size: number; delay: number; duration: number };

function generateStars(): Star[] {
  return Array.from({ length: 80 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 0.5,
    delay: Math.random() * 4,
    duration: Math.random() * 3 + 2,
  }));
}

const floatingOrbs = [
  { size: 400, x: -10, y: 10, color: "rgba(201, 168, 76, 0.08)", duration: 8 },
  { size: 350, x: 70, y: -5, color: "rgba(27, 108, 168, 0.1)", duration: 10 },
  { size: 300, x: 30, y: 60, color: "rgba(45, 106, 79, 0.07)", duration: 12 },
];

export function HeroSection() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars());
  }, []);

  useEffect(() => {
    const targets = [
      { el: document.getElementById("count-students"), target: 3500, suffix: "+" },
      { el: document.getElementById("count-teachers"), target: 150, suffix: "+" },
      { el: document.getElementById("count-sessions"), target: 12000, suffix: "+" },
      { el: document.getElementById("count-rating"), target: 4.9, suffix: "⭐", decimal: true },
    ];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        targets.forEach(({ el, target, suffix, decimal }) => {
          if (!el) return;
          let start = 0;
          const duration = 2000;
          const step = (timestamp: number) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            const value = decimal
              ? (ease * target).toFixed(1)
              : Math.floor(ease * target).toLocaleString("ar-EG");
            el.textContent = value + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
        observer.disconnect();

      });
    }, { threshold: 0.3 });

    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.12) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(27,108,168,0.12) 0%, transparent 55%), linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)",
      }}
      aria-label="الصفحة الرئيسية"
    >
      {/* Stars */}
      <div className="stars-container" aria-hidden="true">
        {stars.map((star) => (
          <div
            key={star.id}
            className="star"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: Math.random() * 0.7 + 0.2,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Floating orbs */}
      {floatingOrbs.map((orb, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="absolute rounded-full pointer-events-none blur-3xl animate-float"
          style={{
            width: orb.size,
            height: orb.size,
            left: `${orb.x}%`,
            top: `${orb.y}%`,
            background: orb.color,
            animationDuration: `${orb.duration}s`,
            animationDelay: `${i * 2}s`,
          }}
        />
      ))}

      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,168,76,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10 pt-28 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8 animate-slide-up">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
            <span className="text-sm text-gray-300 font-medium">
              🇪🇬 الأكاديمية الرائدة في مصر والعالم العربي
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-display text-white mb-6 animate-slide-up delay-100">
            نفتح أعين أطفالك
            <br />
            على{" "}
            <span className="gradient-text-gold relative inline-block">
              مستقبل مشرق
              <svg
                aria-hidden="true"
                className="absolute -bottom-3 inset-x-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
              >
                <path
                  d="M4 8 C60 2, 180 2, 296 8"
                  stroke="url(#gold-line)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                  className="animate-draw-line"
                  style={{
                    strokeDasharray: 1000,
                    strokeDashoffset: 0,
                    animation: "draw-line 1.5s ease-out 0.8s both",
                  }}
                />
                <defs>
                  <linearGradient id="gold-line" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="30%" stopColor="#C9A84C" />
                    <stop offset="70%" stopColor="#E8C96A" />
                    <stop offset="100%" stopColor="transparent" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-slide-up delay-200 leading-relaxed">
            أكاديمية إبصار تُعلّم أطفالك{" "}
            <strong className="text-white">البرمجة، الروبوتيكس، والحساب الذهني</strong>{" "}
            مع أمهر المعلمين المتخصصين — حصص مباشرة، تفاعلية، وممتعة.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16 animate-slide-up delay-300">
            <Link
              href="/auth/register/student"
              id="hero-cta-student"
              className="btn btn-gold text-base px-8 py-4 text-lg"
            >
              🚀 ابدأ الحصة التجريبية مجاناً
            </Link>
            <Link
              href="#how-it-works"
              id="hero-cta-how"
              className="btn btn-ghost text-base px-8 py-4"
            >
              ▶ كيف يعمل؟
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-8 animate-slide-up delay-400">
            {[
              { icon: "🔒", text: "دفع آمن 100%" },
              { icon: "✅", text: "معلمون معتمدون" },
              { icon: "🎯", text: "حصة تجريبية مجانية" },
              { icon: "📱", text: "متاح على الجوال" },
            ].map((badge) => (
              <div key={badge.text} className="flex items-center gap-2">
                <span className="text-xl" aria-hidden="true">{badge.icon}</span>
                <span className="text-gray-400 text-sm font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Counter */}
        <div
          ref={counterRef}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto"
          aria-label="إحصائيات المنصة"
        >
          {[
            { id: "count-students", label: "طالب مسجّل", defaultVal: "٣٥٠٠+" },
            { id: "count-teachers", label: "معلم متخصص", defaultVal: "١٥٠+" },
            { id: "count-sessions", label: "حصة مكتملة", defaultVal: "١٢٠٠٠+" },
            { id: "count-rating", label: "تقييم المنصة", defaultVal: "٤.٩⭐" },
          ].map((stat) => (
            <div key={stat.id} className="glass-card p-6 text-center">
              <div
                id={stat.id}
                className="text-2xl md:text-3xl font-black gradient-text-gold mb-1"
                aria-live="polite"
              >
                {stat.defaultVal}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 inset-x-0" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80H1440V30C1200 60 900 70 720 50C540 30 240 10 0 40V80Z"
            fill="rgba(234, 230, 220, 0.03)"
          />
        </svg>
      </div>
    </section>
  );
}
