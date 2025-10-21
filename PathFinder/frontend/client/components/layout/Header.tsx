import { Link, NavLink } from "react-router-dom";
import { GraduationCap, Compass, User2, LogOut } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";
import { useAuth } from "@/context/AuthContext";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/test", label: "Career Test" },
  { to: "/explore", label: "Explore Courses" },
  { to: "/colleges", label: "Find Colleges" },
  { to: "/resources", label: "Resources" },
  { to: "/stories", label: "Success Stories" },
];

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-border/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
          <GraduationCap className="h-6 w-6 text-primary" />
          <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            PathFinder
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-muted-foreground hover:text-foreground transition-colors ${
                  isActive ? "text-foreground" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {!user ? (
            <Link
              to="/login"
              className="hidden sm:inline-flex items-center gap-2 rounded-md border border-input px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <User2 className="h-4 w-4" />
              Sign in
            </Link>
          ) : (
            <div className="hidden sm:flex items-center gap-2 text-sm">
              <span className="rounded-md border border-input px-2 py-1">{user.name}</span>
              <button onClick={logout} className="inline-flex items-center gap-1 rounded-md border border-input px-3 py-2 hover:bg-accent">
                <LogOut className="h-4 w-4"/> Logout
              </button>
            </div>
          )}
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-95"
          >
            <Compass className="h-4 w-4" />
            Dashboard
          </Link>
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
        </div>
      </div>
      <div className="md:hidden border-t border-border/60">
        <nav className="container flex items-center gap-4 overflow-x-auto py-3 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `whitespace-nowrap rounded-full px-3 py-1.5 ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-accent"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
