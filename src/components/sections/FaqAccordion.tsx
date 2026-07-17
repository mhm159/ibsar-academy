"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqCategories = [
  {
    category: "عن المنصة",
    items: [
      {
        q: "ما هي أكاديمية إبصار؟",
        a: "أكاديمية إبصار منصة تعليمية أونلاين متخصصة في تعليم الأطفال البرمجة، الروبوتيكس، والحساب الذهني، من خلال حصص مباشرة مع معلمين متخصصين داخل غرفة افتراضية تفاعلية.",
      },
      {
        q: "ما الأعمار المناسبة للتسجيل؟",
        a: "منصتنا مصممة للأطفال والناشئة من عمر ٦ إلى ١٨ عاماً، مع مسارات تعليمية تناسب كل مرحلة عمرية ومستوى.",
      },
      {
        q: "هل أحتاج إلى معدات خاصة؟",
        a: "كل ما تحتاجه هو جهاز حاسوب أو تابلت متصل بالإنترنت وكاميرا وميكروفون. جميع الأدوات التعليمية متوفرة داخل المنصة.",
      },
    ],
  },
  {
    category: "الحصص والمعلمون",
    items: [
      {
        q: "كيف تُحجز الحصص؟",
        a: "بعد إنشاء الحساب واختيار الباقة، يمكنك تصفّح المعلمين المتاحين واختيار المواعيد التي تناسبك مباشرة من لوحة التحكم.",
      },
      {
        q: "هل يمكنني اختيار معلم محدد؟",
        a: "نعم، يمكنك تصفّح ملفات المعلمين ومشاهدة تخصصاتهم وتقييماتهم واختيار المعلم الأنسب لطفلك.",
      },
      {
        q: "ماذا لو لم يعجبني المعلم؟",
        a: "يمكنك تغيير المعلم في أي وقت دون أي رسوم إضافية، فراحة طفلك وتقدمه أولويتنا.",
      },
    ],
  },
  {
    category: "الأسعار والدفع",
    items: [
      {
        q: "ما طرق الدفع المتاحة؟",
        a: "نوفر الدفع بالبطاقات البنكية، فوري، فودافون كاش، أورنج موني، بالإضافة إلى الدفع الدولي عبر Stripe.",
      },
      {
        q: "هل هناك حصة تجريبية مجانية؟",
        a: "نعم، نوفر حصة تجريبية مجانية بالكامل (٢٥ دقيقة) مع أي معلم متاح لتجربة المنصة قبل الاشتراك.",
      },
      {
        q: "هل يمكنني استرداد أموالي؟",
        a: "نعم، وفق سياسة الاسترداد الخاصة بنا. يمكنك طلب استرداد كامل خلال ٧ أيام من الاشتراك ودون حضور حصص مدفوعة.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-card overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-4 p-5 text-right"
      >
        <span className="text-white font-bold text-base">{q}</span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-[#C9A84C] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-gray-400 leading-relaxed">{a}</p>
        </div>
      </div>
    </div>
  );
}

export function FaqAccordion() {
  return (
    <section className="bg-[#0A0F1C] py-16">
      <div className="container max-w-3xl">
        <div className="flex flex-col gap-12">
          {faqCategories.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-white text-xl font-black mb-5 flex items-center gap-3">
                <span className="w-1.5 h-6 rounded-full gradient-gold" aria-hidden="true" />
                {cat.category}
              </h2>
              <div className="flex flex-col gap-3">
                {cat.items.map((item) => (
                  <FaqItem key={item.q} q={item.q} a={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-card p-8 mt-12 text-center">
          <h3 className="text-white text-lg font-bold mb-2">لم تجد إجابتك؟</h3>
          <p className="text-gray-400 mb-6">فريق الدعم لدينا سعيد بمساعدتك في أي وقت.</p>
          <Link href="/contact" className="btn btn-gold">
            تواصل معنا
          </Link>
        </div>
      </div>
    </section>
  );
}
