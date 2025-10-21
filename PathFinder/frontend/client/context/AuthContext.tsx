import { createContext, useContext, useEffect, useMemo, useState } from "react";

export interface User {
  name: string;
  email: string;
  klass?: "10" | "12" | "other";
  interests?: string[];
}

interface AuthValue {
  user: User | null;
  login: (u: User) => void;
  logout: () => void;
}

const AuthCtx = createContext<AuthValue | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("authUserV1");
      if (raw) setUser(JSON.parse(raw));
    } catch {}
  }, []);

  const value = useMemo<AuthValue>(() => ({
    user,
    login: (u) => {
      setUser(u);
      try { localStorage.setItem("authUserV1", JSON.stringify(u)); } catch {}
    },
    logout: () => {
      setUser(null);
      try { localStorage.removeItem("authUserV1"); } catch {}
    },
  }), [user]);

  return <AuthCtx.Provider value={value}>{children}</AuthCtx.Provider>;
}

export function useAuth() {
  const v = useContext(AuthCtx);
  if (!v) throw new Error("useAuth must be used within AuthProvider");
  return v;
}
