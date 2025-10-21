import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, BookOpen, Building2, Compass, GitBranch, GraduationCap, School } from "lucide-react";
import { motion } from "framer-motion";
import RowCarousel, { type RowItem } from "@/components/rows/RowCarousel";
import HeroSlider from "@/components/hero/HeroSlider";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCountUp } from "@/hooks/useCountUp";

const streamData = [
  {
    name: "Science",
    color: "from-blue-500 to-indigo-600",
    courses: [
      { name: "B.Sc (Physics/Chemistry/Maths)", duration: "3 years", eligibility: "12th Science", careers: "Research, Analytics, Teaching" },
      { name: "B.Tech/BE", duration: "4 years", eligibility: "JEE/State Exams", careers: "Engineering, Product, R&D" },
      { name: "BCA", duration: "3 years", eligibility: "12th", careers: "Software, Web, Data" },
    ],
  },
  {
    name: "Commerce",
    color: "from-cyan-500 to-blue-600",
    courses: [
      { name: "B.Com", duration: "3 years", eligibility: "12th", careers: "Accounting, Banking, Finance" },
      { name: "BBA", duration: "3 years", eligibility: "12th", careers: "Management, Marketing, HR" },
      { name: "CA/CS/CMA", duration: "3+ years", eligibility: "After 12th", careers: "Audit, Compliance, Advisory" },
    ],
  },
  {
    name: "Arts",
    color: "from-sky-500 to-blue-600",
    courses: [
      { name: "B.A (Economics/Psychology/History)", duration: "3 years", eligibility: "12th", careers: "Civil Services, Research, Media" },
      { name: "BJMC/BA (Journalism)", duration: "3 years", eligibility: "12th", careers: "Media, PR, Content" },
      { name: "BFA/Design", duration: "3-4 years", eligibility: "12th + Aptitude", careers: "Design, UI/UX, Creative" },
    ],
  },
];

const featuredStreams: RowItem[] = [
  { title: "Science", image: "https://images.unsplash.com/photo-1559757175-08b8eee6499a?q=80&w=1200&auto=format&fit=crop", href: "/stream/Science" },
  { title: "Commerce", image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1200&auto=format&fit=crop", href: "/stream/Commerce" },
  { title: "Arts", image: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1200&auto=format&fit=crop", href: "/stream/Arts" },
  { title: "Computer Science", image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop", href: "/course/bca" },
  { title: "Healthcare", image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop", href: "/college/aiimsd" },
];

const topColleges: RowItem[] = [
  { title: "IIT Delhi", image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop", subtitle: "Engineering", href: "/college/iitd" },
  { title: "SRCC", image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop", subtitle: "Commerce", href: "/college/srcc" },
  { title: "FTII", image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop", subtitle: "Media", href: "/college/ftii" },
  { title: "NID", image: "https://images.unsplash.com/photo-1526948128573-703ee1aeb6fa?q=80&w=1200&auto=format&fit=crop", subtitle: "Design", href: "/college/nid" },
  { title: "AIIMS Delhi", image: "https://images.unsplash.com/photo-1584982752767-611b1cd3b2d1?q=80&w=1200&auto=format&fit=crop", subtitle: "Medical", href: "/college/aiimsd" },
];

const trendingCourses: RowItem[] = [
  { title: "Data Science", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop", subtitle: "B.Sc/B.Tech/BCA", href: "/course/datasci" },
  { title: "Finance & Markets", image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?q=80&w=1200&auto=format&fit=crop", subtitle: "B.Com/BBA", href: "/course/finmarkets" },
  { title: "Psychology", image: "https://images.unsplash.com/photo-1551847667-9d4fccb9ff2e?q=80&w=1200&auto=format&fit=crop", subtitle: "B.A", href: "/course/psychology" },
  { title: "Mechanical Engg.", image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?q=80&w=1200&auto=format&fit=crop", subtitle: "B.Tech", href: "/course/mechanical" },
  { title: "UX Design", image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1200&auto=format&fit=crop", subtitle: "B.Des/BFA", href: "/course/uxdesign" },
];

const stories: RowItem[] = [
  { title: "Aliya – B.Sc to Researcher", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop", subtitle: "Used scholarships, now in M.Sc" },
  { title: "Aarav – Diploma to Industry", image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=1200&auto=format&fit=crop", subtitle: "Chose skill route, got job in 1 yr" },
  { title: "Mehak – BA to Civil Services", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop", subtitle: "Focused on UPSC prep path" },
  { title: "Rehan – B.Com to MBA", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop", subtitle: "Internships + CAT → MBA" },
];

export default function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.15),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.1),transparent_60%)]" />
        <div className="container grid gap-10 py-16 md:grid-cols-2 md:gap-14 md:py-24">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 220, damping: 24 }} className="flex flex-col justify-center">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
              <BadgeCheck className="h-3.5 w-3.5" /> One-Stop Advisor
            </span>
            <h1 className="mt-4 bg-gradient-to-b from-foreground to-foreground/70 bg-clip-text text-4xl font-extrabold leading-tight text-transparent md:text-5xl">
              Plan Your Career with Confidence
            </h1>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Personalized guidance for students of Class 10/12. Explore streams, compare courses, find colleges, and visualize career paths—all in one place.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button asChild>
                <Link to="/test"><Compass className="h-4 w-4" /> Start Career Test</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/explore"><BookOpen className="h-4 w-4" /> Explore Courses</Link>
              </Button>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4 text-sm text-muted-foreground md:grid-cols-3">
              <div className="flex items-center gap-2"><GraduationCap className="h-4 w-4 text-blue-600" /> Expert-backed logic</div>
              <div className="flex items-center gap-2"><School className="h-4 w-4 text-blue-600" /> 100+ programs</div>
              <div className="flex items-center gap-2"><Building2 className="h-4 w-4 text-blue-600" /> College finder</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 200, damping: 20 }} className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-blue-500/10 blur-2xl" />
            <div className="absolute -bottom-8 -left-8 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl" />
            <div className="relative rounded-2xl border border-border bg-card/80 p-6 shadow-lg backdrop-blur">
              <h3 className="text-lg font-semibold">Career Pathway Visualizer</h3>
              <p className="mt-1 text-sm text-muted-foreground">See typical journeys at a glance.</p>
              <div className="mt-4 space-y-4">
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 text-sm font-medium"><GitBranch className="h-4 w-4 text-blue-600" /> Science Path</div>
                  <div className="mt-2 text-sm">B.Sc → M.Sc → PhD → Researcher/Professor</div>
                </div>
                <div className="rounded-lg border border-border p-3">
                  <div className="flex items-center gap-2 text-sm font-medium"><GitBranch className="h-4 w-4 text-blue-600" /> Commerce Path</div>
                  <div className="mt-2 text-sm">B.Com → MBA → Corporate Roles</div>
                </div>
              </div>
              <Link to="/visualizer" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline">
                Open Visualizer <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container py-6">
        <HeroSlider />
      </section>

      {/* Four pillars */}
      <section className="container grid gap-6 py-10 md:grid-cols-4">
        {[
          {
            title: "Take Career Test",
            text: "Discover your best-fit stream with a quick assessment.",
            to: "/test",
            icon: <Compass className="h-5 w-5" />,
          },
          {
            title: "Explore Courses",
            text: "Browse degrees and short-term programs.",
            to: "/explore",
            icon: <BookOpen className="h-5 w-5" />,
          },
          {
            title: "Find Colleges",
            text: "Search nearby government colleges with filters.",
            to: "/colleges",
            icon: <Building2 className="h-5 w-5" />,
          },
          {
            title: "Career Paths",
            text: "Visualize step-by-step learning and roles.",
            to: "/visualizer",
            icon: <GitBranch className="h-5 w-5" />,
          },
        ].map((c, i) => (
          <motion.div key={c.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <Link
              to={c.to}
              className="group relative overflow-hidden rounded-xl border border-border bg-card p-5 transition-colors hover:bg-accent"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{c.text}</p>
                </div>
                <div className="rounded-full bg-primary/10 p-2 text-primary">{c.icon}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* Netflix-like rows */}
      <section className="container space-y-10 py-4">
        <RowCarousel heading="Featured Streams" items={featuredStreams} />
        <RowCarousel heading="Top Colleges" items={topColleges} />
        <RowCarousel heading="Trending Courses" items={trendingCourses} />
      </section>

      {/* Image highlights requested */}
      <section className="container py-8">
        <h2 className="text-xl font-semibold">Highlights</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          <Link to="/colleges" className="group relative block overflow-hidden rounded-xl border border-border">
            <div className="h-36 w-full bg-cover bg-center transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop)" }} />
            <div className="p-3">
              <div className="text-sm font-semibold">Explore colleges near you</div>
              <div className="text-xs text-muted-foreground">Find options with maps and fees</div>
            </div>
          </Link>
          <Link to="/explore" className="group relative block overflow-hidden rounded-xl border border-border">
            <div className="h-36 w-full bg-cover bg-center transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1559757175-08b8eee6499a?w=1200&q=60&auto=format&fit=crop)" }} />
            <div className="p-3">
              <div className="text-sm font-semibold">Feature Stream: Science</div>
              <div className="text-xs text-muted-foreground">Engineering, B.Sc, BCA & more</div>
            </div>
          </Link>
          <Link to="/college/iitd" className="group relative block overflow-hidden rounded-xl border border-border">
            <div className="h-36 w-full bg-cover bg-center transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=60&auto=format&fit=crop)" }} />
            <div className="p-3">
              <div className="text-sm font-semibold">IIT Delhi</div>
              <div className="text-xs text-muted-foreground">Engineering</div>
            </div>
          </Link>
          <Link to="/college/aiimsd" className="group relative block overflow-hidden rounded-xl border border-border">
            <div className="h-36 w-full bg-cover bg-center transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1584982752767-611b1cd3b2d1?w=1200&q=60&auto=format&fit=crop)" }} />
            <div className="p-3">
              <div className="text-sm font-semibold">AIIMS Delhi</div>
              <div className="text-xs text-muted-foreground">Medical</div>
            </div>
          </Link>
          <Link to="/course/psychology" className="group relative block overflow-hidden rounded-xl border border-border">
            <div className="h-36 w-full bg-cover bg-center transition-transform group-hover:scale-[1.02]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=1200&q=60&auto=format&fit=crop)" }} />
            <div className="p-3">
              <div className="text-sm font-semibold">Psychology</div>
              <div className="text-xs text-muted-foreground">B.A Psychology details</div>
            </div>
          </Link>
        </div>
      </section>

      {/* Interactive Stream tabs */}
      <section className="container py-8">
        <h2 className="text-xl font-semibold">Find your stream</h2>
        <Tabs defaultValue="science" className="mt-4">
          <TabsList>
            <TabsTrigger value="science">Science</TabsTrigger>
            <TabsTrigger value="commerce">Commerce</TabsTrigger>
            <TabsTrigger value="arts">Arts</TabsTrigger>
          </TabsList>
          <TabsContent value="science" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {streamData[0].courses.map((c) => (
                <div key={c.name} className="rounded-lg border p-4">
                  <div className="font-medium">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.duration} • {c.eligibility}</div>
                  <div className="mt-2 text-sm">{c.careers}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="commerce" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {streamData[1].courses.map((c) => (
                <div key={c.name} className="rounded-lg border p-4">
                  <div className="font-medium">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.duration} • {c.eligibility}</div>
                  <div className="mt-2 text-sm">{c.careers}</div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="arts" className="mt-4">
            <div className="grid gap-4 md:grid-cols-3">
              {streamData[2].courses.map((c) => (
                <div key={c.name} className="rounded-lg border p-4">
                  <div className="font-medium">{c.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.duration} • {c.eligibility}</div>
                  <div className="mt-2 text-sm">{c.careers}</div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Stream & Course Explorer preview */}
      <section className="container py-6">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-xl font-semibold">Stream & Course Explorer</h2>
          <Link to="/explore" className="text-sm font-semibold text-blue-700 hover:underline">View all</Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {streamData.map((s) => (
            <div key={s.name} className="rounded-xl border border-border bg-card">
              <div className={`rounded-t-xl bg-gradient-to-r ${s.color} px-5 py-4 text-white`}>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">{s.name}</h3>
                  <span className="text-xs opacity-90">Popular</span>
                </div>
              </div>
              <div className="space-y-4 p-5">
                {s.courses.map((c) => (
                  <div key={c.name} className="rounded-lg border border-border p-4">
                    <p className="font-medium">{c.name}</p>
                    <p className="mt-1 text-xs text-muted-foreground">Duration: {c.duration} • Eligibility: {c.eligibility}</p>
                    <p className="mt-2 text-sm">Careers: {c.careers}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Course Comparison preview */}
      <section className="container py-12">
        <div className="rounded-xl border border-border bg-card p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold">Compare Courses</h2>
              <p className="mt-1 text-sm text-muted-foreground">Compare duration, cost, career scope, and salary of two programs.</p>
            </div>
            <Link to="/compare" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-95">
              Open Tool <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[600px] text-sm">
              <thead>
                <tr className="text-left text-muted-foreground">
                  <th className="px-3 py-2 font-medium">Parameter</th>
                  <th className="px-3 py-2 font-medium">B.Sc</th>
                  <th className="px-3 py-2 font-medium">Diploma</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-3 py-2">Duration</td>
                  <td className="px-3 py-2">3 years</td>
                  <td className="px-3 py-2">1–2 years</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">Cost</td>
                  <td className="px-3 py-2">Medium–High</td>
                  <td className="px-3 py-2">Low–Medium</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">Career Scope</td>
                  <td className="px-3 py-2">Academia, Research, Analytics</td>
                  <td className="px-3 py-2">Technician, Operator, Entry Roles</td>
                </tr>
                <tr className="border-t">
                  <td className="px-3 py-2">Average Salary</td>
                  <td className="px-3 py-2">4–8 LPA</td>
                  <td className="px-3 py-2">2–4 LPA</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container py-10">
        <StatsStrip />
      </section>

      {/* FAQ */}
      <section className="container py-10">
        <h2 className="text-xl font-semibold">Frequently asked questions</h2>
        <Accordion type="single" collapsible className="mt-4 w-full">
          <AccordionItem value="q1">
            <AccordionTrigger>Which stream should I choose after Class 10?</AccordionTrigger>
            <AccordionContent>Use our Career Test: it measures interests/aptitude and recommends Arts/Science/Commerce with confidence and course suggestions.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q2">
            <AccordionTrigger>How do I find government colleges near me?</AccordionTrigger>
            <AccordionContent>Open Find Colleges to filter by district, stream, degree and view distance/time on the map.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="q3">
            <AccordionTrigger>Is a diploma better than a degree?</AccordionTrigger>
            <AccordionContent>Diplomas are faster and cheaper for entry-level roles; degrees open deeper academic and leadership paths. Compare them in the tool.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Testimonials */}
      <section className="container space-y-6 py-10">
        <h2 className="text-xl font-semibold">Success stories from J&K</h2>
        <RowCarousel heading="Student Stories" items={stories} />
      </section>

      {/* Newsletter */}
      <section className="container py-10">
        <div className="rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Get scholarship and exam alerts</h3>
              <p className="mt-1 text-sm text-blue-800/80">Receive updates for J&K government scholarships and entrance deadlines.</p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Subscribed! We will keep you posted.");
              }}
              className="flex w-full max-w-md items-center gap-2"
            >
              <input type="email" required placeholder="Your email" className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container py-8">
        <div className="relative overflow-hidden rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl" />
          <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-lg font-semibold">Ready to choose your path?</h3>
              <p className="mt-1 text-sm text-blue-800/80">Take the assessment and get a personalized stream recommendation.</p>
            </div>
            <Button asChild>
              <Link to="/test">Start Career Test <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function StatsStrip() {
  const s1 = useCountUp(5000);
  const s2 = useCountUp(120);
  const s3 = useCountUp(60);
  return (
    <div className="grid gap-4 rounded-xl border bg-card p-6 text-center md:grid-cols-3">
      <div><div className="text-3xl font-extrabold">{s1}+ </div><div className="text-sm text-muted-foreground">Students guided</div></div>
      <div><div className="text-3xl font-extrabold">{s2}+ </div><div className="text-sm text-muted-foreground">J&K Government Colleges</div></div>
      <div><div className="text-3xl font-extrabold">{s3}+ </div><div className="text-sm text-muted-foreground">Career paths covered</div></div>
    </div>
  );
}
