"use client";

const specializations = [
  {
    id: "programming",
    icon: "💻",
    emoji_bg: "from-blue-600 to-blue-400",
    title: "البرمجة",
    subtitle: "Coding & Development",
    description:
      "تعلّم Scratch للمبتدئين، Python للمتوسطين، وتطوير تطبيقات حقيقية للمتقدمين. نبني مبرمجي المستقبل.",
    features: ["Scratch & MIT App Inventor", "Python & JavaScript", "مشاريع حقيقية قابلة للنشر"],
    ages: "٧ - ١٧ سنة",
    color: "var(--azure)",
    bgGlow: "rgba(27, 108, 168, 0.15)",
  },
  {
    id: "robotics",
    icon: "🤖",
    emoji_bg: "from-emerald-600 to-teal-400",
    title: "الروبوتيكس",
    subtitle: "Robotics & AI",
    description:
      "بناء روبوتات ذكية من الصفر، برمجة Arduino، والتعرف على الذكاء الاصطناعي بطريقة عملية وممتعة.",
    features: ["Lego Mindstorms & Arduino", "الذكاء الاصطناعي التطبيقي", "مسابقات دولية"],
    ages: "٩ - ١٧ سنة",
    color: "var(--emerald)",
    bgGlow: "rgba(45, 106, 79, 0.15)",
  },
  {
    id: "mental-math",
    icon: "🧮",
    emoji_bg: "from-amber-500 to-yellow-300",
    title: "الحساب الذهني",
    subtitle: "Mental Math",
    description:
      "تقنية السوروبان (العداد الياباني) لبناء قدرات حسابية استثنائية وتطوير مهارات التركيز والذاكرة.",
    features: ["السوروبان الياباني", "الحساب الفائق السرعة", "تقوية الذاكرة والتركيز"],
    ages: "٥ - ١٤ سنة",
    color: "var(--gold)",
    bgGlow: "rgba(201, 168, 76, 0.15)",
  },
];

export function SpecializationsSection() {
  return (
    <section
      id="specializations"
      className="section"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A0F1C 100%)" }}
      aria-labelledby="spec-heading"
    >
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="badge badge-gold mb-4 inline-flex">🎓 تخصصاتنا</span>
          <h2 id="spec-heading" className="text-heading text-white mb-4">
            ثلاثة مسارات،{" "}
            <span className="gradient-text-gold">مستقبل واحد</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            اختر المسار الذي يناسب طفلك وسنوجّهه نحو التفوق بخطوات علمية مدروسة
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" role="list">
          {specializations.map((spec, idx) => (
            <article
              key={spec.id}
              id={`spec-${spec.id}`}
              role="listitem"
              className="glass-card card-hover relative overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {/* Glow Background */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${spec.bgGlow} 0%, transparent 70%)`,
                }}
              />

              {/* Icon */}
              <div className="relative mb-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${spec.emoji_bg} flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {spec.icon}
                </div>
                <div className="absolute top-0 right-20">
                  <span className="badge badge-gold text-xs">{spec.ages}</span>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                <h3 className="text-white text-2xl font-black mb-1">{spec.title}</h3>
                <p className="text-gray-500 text-xs mb-3 font-medium">{spec.subtitle}</p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{spec.description}</p>

                {/* Features */}
                <ul className="flex flex-col gap-2 mb-6" role="list" aria-label={`مميزات ${spec.title}`}>
                  {spec.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300" role="listitem">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                        style={{ background: spec.bgGlow, color: spec.color }}
                        aria-hidden="true"
                      >
                        ✓
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={`/teachers?specialty=${spec.id}`}
                  id={`spec-${spec.id}-cta`}
                  className="btn btn-ghost w-full justify-center group-hover:border-opacity-60 text-sm"
                  style={{ borderColor: spec.bgGlow }}
                >
                  استعرض المعلمين →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
