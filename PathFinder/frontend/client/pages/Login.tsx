import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [klass, setKlass] = useState<"10" | "12" | "other">("other");
  const [interests, setInterests] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const interestList = interests
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    login({ name, email, klass, interests: interestList });
    nav("/dashboard");
  };

  return (
    <div className="container max-w-xl py-10">
      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 h-28 w-full rounded-md bg-cover bg-center" style={{ backgroundImage: `url(https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=60&auto=format&fit=crop)` }} />
        <h1 className="text-2xl font-bold">Sign in / Sign up</h1>
        <p className="mt-1 text-sm text-muted-foreground">Create your profile to personalize your dashboard.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="text-sm font-medium">Class</label>
            <select value={klass} onChange={(e) => setKlass(e.target.value as any)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium">Interests (comma separated)</label>
            <input value={interests} onChange={(e) => setInterests(e.target.value)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="w-full rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">Continue</button>
        </form>
      </div>
    </div>
  );
}
