import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  Rocket,
  CalendarCheck,
  CreditCard,
  Video,
  ShieldCheck,
  Users,
  ArrowLeft,
} from "lucide-react";

export const metadata: Metadata = {
  title: "مركز المساعدة",
  description:
    "مركز مساعدة أكاديمية إبصار — أدلة إرشادية سريعة لبدء رحلتك التعليمية والاستفادة القصوى من المنصة.",
};

const topics = [
  {
    icon: Rocket,
    title: "البدء السريع",
    desc: "أنشئ حسابك، أضف طفلك، واحجز حصتك التجريبية المجانية في دقائق.",
  },
  {
    icon: CalendarCheck,
    title: "حجز وإدارة الحصص",
    desc: "تعرّف على كيفية حجز الحصص، إعادة جدولتها، وإلغائها من لوحة التحكم.",
  },
  {
    icon: CreditCard,
    title: "الاشتراكات والدفع",
    desc: "كل ما تحتاج معرفته عن الباقات، طرق الدفع، والفواتير.",
  },
  {
    icon: Video,
    title: "الغرفة الافتراضية",
    desc: "دليل استخدام السبورة التفاعلية، مشاركة الشاشة، وتسجيل الحصص.",
  },
  {
    icon: ShieldCheck,
    title: "الأمان والخصوصية",
    desc: "كيف نحمي بيانات طفلك ونضمن بيئة تعليمية آمنة.",
  },
  {
    icon: Users,
    title: "للمعلمين",
    desc: "إرشادات للمعلمين حول إدارة الجدول، الحصص، والحصول على المدفوعات.",
  },
];

export default function HelpPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        badge="مركز المساعدة"
        title="كيف يمكننا"
        highlight="مساعدتك؟"
        description="اختر الموضوع الذي تريد معرفة المزيد عنه، أو تواصل مع فريق الدعم مباشرة."
      />

      <section className="bg-[#0A0F1C] py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((t) => {
              const Icon = t.icon;
              return (
                <article key={t.title} className="glass-card card-hover p-6">
                  <div className="w-12 h-12 rounded-xl gradient-gold flex items-center justify-center mb-4">
                    <Icon size={24} className="text-gray-900" aria-hidden="true" />
                  </div>
                  <h2 className="text-white font-bold text-lg mb-2">{t.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed">{t.desc}</p>
                </article>
              );
            })}
          </div>

          {/* Quick links */}
          <div className="glass-card p-8 mt-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-lg font-bold mb-1">تحتاج مزيداً من المساعدة؟</h3>
              <p className="text-gray-400">
                راجع الأسئلة الشائعة أو تواصل مع فريق الدعم مباشرة.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/faq" className="btn btn-ghost">
                الأسئلة الشائعة
              </Link>
              <Link href="/contact" className="btn btn-gold gap-2">
                تواصل معنا
                <ArrowLeft size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
