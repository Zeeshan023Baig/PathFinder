import { ReactNode } from "react";

export default function Placeholder({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return (
    <div className="container max-w-4xl py-10">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <h1 className="text-2xl font-bold">{title}</h1>
        {description && <p className="mt-1 text-sm text-muted-foreground">{description}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </div>
  );
}
