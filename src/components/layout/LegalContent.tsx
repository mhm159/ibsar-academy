export interface LegalSection {
  heading: string;
  paragraphs?: string[];
  list?: string[];
}

interface LegalContentProps {
  updatedAt: string;
  sections: LegalSection[];
}

/**
 * عارض محتوى قانوني موحّد (خصوصية، شروط، استرداد).
 */
export function LegalContent({ updatedAt, sections }: LegalContentProps) {
  return (
    <section className="bg-[#0A0F1C] py-16" style={{ minHeight: "40vh" }}>
      <div className="container max-w-3xl">
        <div className="glass-card p-8 md:p-12">
          <p className="text-sm text-[#C9A84C] mb-8">آخر تحديث: {updatedAt}</p>

          <div className="flex flex-col gap-10">
            {sections.map((section, i) => (
              <article key={section.heading}>
                <h2 className="text-white text-xl font-bold mb-3 flex items-center gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-lg gradient-gold flex items-center justify-center text-sm font-black text-gray-900"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  {section.heading}
                </h2>

                {section.paragraphs?.map((p, idx) => (
                  <p key={idx} className="text-gray-400 leading-relaxed mb-3 pr-11">
                    {p}
                  </p>
                ))}

                {section.list && (
                  <ul className="flex flex-col gap-2 pr-11" role="list">
                    {section.list.map((item) => (
                      <li
                        key={item}
                        className="text-gray-400 leading-relaxed flex items-start gap-2"
                      >
                        <span className="text-[#C9A84C] mt-1.5 flex-shrink-0" aria-hidden="true">
                          •
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
