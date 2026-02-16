import Link from "next/link";
import { Container } from "@/components/site/Container";
import { brand } from "@/content/brand";

export function Header() {
  return (
    <header className="border-b border-slate-200">
      <Container className="py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight text-slate-900">
            {brand.name}
          </Link>
          <nav aria-label="Primary Navigation">
            <ul className="flex flex-wrap gap-5 text-sm text-slate-600">
              {brand.navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-slate-900">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
