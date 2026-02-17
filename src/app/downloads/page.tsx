import type { Metadata } from "next";
import { DownloadCard } from "@/components/product/DownloadCard";
import { Section } from "@/components/site/Section";
import { downloads, downloadsIntro } from "@/content/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Technical and safety documentation for HXR Materials resin systems.",
};

export default function DownloadsPage() {
  return (
    <Section className="pt-16">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">Downloads</h1>
      <p className="mt-4 max-w-3xl leading-relaxed text-slate-700">{downloadsIntro}</p>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {downloads.map((item) => (
          <DownloadCard key={item.filePath} item={item} />
        ))}
      </div>
    </Section>
  );
}
