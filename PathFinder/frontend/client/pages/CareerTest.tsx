import { useMemo, useState } from "react";
import { CheckCircle2, Compass } from "lucide-react";

type Stream = "Arts" | "Science" | "Commerce";

interface Question {
  id: string;
  text: string;
  options: { label: string; stream: Stream }[];
}

const questions: Question[] = [
  {
    id: "q1",
    text: "Which activities excite you the most?",
    options: [
      { label: "Solving scientific problems", stream: "Science" },
      { label: "Managing money/business", stream: "Commerce" },
      { label: "Understanding people & society", stream: "Arts" },
    ],
  },
  {
    id: "q2",
    text: "What is your strength?",
    options: [
      { label: "Maths & Logical Reasoning", stream: "Science" },
      { label: "Communication & Writing", stream: "Arts" },
      { label: "Entrepreneurship & Markets", stream: "Commerce" },
    ],
  },
  {
    id: "q3",
    text: "Preferred learning style?",
    options: [
      { label: "Experiments & Labs", stream: "Science" },
      { label: "Case Studies & Finance", stream: "Commerce" },
      { label: "Debates & Research Papers", stream: "Arts" },
    ],
  },
  {
    id: "q4",
    text: "Career you imagine yourself in?",
    options: [
      { label: "Engineer/Scientist/Developer", stream: "Science" },
      { label: "Manager/CA/Banker", stream: "Commerce" },
      { label: "Civil Services/Teacher/Designer", stream: "Arts" },
    ],
  },
  {
    id: "q5",
    text: "Which subjects do you want to study more?",
    options: [
      { label: "Physics/Chemistry/Maths/Biology", stream: "Science" },
      { label: "Accounts/Economics/Business", stream: "Commerce" },
      { label: "History/Polity/Literature/Design", stream: "Arts" },
    ],
  },
  {
    id: "q6",
    text: "Your ideal learning environment?",
    options: [
      { label: "Labs, coding, projects", stream: "Science" },
      { label: "Case studies, markets, teamwork", stream: "Commerce" },
      { label: "Studios, debates, field work", stream: "Arts" },
    ],
  },
  {
    id: "q7",
    text: "What motivates you most?",
    options: [
      { label: "Solving real-world technical problems", stream: "Science" },
      { label: "Building businesses/impacting economy", stream: "Commerce" },
      { label: "Understanding society/expressing creativity", stream: "Arts" },
    ],
  },
];

const suggestions: Record<Stream, { degrees: string[]; short: string[] }> = {
  Science: {
    degrees: ["B.Sc (PCM/PCB)", "B.Tech/BE", "BCA"],
    short: ["Data Analytics Certificate", "Web Development", "Lab Technician"],
  },
  Commerce: {
    degrees: ["B.Com", "BBA", "Economics (Hons)"],
    short: ["Tally & GST", "Excel for Finance", "Digital Marketing"],
  },
  Arts: {
    degrees: ["B.A (Psychology/Economics)", "BJMC", "BFA/Design"],
    short: ["Content Writing", "Graphic Design", "Public Policy Basics"],
  },
};

export default function CareerTest() {
  const [answers, setAnswers] = useState<Record<string, Stream | undefined>>({});
  const [submitted, setSubmitted] = useState(false);

  const { result, score, confidence } = useMemo(() => {
    const score: Record<Stream, number> = { Arts: 0, Science: 0, Commerce: 0 };
    Object.values(answers).forEach((s) => {
      if (s) score[s] += 1;
    });
    const entries = Object.entries(score) as [Stream, number][];
    const top = entries.reduce((a, b) => (a[1] >= b[1] ? a : b))[0];
    const total = entries.reduce((a, [, n]) => a + n, 0) || 1;
    const confidence = Math.round((score[top] / total) * 100);
    return { result: top, score, confidence };
  }, [answers]);

  const allAnswered = questions.every((q) => answers[q.id]);

  const handleSubmit = () => {
    setSubmitted(true);
    try {
      const payload = {
        stream: result,
        answers,
        suggestions: suggestions[result],
        savedAt: new Date().toISOString(),
        version: 1,
      };
      localStorage.setItem("careerTestResultV1", JSON.stringify(payload));
    } catch {}
  };

  return (
    <div className="container max-w-4xl py-10">
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <div className="mb-4 h-32 w-full rounded-md bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1588072432836-e10032774350?w=1200&q=60&auto=format&fit=crop)" }} />
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Career Assessment Test</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Answer a few questions to get a personalized stream recommendation after Class 10/12.
            </p>
          </div>
          <Compass className="h-7 w-7 text-primary" />
        </div>

        <div className="mt-6 space-y-6">
          {questions.map((q, idx) => (
            <div key={q.id} className="rounded-lg border border-border p-4">
              <div className="font-medium">Q{idx + 1}. {q.text}</div>
              <div className="mt-3 grid gap-3 md:grid-cols-3">
                {q.options.map((opt) => (
                  <label key={opt.label} className={`flex cursor-pointer items-center gap-2 rounded-md border px-3 py-2 text-sm transition ${
                    answers[q.id] === opt.stream
                      ? "border-blue-400 bg-blue-50 text-blue-900"
                      : "border-input hover:bg-accent"
                  }`}>
                    <input
                      type="radio"
                      name={q.id}
                      value={opt.stream}
                      className="sr-only"
                      onChange={() => setAnswers((a) => ({ ...a, [q.id]: opt.stream }))}
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            {Object.values(answers).filter(Boolean).length}/{questions.length} answered
          </div>
          <button
            disabled={!allAnswered}
            onClick={handleSubmit}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground disabled:cursor-not-allowed disabled:opacity-60"
          >
            Get Recommendation
          </button>
        </div>

        {submitted && (
          <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-5">
            <div className="flex items-center gap-2 text-blue-900">
              <CheckCircle2 className="h-5 w-5" />
              <h2 className="font-semibold">Recommended Stream: <span className="underline underline-offset-4">{result}</span> • Confidence: {confidence}%</h2>
            </div>
            <div className="mt-2 text-xs text-blue-900/80">Breakdown — Science: {score.Science}, Commerce: {score.Commerce}, Arts: {score.Arts}</div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              <div className="rounded-md border border-border bg-card p-4">
                <div className="font-medium">Suggested Degree Programs</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {suggestions[result].degrees.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-md border border-border bg-card p-4">
                <div className="font-medium">Suggested Short-term Courses</div>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                  {suggestions[result].short.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <a className="rounded-md border border-input px-3 py-2 hover:bg-accent" href={`/stream/${result}`}>View {result} details</a>
              <a className="rounded-md border border-input px-3 py-2 hover:bg-accent" href="/explore">Explore courses</a>
              <a className="rounded-md border border-input px-3 py-2 hover:bg-accent" href="/colleges">Find colleges</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
