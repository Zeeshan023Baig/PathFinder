import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "@/data/courses";
import { Badge } from "@/components/ui/badge";

const BANNERS: Record<string, string> = {
  Science: "https://images.unsplash.com/photo-1559757175-08b8eee6499a?w=1200&q=60&auto=format&fit=crop",
  Commerce: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&q=60&auto=format&fit=crop",
  Arts: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=1200&q=60&auto=format&fit=crop",
};

export default function StreamDetail() {
  const { name } = useParams();
  const stream = useMemo(() => {
    const n = (name || "").toLowerCase();
    if (n === "science") return "Science";
    if (n === "commerce") return "Commerce";
    if (n === "arts") return "Arts";
    return null;
  }, [name]);

  if (!stream) {
    return (
      <div className="container py-10">
        <h1 className="text-xl font-semibold">Stream not found</h1>
        <Link to="/explore" className="mt-2 inline-block text-sm underline">Back to Explorer</Link>
      </div>
    );
  }

  const list = COURSES.filter((c) => c.stream === stream);
  const banner = BANNERS[stream];

  return (
    <div className="min-h-[60vh]">
      <div className="h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }} />
      <div className="container max-w-6xl -mt-10">
        <div className="rounded-xl border border-border bg-card p-6">
          <h1 className="text-2xl font-bold">{stream}</h1>
          <p className="mt-2 text-sm text-muted-foreground">Explore programs, entry exams, fees, typical roles, and career pathways within {stream}.</p>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {list.map((c) => (
              <Link to={`/course/${c.id}`} key={c.id} className="overflow-hidden rounded-xl border border-input">
                <div className="h-28 w-full bg-cover bg-center" style={{ backgroundImage: `url(${c.image})` }} />
                <div className="p-3">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">{c.name}</div>
                    <Badge variant="secondary">{c.duration}</Badge>
                  </div>
                  <div className="mt-1 text-xs text-muted-foreground">Entry: {c.entry}</div>
                  <div className="mt-1 text-xs line-clamp-2">{c.description}</div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-6 text-sm text-muted-foreground">Tip: Use the Compare tool to evaluate two choices side-by-side.</div>
          <Link to="/compare" className="mt-3 inline-block rounded-md border border-input px-4 py-2 text-sm hover:bg-accent">Open Compare</Link>
        </div>
      </div>
    </div>
  );
}
