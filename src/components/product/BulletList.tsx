type BulletListProps = {
  items: string[];
};

export function BulletList({ items }: BulletListProps) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-slate-700">
          <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-700" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
