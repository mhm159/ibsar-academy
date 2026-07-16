"use client";

const testimonials = [
  {
    id: "t1",
    name: "أم كريم - القاهرة",
    avatar: "👩",
    child: "كريم، ١٢ سنة",
    specialty: "برمجة",
    text: "ابني كريم حقق حلمه وبنى أول لعبة من تصميمه بعد ٣ أشهر بس! المعلم أحمد صبور جداً وأسلوبه مختلف. أكاديمية إبصار غيّرت حياتنا.",
    rating: 5,
  },
  {
    id: "t2",
    name: "أ. خالد منصور - الإسكندرية",
    avatar: "👨",
    child: "سلمى، ٩ سنوات",
    specialty: "حساب ذهني",
    text: "بنتي سلمى كانت بتخاف من الأرقام، دلوقتي بتحسب أسرع من الآلة الحاسبة! الحمد لله على هذه المنصة الرائعة.",
    rating: 5,
  },
  {
    id: "t3",
    name: "نورة السيد - الكويت",
    avatar: "👩‍💼",
    child: "عمر وآدم، ١١ و١٣ سنة",
    specialty: "روبوتيكس",
    text: "عندي ولدين وكل واحد عنده معلمه، وأنا بتابعهم من لوحة تحكم واحدة. سهولة الدفع من الكويت كانت ممتازة.",
    rating: 5,
  },
  {
    id: "t4",
    name: "د. محمد الشافعي - جدة",
    avatar: "👨‍⚕️",
    child: "ريم، ١٤ سنة",
    specialty: "برمجة",
    text: "ريم الآن تشارك في مسابقات برمجة دولية. الاستثمار في إبصار كان أفضل قرار اتخذته لمستقبل ابنتي.",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`${count} نجوم`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="section"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A0F1C 100%)" }}
      aria-labelledby="testimonials-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-gold mb-4 inline-flex">❤️ آراء أولياء الأمور</span>
          <h2 id="testimonials-heading" className="text-heading text-white mb-4">
            ماذا يقول{" "}
            <span className="gradient-text-gold">أهالينا؟</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" role="list" aria-label="آراء العملاء">
          {testimonials.map((t, idx) => (
            <figure
              key={t.id}
              id={t.id}
              role="listitem"
              className="glass-card card-hover p-6 relative"
            >
              {/* Quote decoration */}
              <span
                className="absolute top-4 left-5 text-5xl font-black opacity-10 select-none"
                style={{ color: "var(--gold)", fontFamily: "serif" }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Rating */}
              <div className="mb-4">
                <Stars count={t.rating} />
              </div>

              {/* Testimonial text */}
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </blockquote>

              {/* Author */}
              <figcaption className="flex items-center gap-3 border-t border-white/10 pt-4">
                <div
                  className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center text-xl flex-shrink-0"
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">
                    {t.child} • {t.specialty}
                  </div>
                </div>
                <div className="mr-auto">
                  <span className="badge badge-gold text-xs">✅ مسجّل</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
