import Spline from "@splinetool/react-spline";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Header() {
  return (
    <header className="relative isolate overflow-hidden">
      {/* 3D Spline scene as full-bleed cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Soft gradient overlay for readability (non-blocking) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/50 via-blue-900/30 to-blue-900/60"
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="text-white">
          <h1 className="text-4xl font-extrabold tracking-tight drop-shadow sm:text-5xl">
            Awhina Tipene
          </h1>
          <p className="mt-3 text-lg font-medium opacity-90 sm:text-xl">
            Pharmacist
          </p>

          <div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3 sm:text-base">
            <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur">
              <MapPin size={18} className="opacity-90" />
              <span>0110, Whangārei, New Zealand</span>
            </div>
            <a
              href="tel:+6411091019181"
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              <Phone size={18} className="opacity-90" />
              <span>+64 110 910 19181</span>
            </a>
            <a
              href="mailto:awhinatipenework@outlook.com"
              className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/20 backdrop-blur transition hover:bg-white/15"
            >
              <Mail size={18} className="opacity-90" />
              <span>awhinatipenework@outlook.com</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
