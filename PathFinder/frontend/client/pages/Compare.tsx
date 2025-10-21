import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Scale } from "lucide-react";
import { COURSES, CourseDetail } from "@/data/courses";

function useFilter(query: string) {
  const q = query.toLowerCase();
  return useMemo(() => COURSES.filter(c => c.name.toLowerCase().includes(q)), [q]);
}

export default function Compare() {
  const [qa, setQa] = useState("");
  const [qb, setQb] = useState("");
  const [a, setA] = useState<CourseDetail | null>(null);
  const [b, setB] = useState<CourseDetail | null>(null);

  const la = useFilter(qa);
  const lb = useFilter(qb);

  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary"><Scale className="h-4 w-4"/> Course Comparison Tool</div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="text-sm font-semibold">Pick Course A</div>
          <Input placeholder="Search course (e.g. B.Tech)" value={qa} onChange={(e) => setQa(e.target.value)} />
          <div className="mt-2 max-h-40 overflow-y-auto text-sm">
            {la.map((c) => (
              <button key={c.id} onClick={() => setA(c)} className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left hover:bg-accent ${a?.id===c.id?"bg-accent/60":""}`}>
                <span>{c.name}</span>
                <Badge variant="secondary">{c.stream}</Badge>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-border bg-card p-4">
          <div className="text-sm font-semibold">Pick Course B</div>
          <Input placeholder="Search course (e.g. B.Com)" value={qb} onChange={(e) => setQb(e.target.value)} />
          <div className="mt-2 max-h-40 overflow-y-auto text-sm">
            {lb.map((c) => (
              <button key={c.id} onClick={() => setB(c)} className={`flex w-full items-center justify-between rounded-md px-2 py-1.5 text-left hover:bg-accent ${b?.id===c.id?"bg-accent/60":""}`}>
                <span>{c.name}</span>
                <Badge variant="secondary">{c.stream}</Badge>
              </button>
            ))}
          </div>
        </div>
      </div>

      {(a || b) && (
        <div className="mt-6 overflow-hidden rounded-xl border border-border">
          <div className="grid grid-cols-3 bg-primary/5 text-sm font-semibold">
            <div className="px-3 py-2">Criteria</div>
            <div className="px-3 py-2">{a ? a.name : "Select Course A"}</div>
            <div className="px-3 py-2">{b ? b.name : "Select Course B"}</div>
          </div>
          <div className="grid grid-cols-3 border-t border-border text-sm">
            <div className="px-3 py-2 font-medium">Preview</div>
            <div className="px-3 py-2">
              {a ? <img src={a.image} alt={a.name} className="h-20 w-full rounded-md object-cover"/> : "-"}
            </div>
            <div className="px-3 py-2">
              {b ? <img src={b.image} alt={b.name} className="h-20 w-full rounded-md object-cover"/> : "-"}
            </div>
          </div>
          {[
            { label: "Stream", va: a?.stream ?? "-", vb: b?.stream ?? "-" },
            { label: "Duration", va: a?.duration ?? "-", vb: b?.duration ?? "-" },
            { label: "Entry", va: a?.entry ?? "-", vb: b?.entry ?? "-" },
            { label: "Avg Fees", va: a?.avgFees ?? "-", vb: b?.avgFees ?? "-" },
            { label: "Avg Salary", va: a?.avgSalary ?? "-", vb: b?.avgSalary ?? "-" },
          ].map((row) => (
            <div key={row.label} className="grid grid-cols-3 border-t border-border text-sm">
              <div className="px-3 py-2 font-medium">{row.label}</div>
              <div className="px-3 py-2">{row.va}</div>
              <div className="px-3 py-2">{row.vb}</div>
            </div>
          ))}
          <div className="grid grid-cols-3 border-t border-border text-sm">
            <div className="px-3 py-2 font-medium">Top Roles</div>
            <div className="px-3 py-2">
              {a ? <ul className="list-disc pl-5">{a.roles.map(r => <li key={r}>{r}</li>)}</ul> : "-"}
            </div>
            <div className="px-3 py-2">
              {b ? <ul className="list-disc pl-5">{b.roles.map(r => <li key={r}>{r}</li>)}</ul> : "-"}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
