import { Quote, Sparkles } from "lucide-react";

const STORIES = [
  {
    name: "Aarav Mehta",
    city: "Mumbai, MH",
    track: "B.Tech → Software Engineer",
    quote: "Focused on projects and internships; landed my first role at a product startup.",
    image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Ishita Roy",
    city: "Kolkata, WB",
    track: "B.Com → MBA (Finance)",
    quote: "Strong fundamentals in accounting and Excel helped me crack internships.",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Rohit Verma",
    city: "Jaipur, RJ",
    track: "BJMC → Content Strategist",
    quote: "Built a portfolio through college magazine and freelance work.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Neha Singh",
    city: "Lucknow, UP",
    track: "Economics (Hons) → Policy Analyst",
    quote: "Participated in research projects and learned data tools to stand out.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Vikram Rao",
    city: "Bengaluru, KA",
    track: "BCA → UI Engineer",
    quote: "Open source contributions and a solid portfolio made the difference.",
    image: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Muskan Patel",
    city: "Ahmedabad, GJ",
    track: "B.Des → Product Designer",
    quote: "I focused on research interviews and prototypes that solve user pain points.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Arjun Kumar",
    city: "Patna, BR",
    track: "B.Sc (PCM) → Data Analyst",
    quote: "Competitions and Kaggle notebooks helped me practice real datasets.",
    image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&q=60&auto=format&fit=crop",
  },
  {
    name: "Sara Khan",
    city: "Srinagar, J&K",
    track: "BJMC → Media Producer",
    quote: "Interned at local channels and built a diverse media portfolio.",
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38?w=1200&q=60&auto=format&fit=crop",
  },
];

export default function Stories() {
  return (
    <div className="container max-w-6xl py-8">
      <div className="mb-4 flex items-center gap-2 text-sm font-medium text-primary"><Sparkles className="h-4 w-4"/> Success Stories (All India)</div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {STORIES.map((s) => (
          <div key={s.name} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="h-40 w-full bg-cover bg-center" style={{ backgroundImage: `url(${s.image})` }} />
            <div className="p-4">
              <div className="text-base font-semibold">{s.name}</div>
              <div className="text-xs text-muted-foreground">{s.city}</div>
              <div className="mt-2 text-sm font-medium">{s.track}</div>
              <div className="mt-2 flex items-start gap-2 text-sm text-muted-foreground">
                <Quote className="mt-0.5 h-4 w-4"/> <span>{s.quote}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
