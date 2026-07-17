import Link from "next/link";

const footerLinks = {
  platform: {
    title: "المنصة",
    links: [
      { label: "كيف يعمل؟", href: "/#how-it-works" },
      { label: "التخصصات", href: "/#specializations" },
      { label: "المعلمون", href: "/#teachers" },
      { label: "الأسعار", href: "/#pricing" },
    ],
  },
  legal: {
    title: "قانوني",
    links: [
      { label: "سياسة الخصوصية", href: "/privacy" },
      { label: "شروط الاستخدام", href: "/terms" },
      { label: "سياسة الاسترداد", href: "/refund" },
    ],
  },
  support: {
    title: "الدعم",
    links: [
      { label: "مركز المساعدة", href: "/help" },
      { label: "تواصل معنا", href: "/contact" },
      { label: "الأسئلة الشائعة", href: "/faq" },
    ],
  },
};

const socialLinks = [
  { label: "يوتيوب", href: "#", icon: "🎬" },
  { label: "فيسبوك", href: "#", icon: "📘" },
  { label: "إنستجرام", href: "#", icon: "📸" },
  { label: "تيك توك", href: "#", icon: "🎵" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#0A0F1C] border-t border-white/5" role="contentinfo">
      {/* Gradient top line */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent" aria-hidden="true" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-5" aria-label="أكاديمية إبصار">
              <div className="w-10 h-10 rounded-xl gradient-gold flex items-center justify-center flex-shrink-0">
                <span className="text-lg font-black text-gray-900" aria-hidden="true">إ</span>
              </div>
              <div>
                <div className="font-black text-xl gradient-text-gold">أكاديمية إبصار</div>
                <div className="text-xs text-gray-500">Ibsar Academy</div>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              نفتح أعين أطفالنا على مستقبل مشرق من خلال تعليم البرمجة، الروبوتيكس، والحساب الذهني بأفضل المعلمين المتخصصين.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3" role="list" aria-label="روابط التواصل الاجتماعي">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  role="listitem"
                  className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lg hover:scale-110 transition-transform"
                  aria-label={s.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span aria-hidden="true">{s.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.values(footerLinks).map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wide">{col.title}</h3>
              <ul className="flex flex-col gap-2.5" role="list">
                {col.links.map((link) => (
                  <li key={link.href} role="listitem">
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-[#C9A84C] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} أكاديمية إبصار. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-6">
            <span className="badge badge-gold text-xs">🇪🇬 صُنع في مصر بـ ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
