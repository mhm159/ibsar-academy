"use client";

const plans = [
  {
    id: "trial",
    name: "تجريبي",
    nameEn: "Trial",
    price: "مجاناً",
    priceNum: 0,
    period: "",
    description: "جرّب المنصة بدون أي التزام",
    color: "var(--azure)",
    bg: "rgba(27, 108, 168, 0.1)",
    border: "rgba(27, 108, 168, 0.3)",
    features: [
      { text: "حصة تجريبية واحدة (٢٥ دقيقة)", included: true },
      { text: "اختيار أي معلم متاح", included: true },
      { text: "الغرفة الافتراضية المتكاملة", included: true },
      { text: "السبورة التفاعلية", included: true },
      { text: "تسجيل الحصة", included: false },
      { text: "خصومات المجموعات", included: false },
    ],
    cta: "ابدأ مجاناً",
    ctaId: "plan-trial-cta",
    popular: false,
  },
  {
    id: "individual",
    name: "فردي",
    nameEn: "Individual",
    price: "٢٠٠",
    priceNum: 200,
    period: "جنيه / شهر",
    description: "للطالب الجاد الذي يريد التقدم السريع",
    color: "var(--gold)",
    bg: "rgba(201, 168, 76, 0.1)",
    border: "rgba(201, 168, 76, 0.4)",
    features: [
      { text: "٤ حصص فردية شهرياً (٥٠ دقيقة)", included: true },
      { text: "اختيار معلمك المفضل", included: true },
      { text: "الغرفة الافتراضية المتكاملة", included: true },
      { text: "السبورة التفاعلية", included: true },
      { text: "تسجيل الحصص تلقائياً", included: true },
      { text: "تقرير التقدم الشهري", included: true },
    ],
    cta: "اشترك الآن",
    ctaId: "plan-individual-cta",
    popular: true,
  },
  {
    id: "group",
    name: "مجموعة",
    nameEn: "Group",
    price: "١٢٠",
    priceNum: 120,
    period: "جنيه / شهر",
    description: "تعلّم مع أقران وادفع أقل",
    color: "var(--emerald)",
    bg: "rgba(45, 106, 79, 0.1)",
    border: "rgba(45, 106, 79, 0.3)",
    features: [
      { text: "٤ حصص جماعية (٤-٦ طلاب)", included: true },
      { text: "خصم ٤٠٪ عن السعر الفردي", included: true },
      { text: "الغرفة الافتراضية المتكاملة", included: true },
      { text: "السبورة التفاعلية", included: true },
      { text: "تسجيل الحصص تلقائياً", included: true },
      { text: "مجموعة واتساب للمتابعة", included: false },
    ],
    cta: "انضم لمجموعة",
    ctaId: "plan-group-cta",
    popular: false,
  },
];

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="section"
      style={{ background: "linear-gradient(180deg, #0A0F1C 0%, #0F172A 100%)" }}
      aria-labelledby="pricing-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-gold mb-4 inline-flex">💰 الأسعار</span>
          <h2 id="pricing-heading" className="text-heading text-white mb-4">
            أسعار{" "}
            <span className="gradient-text-gold">شفافة وعادلة</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            لا رسوم خفية — ادفع بالطريقة التي تناسبك بالجنيه المصري
          </p>
        </div>

        {/* Payment methods */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          {[
            { icon: "💳", label: "بطاقات بنكية" },
            { icon: "🟠", label: "فوري" },
            { icon: "🔴", label: "فودافون كاش" },
            { icon: "🟡", label: "أورنج موني" },
            { icon: "🌐", label: "Stripe (دولي)" },
          ].map((m) => (
            <div key={m.label} className="flex items-center gap-2 glass px-4 py-2 rounded-full">
              <span aria-hidden="true">{m.icon}</span>
              <span className="text-gray-300 text-sm font-medium">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" role="list">
          {plans.map((plan) => (
            <div
              key={plan.id}
              id={`plan-${plan.id}`}
              role="listitem"
              className={`glass-card p-6 relative flex flex-col transition-all duration-300 ${
                plan.popular ? "ring-2 scale-105 z-10" : ""
              }`}
              style={{
                borderColor: plan.border,
                ...(plan.popular ? { ringColor: plan.color } : {}),
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div
                  className="absolute -top-4 inset-x-0 flex justify-center"
                  aria-label="الأكثر طلباً"
                >
                  <span className="btn-gold px-4 py-1.5 rounded-full text-xs font-bold text-gray-900">
                    ⭐ الأكثر طلباً
                  </span>
                </div>
              )}

              {/* Plan header */}
              <div className="mb-6">
                <h3 className="text-white text-xl font-black mb-1">{plan.name}</h3>
                <p className="text-gray-500 text-xs mb-4">{plan.description}</p>
                <div className="flex items-end gap-2">
                  <span
                    className="text-4xl font-black"
                    style={{ color: plan.color }}
                  >
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-gray-400 text-sm mb-1">{plan.period}</span>
                  )}
                </div>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1" role="list" aria-label={`مميزات ${plan.name}`}>
                {plan.features.map((f) => (
                  <li
                    key={f.text}
                    role="listitem"
                    className={`flex items-center gap-2.5 text-sm ${
                      f.included ? "text-gray-300" : "text-gray-600 line-through"
                    }`}
                  >
                    <span
                      className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                      style={
                        f.included
                          ? { background: plan.bg, color: plan.color }
                          : { background: "rgba(100,100,100,0.1)", color: "#4B5563" }
                      }
                      aria-hidden="true"
                    >
                      {f.included ? "✓" : "✕"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.id === "trial" ? "/auth/register/student" : `/checkout/${plan.id}`}
                id={plan.ctaId}
                className={`btn w-full justify-center ${
                  plan.popular ? "btn-gold" : "btn-ghost"
                }`}
                style={!plan.popular ? { borderColor: plan.border, color: "white" } : {}}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          💡 الأسعار قابلة للتفاوض — المعلم يحدد سعره بنفسه وتحصل المنصة على ٢٠٪ فقط.
        </p>
      </div>
    </section>
  );
}
