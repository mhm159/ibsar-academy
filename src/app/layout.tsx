import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "أكاديمية إبصار | Ibsar Academy — تعليم البرمجة والروبوتيكس للأطفال",
    template: "%s | أكاديمية إبصار",
  },
  description:
    "أكاديمية إبصار — منصة تعليمية رائدة للأطفال في البرمجة، الروبوتيكس، والحساب الذهني. حصص فردية وجماعية مع أفضل المعلمين المتخصصين.",
  keywords: [
    "تعليم البرمجة للأطفال",
    "أكاديمية إبصار",
    "روبوتيكس أطفال",
    "حساب ذهني",
    "تعليم أونلاين مصر",
    "برمجة أطفال",
    "ibsar academy",
    "coding for kids egypt",
  ],
  authors: [{ name: "أكاديمية إبصار" }],
  creator: "Ibsar Academy",
  metadataBase: new URL("https://ibsar.academy"),
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: "https://ibsar.academy",
    title: "أكاديمية إبصار | تعليم البرمجة والروبوتيكس للأطفال",
    description:
      "منصة تعليمية متكاملة للأطفال في البرمجة، الروبوتيكس، والحساب الذهني مع أفضل المعلمين.",
    siteName: "أكاديمية إبصار",
  },
  twitter: {
    card: "summary_large_image",
    title: "أكاديمية إبصار",
    description: "تعليم البرمجة والروبوتيكس للأطفال",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#C9A84C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
