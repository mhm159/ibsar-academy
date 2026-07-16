# أكاديمية إبصار — Ibsar Academy 🎓

<div dir="rtl">

## نظرة عامة
منصة تعليمية متكاملة للأطفال في البرمجة، الروبوتيكس، والحساب الذهني.

## Stack التقني
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + Custom Egyptian Design Tokens
- **Database**: PostgreSQL (Supabase) + Prisma ORM
- **Auth**: NextAuth.js v5
- **Payment**: Kashier (مصر) + Stripe (دولي)
- **Video**: Daily.co API
- **Deployment**: Vercel

## البدء السريع

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000)

## متغيرات البيئة
انسخ `.env.example` إلى `.env.local` وأدخل القيم:

```bash
cp .env.example .env.local
```

## هيكل المشروع

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── layout/       # Navbar, Footer
│   └── sections/     # Landing page sections
└── lib/              # Utilities & helpers
```

## المراحل القادمة
- [ ] نظام المصادقة (Auth + OTP)
- [ ] لوحات التحكم (Admin / Teacher / Parent)
- [ ] نظام الدفع (Kashier + Stripe)
- [ ] الغرفة الافتراضية (Daily.co)

</div>
