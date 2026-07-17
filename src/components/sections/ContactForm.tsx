"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "الرجاء إدخال الاسم كاملاً"),
  email: z.string().email("بريد إلكتروني غير صالح"),
  subject: z.string().min(3, "الرجاء إدخال موضوع الرسالة"),
  message: z.string().min(10, "الرسالة قصيرة جداً (١٠ أحرف على الأقل)"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormValues) {
    // TODO: wire to a real /api/contact endpoint or email service
    console.log("[v0] contact form submitted:", data);
    await new Promise((r) => setTimeout(r, 800));
    reset();
  }

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-8" role="status">
        <div className="w-16 h-16 rounded-full gradient-gold flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 size={32} className="text-gray-900" aria-hidden="true" />
        </div>
        <h3 className="text-white text-xl font-bold mb-2">تم إرسال رسالتك!</h3>
        <p className="text-gray-400">شكراً لتواصلك معنا، سنرد عليك في أقرب وقت ممكن.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-gray-300 text-sm font-semibold mb-2">
          الاسم الكامل
        </label>
        <input
          id="name"
          type="text"
          className="input"
          placeholder="اكتب اسمك"
          aria-invalid={!!errors.name}
          {...register("name")}
        />
        {errors.name && (
          <p className="text-[#FF6B6B] text-sm mt-1.5">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-gray-300 text-sm font-semibold mb-2">
          البريد الإلكتروني
        </label>
        <input
          id="email"
          type="email"
          dir="ltr"
          className="input text-right"
          placeholder="you@example.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
        {errors.email && (
          <p className="text-[#FF6B6B] text-sm mt-1.5">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="subject" className="block text-gray-300 text-sm font-semibold mb-2">
          الموضوع
        </label>
        <input
          id="subject"
          type="text"
          className="input"
          placeholder="موضوع رسالتك"
          aria-invalid={!!errors.subject}
          {...register("subject")}
        />
        {errors.subject && (
          <p className="text-[#FF6B6B] text-sm mt-1.5">{errors.subject.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-gray-300 text-sm font-semibold mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          rows={5}
          className="input resize-none"
          placeholder="كيف يمكننا مساعدتك؟"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-[#FF6B6B] text-sm mt-1.5">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn btn-gold w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "جارٍ الإرسال..." : "إرسال الرسالة"}
      </button>
    </form>
  );
}
