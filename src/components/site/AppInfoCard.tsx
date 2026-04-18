interface Row {
  label: string;
  value: string;
}

export default function AppInfoCard({
  rows,
  title = "App Information",
}: {
  rows: Row[];
  title?: string;
}) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="px-6 py-4 border-b border-border bg-gradient-to-r from-primary/10 via-accent/10 to-transparent">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
      </div>
      <dl className="divide-y divide-border">
        {rows.map((r) => (
          <div
            key={r.label}
            className="flex items-center justify-between px-6 py-3.5 text-sm hover:bg-white/[0.02] transition-colors"
          >
            <dt className="text-muted-foreground font-medium">{r.label}</dt>
            <dd className="font-semibold text-foreground">{r.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
