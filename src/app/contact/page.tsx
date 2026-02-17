import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { brand } from "@/content/brand";
import { contactContent } from "@/content/contact";

export const metadata: Metadata = {
  title: contactContent.title,
  description: contactContent.intro,
};

export default function ContactPage() {
  return (
    <Section className="pt-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{contactContent.title}</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{contactContent.intro}</p>

      <p className="mt-6 text-slate-900">
        {contactContent.emailLabel}: <a className="underline" href={`mailto:${brand.email}`}>{brand.email}</a>
      </p>

      <form className="mt-8 max-w-2xl space-y-4" action={`mailto:${brand.email}`} method="post" encType="text/plain">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-800">
            {contactContent.form.nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus-visible:border-slate-500"
          />
        </div>

        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-slate-800">
            {contactContent.form.companyLabel}
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus-visible:border-slate-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-800">
            {contactContent.form.emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus-visible:border-slate-500"
          />
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-800">
            {contactContent.form.messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full rounded-md border border-slate-300 px-3 py-2 text-slate-900 outline-none focus-visible:border-slate-500"
          />
        </div>

        <input type="hidden" name="subject" value={contactContent.mailtoSubject} />

        <button
          type="submit"
          className="inline-flex items-center rounded-md bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700"
        >
          {contactContent.form.submitLabel}
        </button>
      </form>

      <div className="mt-10 max-w-3xl space-y-2 leading-relaxed text-slate-700">
        {contactContent.distributorNotes.map((note) => (
          <p key={note}>{note}</p>
        ))}
      </div>
    </Section>
  );
}
