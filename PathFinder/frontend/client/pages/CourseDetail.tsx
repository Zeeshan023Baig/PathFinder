import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { COURSES } from "@/data/courses";
import { ArrowLeft, Landmark, Timer, Wallet, Briefcase } from "lucide-react";

export default function CourseDetail() {
  const { id } = useParams();
  const course = useMemo(() => COURSES.find((c) => c.id === id), [id]);
  if (!course) return (
    <div className="container py-10">
      <Link to="/explore" className="text-sm underline">Back to Explore</Link>
      <div className="mt-4">Course not found.</div>
    </div>
  );
  return (
    <div className="min-h-[60vh]">
      <div className="h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${course.image})` }} />
      <div className="container max-w-5xl -mt-10">
        <div className="rounded-xl border border-border bg-card p-6">
          <Link to="/explore" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="h-4 w-4"/> Back</Link>
          <h1 className="mt-2 text-2xl font-bold">{course.name}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{course.description}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3 text-sm">
            <div className="rounded-md border border-input p-3 flex items-center gap-2"><Timer className="h-4 w-4"/> {course.duration}</div>
            <div className="rounded-md border border-input p-3 flex items-center gap-2"><Landmark className="h-4 w-4"/> Entry: {course.entry}</div>
            <div className="rounded-md border border-input p-3 flex items-center gap-2"><Wallet className="h-4 w-4"/> Fees: {course.avgFees}</div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-md border border-input p-4">
              <div className="font-semibold">Key Topics</div>
              <ul className="mt-2 list-disc pl-5 text-sm">
                {course.syllabus.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>
            <div className="rounded-md border border-input p-4">
              <div className="flex items-center gap-2 font-semibold"><Briefcase className="h-4 w-4"/> Career Outcomes</div>
              <ul className="mt-2 list-disc pl-5 text-sm">
                {course.roles.map((s) => (<li key={s}>{s}</li>))}
              </ul>
            </div>
          </div>
          <div className="mt-6 text-sm text-muted-foreground">Average starting salary: {course.avgSalary}. Consider internships and projects to boost outcomes.</div>
        </div>
      </div>
    </div>
  );
}
