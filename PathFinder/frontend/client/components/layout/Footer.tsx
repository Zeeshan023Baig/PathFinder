import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 bg-gradient-to-b from-background to-secondary/40">
      <div className="container grid grid-cols-1 gap-10 py-12 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">PathFinder</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Your one-stop personalized career and education advisor. Plan your
            future with confidence.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Explore</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/test" className="hover:text-foreground">Career Test</Link></li>
            <li><Link to="/explore" className="hover:text-foreground">Courses & Streams</Link></li>
            <li><Link to="/colleges" className="hover:text-foreground">Find Colleges</Link></li>
            <li><Link to="/visualizer" className="hover:text-foreground">Career Pathways</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Resources</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/resources" className="hover:text-foreground">Scholarships</Link></li>
            <li><Link to="/resources" className="hover:text-foreground">Entrance Exams</Link></li>
            <li><Link to="/resources" className="hover:text-foreground">Blogs & Stories</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold">Contact</h4>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@pathfinder.app</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 98765 43210</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> New Delhi, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} PathFinder. All rights reserved.
      </div>
    </footer>
  );
}
