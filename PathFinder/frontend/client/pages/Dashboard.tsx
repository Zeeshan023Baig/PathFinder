import { useEffect, useMemo, useState } from "react";
import { ArrowRight, BookmarkCheck, Compass, GraduationCap, LayoutGrid, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface SavedTest {
  stream: "Arts" | "Science" | "Commerce";
  answers: Record<string, string | undefined>;
  suggestions: { degrees: string[]; short: string[] };
  savedAt: string;
  version: number;
}

export default function Dashboard() {
  const [saved, setSaved] = useState<SavedTest | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("careerTestResultV1");
      if (raw) setSaved(JSON.parse(raw));
    } catch {}
  }, []);

  const recTitle = useMemo(() => saved ? `${saved.stream} (recommended)` : "Complete the Career Test", [saved]);

  return (
    <div className="container max-w-5xl py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2 space-y-6">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 h-28 w-full rounded-md bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=60&auto=format&fit=crop)` }} />
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2 text-sm font-medium text-primary"><Sparkles className="h-4 w-4"/> Personalized Overview</div>
                <h1 className="mt-1 text-2xl font-bold">{recTitle}</h1>
                <p className="mt-1 text-sm text-muted-foreground">Your dashboard adapts based on your interests and answers.</p>
              </div>
              <Compass className="h-8 w-8 text-primary" />
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <Link to="/test" className="group rounded-lg border border-input p-4 hover:bg-accent">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Career Assessment Test</div>
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Take or retake the test for refined suggestions.</div>
              </Link>
              <Link to="/explore" className="group rounded-lg border border-input p-4 hover:bg-accent">
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Explore Streams & Courses</div>
                  <LayoutGrid className="h-4 w-4" />
                </div>
                <div className="mt-1 text-sm text-muted-foreground">Browse structured information for each path.</div>
              </Link>
            </div>
          </div>

          {saved && (
            <div className="rounded-xl border border-border bg-card p-6">
              <div className="flex items-center gap-2 text-sm font-medium text-primary"><GraduationCap className="h-4 w-4"/> Suggested Programs</div>
              <div className="mt-3 grid gap-4 md:grid-cols-2">
                <div className="rounded-lg border border-input p-4">
                  <div className="font-semibold">Degree Programs</div>
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    {saved.suggestions.degrees.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-lg border border-input p-4">
                  <div className="font-semibold">Short-term Courses</div>
                  <ul className="mt-2 list-disc pl-5 text-sm">
                    {saved.suggestions.short.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-4 text-xs text-muted-foreground">Saved on {new Date(saved.savedAt).toLocaleString()}</div>
            </div>
          )}
        </div>

        <div className="space-y-6">
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-sm font-medium text-primary"><BookmarkCheck className="h-4 w-4"/> Quick Actions</div>
            <div className="mt-3 grid gap-3">
              <Link to="/colleges" className="w-full rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">Find Colleges</Link>
              <Link to="/compare" className="w-full rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">Compare Courses</Link>
              <Link to="/resources" className="w-full rounded-md border border-input px-4 py-2 text-sm font-medium hover:bg-accent">Scholarships & Exams</Link>
            </div>
          </div>
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="text-sm font-semibold">How to use this platform</div>
            <ol className="mt-2 list-decimal pl-5 text-sm text-muted-foreground space-y-1">
              <li>Take the Career Test to discover your stream.</li>
              <li>Explore courses and shortlist preferences.</li>
              <li>Use Compare to decide between two options.</li>
              <li>Find nearby colleges and check eligibility.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
