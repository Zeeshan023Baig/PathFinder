import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, School, Star } from "lucide-react";
import { COLLEGES } from "@/data/colleges";
import { Link } from "react-router-dom";

const STATES = ["All", "J&K"] as const;
const STREAMS = ["All", "Science", "Commerce", "Arts"] as const;

export default function Colleges() {
  const [q, setQ] = useState("");
  const [state, setState] = useState<typeof STATES[number]>("All");
  const [stream, setStream] = useState<typeof STREAMS[number]>("All");

  const list = useMemo(() => {
    return COLLEGES.filter((c) => {
      const byQ = q ? (c.name.toLowerCase().includes(q.toLowerCase()) || c.city.toLowerCase().includes(q.toLowerCase())) : true;
      const byState = state === "All" ? true : c.state === state;
      const byStream = stream === "All" ? true : c.streams.includes(stream as any);
      return byQ && byState && byStream;
    });
  }, [q, state, stream]);

  return (
    <div className="container max-w-6xl py-8">
      <div className="rounded-xl border border-border bg-card p-5">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-4">
          <div className="md:w-1/2">
            <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search college or city" />
          </div>
          <div className="flex gap-2 text-sm">
            <select value={state} onChange={(e) => setState(e.target.value as any)} className="rounded-md border border-input bg-background px-3 py-2">
              {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={stream} onChange={(e) => setStream(e.target.value as any)} className="rounded-md border border-input bg-background px-3 py-2">
              {STREAMS.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {list.map((c) => (
          <Link to={`/college/${c.id}`} key={c.id} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="h-28 w-full bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
            <div className="p-4">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 text-base font-semibold">
                    <School className="h-4 w-4"/> {c.name}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3"/> {c.city}, {c.state}
                  </div>
                </div>
                <div className="flex items-center gap-1 text-sm"><Star className="h-4 w-4 text-yellow-500"/> {c.rating.toFixed(1)}</div>
              </div>
              <div className="mt-3 flex flex-wrap gap-1">
                {c.streams.map((s) => <Badge key={s} variant="secondary">{s}</Badge>)}
              </div>
              <div className="mt-3 text-sm">
                <div className="font-medium">Degrees: <span className="font-normal">{c.degrees.join(", ")}</span></div>
                <div className="font-medium">Annual Fees: <span className="font-normal">{c.annualFees}</span></div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <div className="mt-10 text-center text-sm text-muted-foreground">No colleges match your filters.</div>
      )}
    </div>
  );
}
