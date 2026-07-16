"use client";

const teachers = [
  {
    id: "teacher-1",
    name: "أ. أحمد محمد",
    title: "مدرس برمجة Python & Scratch",
    specialty: "programming",
    specialtyLabel: "برمجة",
    rating: 4.9,
    reviews: 127,
    sessions: 890,
    price: 150,
    currency: "جنيه/حصة",
    avatar: "👨‍💻",
    avatarBg: "from-blue-600 to-blue-400",
    badges: ["Python", "Scratch", "Web Dev"],
    verified: true,
    experience: "٥ سنوات خبرة",
    available: true,
  },
  {
    id: "teacher-2",
    name: "أ. سارة علي",
    title: "متخصصة روبوتيكس وذكاء اصطناعي",
    specialty: "robotics",
    specialtyLabel: "روبوتيكس",
    rating: 5.0,
    reviews: 89,
    sessions: 650,
    price: 200,
    currency: "جنيه/حصة",
    avatar: "👩‍🔬",
    avatarBg: "from-emerald-600 to-teal-400",
    badges: ["Arduino", "Lego", "AI"],
    verified: true,
    experience: "٧ سنوات خبرة",
    available: true,
  },
  {
    id: "teacher-3",
    name: "أ. محمد حسن",
    title: "معلم حساب ذهني بالسوروبان",
    specialty: "mental-math",
    specialtyLabel: "حساب ذهني",
    rating: 4.8,
    reviews: 214,
    sessions: 1250,
    price: 120,
    currency: "جنيه/حصة",
    avatar: "🧮",
    avatarBg: "from-amber-500 to-yellow-400",
    badges: ["السوروبان", "Mental Math", "منافسات دولية"],
    verified: true,
    experience: "١٠ سنوات خبرة",
    available: false,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1" aria-label={`التقييم: ${rating} من ٥`} role="img">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${star <= Math.round(rating) ? "text-yellow-400" : "text-gray-600"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-yellow-400 text-sm font-bold mr-1">{rating}</span>
    </div>
  );
}

export function TeachersSection() {
  return (
    <section
      id="teachers"
      className="section"
      style={{ background: "linear-gradient(180deg, #0F172A 0%, #0A0F1C 100%)" }}
      aria-labelledby="teachers-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="badge badge-gold mb-4 inline-flex">👨‍🏫 نخبة المعلمين</span>
          <h2 id="teachers-heading" className="text-heading text-white mb-4">
            تعلّم مع الأفضل{" "}
            <span className="gradient-text-gold">في مجالهم</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            كل معلم يمر بعملية اختيار صارمة تشمل المؤهلات، الاختبارات، وفيديو تعريفي
          </p>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" role="list" aria-label="قائمة المعلمين">
          {teachers.map((teacher, idx) => (
            <article
              key={teacher.id}
              id={teacher.id}
              role="listitem"
              className="glass-card card-hover p-6 relative overflow-hidden group"
            >
              {/* Available badge */}
              <div className="absolute top-4 left-4">
                {teacher.available ? (
                  <span className="badge badge-emerald text-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    متاح الآن
                  </span>
                ) : (
                  <span className="badge text-xs bg-gray-800 text-gray-400 border-gray-700">
                    مشغول
                  </span>
                )}
              </div>

              {/* Verified badge */}
              {teacher.verified && (
                <div className="absolute top-4 right-4">
                  <span className="text-lg" title="معلم موثّق" aria-label="معلم موثّق">✅</span>
                </div>
              )}

              {/* Avatar */}
              <div className="flex flex-col items-center text-center pt-4 mb-5">
                <div
                  className={`w-20 h-20 rounded-full bg-gradient-to-br ${teacher.avatarBg} flex items-center justify-center text-4xl mb-3 shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  aria-hidden="true"
                >
                  {teacher.avatar}
                </div>
                <h3 className="text-white font-black text-lg">{teacher.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{teacher.title}</p>
                <span className="badge badge-azure text-xs">{teacher.specialtyLabel}</span>
              </div>

              {/* Rating */}
              <div className="flex justify-center mb-4">
                <StarRating rating={teacher.rating} />
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-5 neu-inset p-3 rounded-xl">
                {[
                  { label: "حصة", value: teacher.sessions.toLocaleString("ar-EG") },
                  { label: "تقييم", value: teacher.reviews.toLocaleString("ar-EG") },
                  { label: "خبرة", value: teacher.experience.split(" ")[0] + " سنة" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-white font-bold text-sm">{stat.value}</div>
                    <div className="text-gray-500 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills badges */}
              <div className="flex flex-wrap gap-1.5 justify-center mb-5" role="list" aria-label="المهارات">
                {teacher.badges.map((badge) => (
                  <span key={badge} role="listitem" className="badge badge-gold text-xs">
                    {badge}
                  </span>
                ))}
              </div>

              {/* Price & CTA */}
              <div className="border-t border-white/10 pt-4 flex items-center justify-between gap-3">
                <div>
                  <div className="text-white font-black text-xl">
                    {teacher.price}{" "}
                    <span className="text-gray-400 text-xs font-normal">{teacher.currency}</span>
                  </div>
                  <div className="text-gray-500 text-xs">تجريبي مجاناً</div>
                </div>
                <a
                  href={`/teachers/${teacher.id}`}
                  id={`${teacher.id}-cta`}
                  className="btn btn-gold text-sm py-2.5 px-5"
                  aria-label={`احجز حصة مع ${teacher.name}`}
                >
                  احجز الآن
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View all */}
        <div className="text-center">
          <a href="/teachers" id="view-all-teachers" className="btn btn-outline-gold">
            عرض جميع المعلمين (١٥٠+)
          </a>
        </div>
      </div>
    </section>
  );
}
