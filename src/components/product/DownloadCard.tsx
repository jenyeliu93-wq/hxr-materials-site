import Link from "next/link";
import type { DownloadItem } from "@/content/downloads";

type DownloadCardProps = {
  item: DownloadItem;
};

export function DownloadCard({ item }: DownloadCardProps) {
  return (
    <article className="rounded-lg border border-slate-200 p-5">
      <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-2 text-sm text-slate-600">{item.description}</p>
      <Link
        href={item.filePath}
        className="mt-4 inline-flex text-sm font-semibold text-slate-900 underline underline-offset-2"
      >
        Download PDF
      </Link>
    </article>
  );
}
