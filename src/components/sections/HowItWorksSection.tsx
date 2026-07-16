"use client";

const steps = [
  {
    number: "١",
    icon: "🔍",
    title: "ابحث عن معلمك",
    description:
      "استعرض ملفات المعلمين، شاهد الفيديوهات التعريفية، وقارن التقييمات لتختار الأنسب لطفلك.",
    color: "var(--azure)",
    bg: "rgba(27, 108, 168, 0.1)",
  },
  {
    number: "٢",
    icon: "📅",
    title: "احجز حصة تجريبية",
    description:
      "احجز حصة تجريبية مجانية (٢٥ دقيقة) مع المعلم الذي اخترته، وجرّب المنصة بدون أي التزام مالي.",
    color: "var(--gold)",
    bg: "rgba(201, 168, 76, 0.1)",
  },
  {
    number: "٣",
    icon: "💳",
    title: "ادفع بأمان تام",
    description:
      "ادفع بالطريقة التي تناسبك — بطاقة بنكية، فوري، فودافون كاش، أو أورنج موني — بتشفير كامل.",
    color: "var(--emerald)",
    bg: "rgba(45, 106, 79, 0.1)",
  },
  {
    number: "٤",
    icon: "🎓",
    title: "تعلّم وانطلق!",
    description:
      "ادخل الغرفة الافتراضية، تفاعل مع المعلم عبر سبورة تفاعلية، وأنهِ الحصة بثقة وتقدّم حقيقي.",
    color: "var(--gold)",
    bg: "rgba(201, 168, 76, 0.1)",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section"
      style={{ background: "linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)" }}
      aria-labelledby="how-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-azure mb-4 inline-flex">⚡ كيف يعمل؟</span>
          <h2 id="how-heading" className="text-heading text-white mb-4">
            أربع خطوات فقط{" "}
            <span className="gradient-text-gold">للبداية</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            من التسجيل إلى أول حصة تعليمية في أقل من ١٠ دقائق
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-16 inset-x-0 h-0.5 mx-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 20%, rgba(201,168,76,0.5) 50%, rgba(201,168,76,0.3) 80%, transparent)",
            }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {steps.map((step, idx) => (
              <div
                key={step.number}
                role="listitem"
                className="relative flex flex-col items-center text-center group"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                {/* Step number circle */}
                <div
                  className="relative w-16 h-16 rounded-full flex items-center justify-center mb-5 z-10 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: step.bg, border: `2px solid ${step.color}` }}
                  aria-hidden="true"
                >
                  <span className="text-2xl font-black" style={{ color: step.color }}>
                    {step.number}
                  </span>
                  {/* Pulse ring */}
                  <div
                    className="absolute inset-0 rounded-full animate-ping opacity-20"
                    style={{ background: step.bg, animationDuration: `${2 + idx * 0.5}s` }}
                  />
                </div>

                {/* Icon */}
                <div className="text-4xl mb-4" aria-hidden="true">
                  {step.icon}
                </div>

                {/* Glass card */}
                <div className="glass-card p-6 w-full h-full">
                  <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/auth/register/student"
            id="how-cta"
            className="btn btn-gold text-base px-10 py-4"
          >
            🚀 ابدأ الآن مجاناً
          </a>
          <p className="text-gray-500 text-sm mt-3">لا يلزم بطاقة ائتمانية • الحصة التجريبية مجانية 100%</p>
        </div>
      </div>
    </section>
  );
}
