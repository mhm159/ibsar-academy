import Link from "next/link";

interface PageHeaderProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
}

/**
 * رأس صفحة داخلي موحّد بنفس هوية المنصة (خلفية داكنة + تدرّج ذهبي/أزرق).
 * يُستخدم في الصفحات الفرعية مثل القانونية والدعم.
 */
export function PageHeader({ badge, title, highlight, description }: PageHeaderProps) {
  return (
    <header
      className="relative pt-36 pb-16 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 0%, rgba(201, 168, 76, 0.15) 0%, transparent 55%), radial-gradient(ellipse at 80% 20%, rgba(27, 108, 168, 0.15) 0%, transparent 55%), linear-gradient(180deg, #0A0F1C 0%, #111827 100%)",
      }}
    >
      <div className="container relative z-10 text-center">
        <nav aria-label="مسار التنقل" className="mb-6">
          <ol className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <li>
              <Link href="/" className="hover:text-[#C9A84C] transition-colors">
                الرئيسية
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-gray-400">{title}</li>
          </ol>
        </nav>

        {badge && (
          <span className="badge badge-gold mb-4 inline-flex">{badge}</span>
        )}

        <h1 className="text-heading text-white mb-4 text-balance">
          {title}
          {highlight && <span className="gradient-text-gold"> {highlight}</span>}
        </h1>

        {description && (
          <p className="text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </header>
  );
}
