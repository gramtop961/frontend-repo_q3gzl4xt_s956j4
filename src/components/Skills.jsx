const skills = [
  "Excellent Customer Service",
  "Communication",
  "Clinical Applications",
  "Team Management",
  "Product Safety",
  "Pharmaceutical Operations",
  "Patient Counseling",
];

export default function Skills() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
        <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-gray-200 bg-white px-4 py-3 text-gray-800 shadow-sm"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
