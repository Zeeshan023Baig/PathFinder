import { FileText, GraduationCap, Landmark } from "lucide-react";

const SCHOLARSHIPS = [
  { name: "National Means-cum-Merit Scholarship", link: "https://scholarships.gov.in" },
  { name: "PMSSS (J&K Scholarship)", link: "https://www.aicte-india.org/bureaus/jk" },
  { name: "INSPIRE Scholarship", link: "https://online-inspire.gov.in" },
  { name: "NSP Central Sector Scheme (CSSS)", link: "https://scholarships.gov.in" },
  { name: "AICTE Pragati/Saksham", link: "https://www.aicte-india.org/schemes/students-development-schemes" },
];

const EXAMS = [
  { name: "JEE Main", link: "https://jeemain.nta.nic.in" },
  { name: "JEE Advanced", link: "https://jeeadv.ac.in" },
  { name: "NEET UG", link: "https://neet.nta.nic.in" },
  { name: "CUET UG", link: "https://cuet.samarth.ac.in" },
  { name: "NID/UCEED", link: "https://www.nid.edu" },
];

const GUIDES = [
  { name: "How to choose a stream after Class 10", link: "https://www.mygov.in" },
  { name: "Understanding CUET for UG admissions", link: "https://www.nta.ac.in" },
  { name: "Roadmap to become a Software Engineer", link: "https://roadmap.sh" },
  { name: "MBA/Management careers after Commerce", link: "https://www.mba.com" },
  { name: "Design careers: UX and Product Design", link: "https://www.interaction-design.org" },
];

export default function Resources() {
  return (
    <div className="container max-w-5xl py-8">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary"><Landmark className="h-4 w-4"/> Govt. Scholarships</div>
          <ul className="mt-3 space-y-2 text-sm">
            {SCHOLARSHIPS.map((s) => (
              <li key={s.name}>
                <a className="rounded-md border border-input px-3 py-2 hover:bg-accent inline-flex w-full justify-between" href={s.link} target="_blank" rel="noreferrer">
                  <span>{s.name}</span>
                  <GraduationCap className="h-4 w-4"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary"><FileText className="h-4 w-4"/> Entrance Exams</div>
          <ul className="mt-3 space-y-2 text-sm">
            {EXAMS.map((s) => (
              <li key={s.name}>
                <a className="rounded-md border border-input px-3 py-2 hover:bg-accent inline-flex w-full justify-between" href={s.link} target="_blank" rel="noreferrer">
                  <span>{s.name}</span>
                  <FileText className="h-4 w-4"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-sm font-medium text-primary"><FileText className="h-4 w-4"/> Guides</div>
          <ul className="mt-3 space-y-2 text-sm">
            {GUIDES.map((s) => (
              <li key={s.name}>
                <a className="rounded-md border border-input px-3 py-2 hover:bg-accent inline-flex w-full justify-between" href={s.link} target="_blank" rel="noreferrer">
                  <span>{s.name}</span>
                  <FileText className="h-4 w-4"/>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
