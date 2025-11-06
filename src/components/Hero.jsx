import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[60vh] min-h-[420px] w-full overflow-hidden sm:h-[70vh]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/5EwoDiC2tChvmy4K/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/30 to-white/80"
      />

      <div className="relative mx-auto flex h-full max-w-6xl items-end px-6 pb-10">
        <div className="rounded-2xl bg-white/70 p-6 shadow-xl ring-1 ring-black/5 backdrop-blur">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">Awhina Tipene</h1>
          <p className="mt-1 text-sky-700">Pharmacist • Whangārei, New Zealand</p>
        </div>
      </div>
    </section>
  );
}
