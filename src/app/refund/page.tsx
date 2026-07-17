import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalContent, type LegalSection } from "@/components/layout/LegalContent";

export const metadata: Metadata = {
  title: "سياسة الاسترداد",
  description:
    "سياسة استرداد الأموال في أكاديمية إبصار — متى وكيف يمكنك استرداد قيمة اشتراكك.",
};

const sections: LegalSection[] = [
  {
    heading: "مبدأ الاسترداد",
    paragraphs: [
      "نسعى لرضاك التام. إذا لم تكن راضياً عن الخدمة، توضح هذه السياسة الحالات التي يمكنك فيها طلب استرداد قيمة اشتراكك بالكامل أو جزئياً.",
    ],
  },
  {
    heading: "الحصة التجريبية",
    paragraphs: [
      "الحصة التجريبية مجانية بالكامل ولا تتطلب أي دفع، لذا لا ينطبق عليها الاسترداد.",
    ],
  },
  {
    heading: "استرداد كامل",
    list: [
      "طلب الاسترداد خلال ٧ أيام من الاشتراك ودون حضور أي حصة مدفوعة.",
      "إلغاء الحصة من قبل المعلم دون تقديم بديل مناسب.",
      "مشكلات تقنية جوهرية من طرف المنصة منعت انعقاد الحصة.",
    ],
  },
  {
    heading: "استرداد جزئي",
    list: [
      "احتساب الحصص المنعقدة فعلياً وخصم قيمتها من المبلغ المسترد.",
      "إلغاء الاشتراك الشهري بعد حضور بعض الحصص يُسترد ما تبقّى منها.",
    ],
  },
  {
    heading: "حالات لا يشملها الاسترداد",
    list: [
      "الحصص التي حضرها الطالب بالكامل.",
      "الغياب دون إشعار مسبق أو إعادة جدولة.",
      "مخالفة شروط الاستخدام أو سلوك المستخدم.",
    ],
  },
  {
    heading: "مدة معالجة الاسترداد",
    paragraphs: [
      "تتم معالجة طلبات الاسترداد خلال ٥ إلى ١٠ أيام عمل، وتُعاد المبالغ بنفس وسيلة الدفع الأصلية. قد تختلف المدة حسب البنك أو بوابة الدفع.",
    ],
  },
  {
    heading: "كيفية طلب الاسترداد",
    paragraphs: [
      "لطلب الاسترداد، تواصل معنا عبر صفحة «تواصل معنا» أو راسلنا على refund@ibsar.academy مع ذكر رقم الاشتراك وسبب الطلب.",
    ],
  },
];

export default function RefundPage() {
  return (
    <main>
      <Navbar />
      <PageHeader
        badge="الاسترداد"
        title="سياسة"
        highlight="الاسترداد"
        description="نلتزم بالشفافية الكاملة حول متى وكيف يمكنك استرداد قيمة اشتراكك."
      />
      <LegalContent updatedAt="يناير ٢٠٢٦" sections={sections} />
      <Footer />
    </main>
  );
}
