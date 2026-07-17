import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "تواصل معنا",
  description:
    "تواصل مع فريق أكاديمية إبصار — نحن هنا للإجابة على استفساراتك ومساعدتك في رحلة طفلك التعليمية.",
};

const contactChannels = [
  {
    label: "البريد الإلكتروني",
    value: "support@ibsar.academy",
    href: "mailto:support@ibsar.academy",
  },
  {
    label: "الهاتف / واتساب",
    value: "+20 100 000 0000",
    href: "tel:+201000000000",
  },
  {
    label: "ساعات العمل",
    value: "السبت - الخميس، ١٠ص - ٨م",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        badge="تواصل معنا"
        title="نحن هنا"
        highlight="لمساعدتك"
        description="لديك سؤال أو تحتاج مساعدة؟ راسلنا وسيتواصل معك فريقنا في أقرب وقت."
      />

      <section className="bg-[#0A0F1C] py-16">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            {/* Contact info */}
            <div className="lg:col-span-2 flex flex-col gap-4">
              {contactChannels.map((c) => (
                <div key={c.label} className="glass-card p-6">
                  <p className="text-gray-500 text-sm mb-1">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      className="text-white font-bold hover:text-[#C9A84C] transition-colors"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="text-white font-bold">{c.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
