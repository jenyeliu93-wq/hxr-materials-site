import type { Metadata } from "next";
import { Section } from "@/components/site/Section";
import { brand } from "@/content/brand";
import { manufacturerContent } from "@/content/manufacturer";

export const metadata: Metadata = {
  title: manufacturerContent.title,
  description: manufacturerContent.description,
};

export default function ManufacturerPage() {
  return (
    <Section className="pt-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{manufacturerContent.title}</h1>
      <p className="mt-6 max-w-3xl leading-relaxed text-slate-700">{manufacturerContent.description}</p>
      <p className="mt-4 leading-relaxed text-slate-700">{manufacturerContent.legalDisclosure}</p>
      <p className="mt-4 leading-relaxed text-slate-700">{brand.manufacturer}</p>
    </Section>
  );
}
