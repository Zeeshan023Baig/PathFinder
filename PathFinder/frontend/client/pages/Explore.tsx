import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Briefcase, Cpu, Palette, Stethoscope } from "lucide-react";
import { COURSES } from "@/data/courses";
import { Link } from "react-router-dom";

const GROUPED = COURSES.reduce<Record<string, typeof COURSES>>( (acc, c) => { (acc[c.stream] ||= []).push(c); return acc; }, {} as any );

function StreamIcon({ s }: { s: string }) {
  if (s === "Science") return <Cpu className="h-4 w-4"/>;
  if (s === "Commerce") return <Briefcase className="h-4 w-4"/>;
  return <Palette className="h-4 w-4"/>;
}

export default function Explore() {
  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-6 flex items-center gap-2 text-sm font-medium text-primary">
        <BookOpen className="h-4 w-4"/> Stream & Course Explorer
      </div>

      <Tabs defaultValue="Science">
        <TabsList>
          <TabsTrigger value="Science">Science</TabsTrigger>
          <TabsTrigger value="Commerce">Commerce</TabsTrigger>
          <TabsTrigger value="Arts">Arts</TabsTrigger>
        </TabsList>

        {Object.keys(GROUPED).map((stream) => (
          <TabsContent key={stream} value={stream}>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {GROUPED[stream].map((c) => (
                <Link to={`/course/${c.id}`} key={c.id} className="group overflow-hidden rounded-xl border border-border bg-card">
                  <div className="h-28 w-full bg-cover bg-center transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: `url(${c.image})` }} />
                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="text-base font-semibold">{c.name}</div>
                      <Badge variant="secondary">{c.stream}</Badge>
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">Duration: {c.duration}</div>
                    <div className="mt-1 text-xs text-muted-foreground">Entry: {c.entry}</div>
                    <div className="mt-3 text-xs font-medium">Typical roles</div>
                    <ul className="mt-1 list-disc pl-5 text-sm">
                      {c.roles.slice(0,3).map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <StreamIcon s={stream} />
              <span>Open a course to view full details and compare options.</span>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <div className="mt-8 rounded-xl border border-dashed border-border p-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2"><Stethoscope className="h-4 w-4"/> Tip</div>
        <div className="mt-1">Use the Compare tool to see differences in duration, cost, and career outcomes.</div>
      </div>
    </div>
  );
}
