import { Container } from "@/components/site/Container";
import { brand } from "@/content/brand";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-900 py-8 text-slate-400">
      <Container>
        <div className="flex flex-col gap-4 text-xs md:flex-row md:items-start md:justify-between">
          <div className="space-y-1">
            <p className="text-slate-400">{brand.name}</p>
            <p className="text-slate-500">{brand.tagline}</p>
          </div>

          <div className="space-y-1">
            <p className="text-slate-500">HXR Materials is operated by {brand.legalEntity}.</p>
            <p className="text-slate-500">{brand.manufacturer}</p>
          </div>

          <div className="space-y-1 md:text-right">
            <p className="text-slate-500">
              © {year} {brand.name}. {brand.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
