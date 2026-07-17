import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { FaqAccordion } from "@/components/sections/FaqAccordion";

export const metadata: Metadata = {
  title: "الأسئلة الشائعة",
  description:
    "إجابات على أكثر الأسئلة شيوعاً حول أكاديمية إبصار — الحصص، الأسعار، المعلمين، والدفع.",
};

export default function FaqPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        badge="الأسئلة الشائعة"
        title="أسئلة"
        highlight="متكررة"
        description="جمعنا لك إجابات واضحة على أكثر ما يسأل عنه أولياء الأمور والطلاب."
      />
      <FaqAccordion />
      <Footer />
    </main>
  );
}
