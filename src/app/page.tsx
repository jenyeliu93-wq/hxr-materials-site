import type { Metadata } from "next";
import { CTAButton } from "@/components/site/CTAButton";
import { Section } from "@/components/site/Section";
import { BulletList } from "@/components/product/BulletList";
import { brand } from "@/content/brand";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Cold-Pour Socketing Resin for Structural Wire Rope Terminations",
  description: brand.technicalPositioning,
};

export default function HomePage() {
  return (
    <>
      <Section className="bg-slate-950 py-24 md:py-28">
        <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">{brand.name}</h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">{brand.tagline}</p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200">{brand.technicalPositioning}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <CTAButton
            href={homeContent.hero.primaryCta.href}
            label={homeContent.hero.primaryCta.label}
            variant="primaryOnDark"
          />
          <CTAButton
            href={homeContent.hero.secondaryCta.href}
            label={homeContent.hero.secondaryCta.label}
            variant="secondaryOnDark"
          />
        </div>
      </Section>

      <Section className="py-16" withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Engineering Focus</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{homeContent.engineeringIntro}</p>
        <div className="mt-5 max-w-3xl">
          <BulletList items={[...homeContent.engineeringBullets]} />
        </div>
      </Section>

      <Section className="py-16" surface="slate" withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {homeContent.technicalDocumentation.title}
        </h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">
          {homeContent.technicalDocumentation.description}
        </p>
        <p className="mt-2 max-w-3xl leading-relaxed text-slate-700">
          {homeContent.technicalDocumentation.secondaryDescription}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <CTAButton
            href={homeContent.technicalDocumentation.primaryCta.href}
            label={homeContent.technicalDocumentation.primaryCta.label}
          />
          <CTAButton
            href={homeContent.technicalDocumentation.secondaryCta.href}
            label={homeContent.technicalDocumentation.secondaryCta.label}
            variant="secondary"
          />
        </div>
      </Section>
    </>
  );
}
