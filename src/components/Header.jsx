import { Mail, MapPin, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="relative isolate overflow-hidden bg-gradient-to-br from-teal-600 via-emerald-600 to-cyan-600 text-white">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Awhina Tipene</h1>
            <p className="mt-2 text-lg font-medium opacity-90">Pharmacist</p>
          </div>
          <div className="grid grid-cols-1 gap-2 text-sm sm:text-base">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="opacity-90" />
              <span>0110, Whangārei, New Zealand</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="opacity-90" />
              <a href="tel:+6411091019181" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                +64 110 910 19181
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="opacity-90" />
              <a href="mailto:awhinatipenework@outlook.com" className="underline decoration-white/30 underline-offset-4 hover:decoration-white">
                awhinatipenework@outlook.com
              </a>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(70%_50%_at_50%_0%,rgba(255,255,255,0.25),transparent_70%)]" />
    </header>
  );
}
