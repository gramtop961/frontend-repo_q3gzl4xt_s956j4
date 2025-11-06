const skills = [
  "Excellent Customer Service Skills",
  "Communication Skills",
  "Clinical Applications",
  "Team Management",
  "Product Safety",
  "Pharmaceutical Operations",
  "Patient Counseling",
];

export default function Skills() {
  return (
    <section className="relative z-0 bg-gradient-to-b from-white to-sky-50/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-lg border border-sky-100 bg-white/80 px-4 py-3 text-gray-800 shadow-sm ring-1 ring-black/5 backdrop-blur"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
