import type { Metadata } from "next";
import Image from "next/image";
import { BulletList } from "@/components/product/BulletList";
import { DownloadCard } from "@/components/product/DownloadCard";
import { SpecTable } from "@/components/product/SpecTable";
import { CTAButton } from "@/components/site/CTAButton";
import { Section } from "@/components/site/Section";
import { downloads } from "@/content/downloads";
import { sogutProduct } from "@/content/products/sogut";

export const metadata: Metadata = {
  title: sogutProduct.seoTitle,
  description: sogutProduct.seoDescription,
};

export default function SogutProductPage() {
  return (
    <>
      <Section className="pt-16">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">{sogutProduct.name}</h1>
      </Section>

      <Section className="pt-12" withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.overview}</h2>
        <div className="mt-4 space-y-4 leading-relaxed text-slate-700">
          {sogutProduct.overview.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section surface="slate" withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.performance}</h2>
        <div className="mt-4">
          <SpecTable specs={[...sogutProduct.specs]} />
          <p className="mt-3 text-sm text-slate-600">{sogutProduct.sections.performanceFootnote}</p>
        </div>
      </Section>

      <Section withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.applications}</h2>
        <div className="mt-4 max-w-3xl">
          <BulletList items={[...sogutProduct.applications]} />
        </div>
      </Section>

      <Section surface="slate" withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.advantages}</h2>
        <div className="mt-4 max-w-3xl">
          <BulletList items={[...sogutProduct.advantages]} />
        </div>
      </Section>

      <Section withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.installation}</h2>
        <div className="mt-4 max-w-4xl">
          <BulletList items={[...sogutProduct.installation]} />
        </div>
      </Section>

      <Section withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
          {sogutProduct.sections.socketConditionImages}
        </h2>
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          <figure className="flex flex-col items-center">
            <h3 className="text-lg font-medium tracking-tight text-slate-900">{sogutProduct.wireRopePreparation.title}</h3>
            <Image
              src={sogutProduct.wireRopePreparation.imagePath}
              alt={sogutProduct.wireRopePreparation.alt}
              width={520}
              height={520}
              className="mt-3 h-[320px] w-auto max-w-[520px] rounded-md border border-slate-200 bg-slate-50 object-contain"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
              {sogutProduct.wireRopePreparation.caption}
            </figcaption>
          </figure>

          <figure className="flex flex-col items-center">
            <h3 className="text-lg font-medium tracking-tight text-slate-900">
              {sogutProduct.sections.finalCuredSocketCondition}
            </h3>
            <Image
              src={sogutProduct.finalCuredSocketCondition.imagePath}
              alt={sogutProduct.finalCuredSocketCondition.alt}
              width={520}
              height={520}
              className="mt-3 h-[320px] w-auto max-w-[520px] rounded-md border border-slate-200 bg-slate-50 object-contain"
            />
            <figcaption className="mt-3 text-sm leading-relaxed text-slate-600">
              {sogutProduct.finalCuredSocketCondition.caption}
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section surface="slate" withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.storage}</h2>
        <div className="mt-4 max-w-4xl">
          <BulletList items={[...sogutProduct.storage]} />
        </div>
      </Section>

      <Section withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.packaging}</h2>
        <p className="mt-4 max-w-4xl leading-relaxed text-slate-700">{sogutProduct.packaging}</p>
      </Section>

      <Section surface="slate" withDivider>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="text-xl font-semibold text-slate-900">{sogutProduct.sections.cta}</h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <CTAButton href={sogutProduct.cta.href} label={sogutProduct.cta.label} />
            <CTAButton
              href={sogutProduct.secondaryCta.href}
              label={sogutProduct.secondaryCta.label}
              variant="secondary"
            />
          </div>
        </div>
      </Section>

      <Section withDivider>
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900">{sogutProduct.sections.downloads}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {downloads.map((item) => (
            <DownloadCard key={item.filePath} item={item} />
          ))}
        </div>
      </Section>
    </>
  );
}
