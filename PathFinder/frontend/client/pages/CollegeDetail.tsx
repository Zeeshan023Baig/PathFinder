import { useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { COLLEGES } from "@/data/colleges";
import { ArrowLeft, MapPin, Star, Wallet, School } from "lucide-react";

export default function CollegeDetail() {
  const { id } = useParams();
  const college = useMemo(() => COLLEGES.find((c) => c.id === id), [id]);
  if (!college) return (
    <div className="container py-10">
      <Link to="/colleges" className="text-sm underline">Back to Colleges</Link>
      <div className="mt-4">College not found.</div>
    </div>
  );
  const mapQ = encodeURIComponent(`${college.name}, ${college.city}`);
  return (
    <div className="min-h-[60vh]">
      <div className="h-56 w-full bg-cover bg-center" style={{ backgroundImage: `url(${college.image})` }} />
      <div className="container max-w-6xl -mt-10">
        <div className="rounded-xl border border-border bg-card p-6">
          <Link to="/colleges" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="h-4 w-4"/> Back</Link>
          <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold">{college.name}</h1>
              <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="h-4 w-4"/> {college.city}, {college.state}</div>
            </div>
            <div className="flex items-center gap-2 text-sm"><Star className="h-4 w-4 text-yellow-500"/> {college.rating.toFixed(1)}</div>
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-md border border-input p-4">
              <div className="font-semibold">Degrees Offered</div>
              <ul className="mt-2 list-disc pl-5 text-sm">{college.degrees.map((d) => (<li key={d}>{d}</li>))}</ul>
            </div>
            <div className="rounded-md border border-input p-4">
              <div className="font-semibold flex items-center gap-2"><Wallet className="h-4 w-4"/> Fee Structure</div>
              <div className="mt-2 text-sm">Approx. Annual Fees: {college.annualFees}. Check official website for category-wise details.</div>
            </div>
            <div className="rounded-md border border-input p-4">
              <div className="font-semibold flex items-center gap-2"><School className="h-4 w-4"/> Streams</div>
              <div className="mt-2 flex flex-wrap gap-1 text-xs">{college.streams.map((s)=> (<span key={s} className="rounded border border-input px-2 py-1">{s}</span>))}</div>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div>
              <div className="text-sm font-semibold">Map Location</div>
              <iframe title="map" className="mt-2 h-64 w-full rounded-md border" src={`https://www.google.com/maps?q=${mapQ}&output=embed`} loading="lazy"></iframe>
            </div>
            <div>
              <div className="text-sm font-semibold">Campus Photos</div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {college.gallery.map((g) => (
                  <div key={g} className="h-24 w-full rounded-md bg-cover bg-center" style={{ backgroundImage: `url(${g})` }} />
                ))}
              </div>
            </div>
          </div>
          {college.website && (
            <a href={college.website} target="_blank" rel="noreferrer" className="mt-6 inline-block rounded-md border border-input px-4 py-2 text-sm hover:bg-accent">Visit Official Website</a>
          )}
        </div>
      </div>
    </div>
  );
}
