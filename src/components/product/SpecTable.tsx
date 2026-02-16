import type { ProductSpec } from "@/content/products/sogut";

type SpecTableProps = {
  specs: ProductSpec[];
};

export function SpecTable({ specs }: SpecTableProps) {
  return (
    <div className="overflow-x-auto border border-slate-300">
      <table className="min-w-full divide-y divide-slate-300 text-sm">
        <thead className="bg-slate-50 text-left text-slate-800">
          <tr>
            <th className="px-4 py-3 font-semibold">Property</th>
            <th className="px-4 py-3 font-semibold">Value</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-200 bg-white">
          {specs.map((spec) => (
            <tr key={spec.property}>
              <td className="px-4 py-3 text-slate-800">{spec.property}</td>
              <td className="px-4 py-3 text-slate-700">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
