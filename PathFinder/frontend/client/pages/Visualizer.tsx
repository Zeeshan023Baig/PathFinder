import { ArrowDown, GraduationCap, Landmark, User2 } from "lucide-react";

interface Step {
  title: string;
  detail: string;
}

const FLOWS: Record<string, Step[]> = {
  Science: [
    { title: "Class 11–12 (PCM/PCB)", detail: "Build strong base in Maths/Science" },
    { title: "Entrance Prep", detail: "JEE/NEET or University Exams" },
    { title: "Degree", detail: "B.Tech, B.Sc, BCA" },
    { title: "Career", detail: "Engineer, Analyst, Research" },
  ],
  Commerce: [
    { title: "Class 11–12 (Commerce)", detail: "Accounts, Business, Economics" },
    { title: "Aptitude Prep", detail: "CUET/University + Maths/Stats" },
    { title: "Degree", detail: "B.Com, BBA, Economics (Hons)" },
    { title: "Career", detail: "Finance, Management, Policy" },
  ],
  Arts: [
    { title: "Class 11–12 (Arts)", detail: "Humanities/Social Science" },
    { title: "Portfolio/Prep", detail: "Aptitude + Writing/Design" },
    { title: "Degree", detail: "BA, BJMC, BFA/Design" },
    { title: "Career", detail: "Civil Services, Media, Design" },
  ],
};

function Column({ name, icon }: { name: string; icon: React.ReactNode }) {
  const steps = FLOWS[name];
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 text-sm font-semibold">
        {icon} {name}
      </div>
      <div className="mt-4 flex flex-col items-stretch">
        {steps.map((s, i) => (
          <div key={s.title} className="flex flex-col items-stretch">
            <div className="rounded-lg border border-input p-3">
              <div className="text-sm font-medium">{s.title}</div>
              <div className="text-xs text-muted-foreground">{s.detail}</div>
            </div>
            {i < steps.length - 1 && (
              <div className="flex justify-center py-2 text-muted-foreground"><ArrowDown className="h-4 w-4"/></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Visualizer() {
  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-4 text-sm font-medium text-primary flex items-center gap-2"><User2 className="h-4 w-4"/> Career Pathway Visualizer</div>
      <div className="mb-6 h-32 w-full rounded-md bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?w=1200&q=60&auto=format&fit=crop)` }} />
      <div className="grid gap-4 md:grid-cols-3">
        <Column name="Science" icon={<GraduationCap className="h-4 w-4"/>} />
        <Column name="Commerce" icon={<Landmark className="h-4 w-4"/>} />
        <Column name="Arts" icon={<User2 className="h-4 w-4"/>} />
      </div>
    </div>
  );
}
