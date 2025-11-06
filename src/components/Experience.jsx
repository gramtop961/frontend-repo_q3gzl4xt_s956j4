function ExperienceItem({ role, company, location, date, bullets }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{role} <span className="text-gray-500 font-normal">— {company}</span></h3>
        <div className="text-sm text-gray-600">{location} • {date}</div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900">Employment History</h2>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <ExperienceItem
          role="Pharmacist"
          company="Hoturoa Health Services"
          location="Whangārei"
          date="May 2015 — Present"
          bullets={[
            "Verified patient prescriptions using the SAFERITE system.",
            "Issued medications according to each prescription.",
            "Handled each patient case and prescription with utmost care and privacy.",
            "Collaborated with pharmacists and doctors to ensure quality care.",
            "Advised patients on appropriate usage of medicines and treatments.",
            "Prepared reports for the Ministry of Health for instances of drug abuse or illegal activity.",
          ]}
        />
        <ExperienceItem
          role="Pharmacist"
          company="Northland Pharmacy"
          location="Whangārei"
          date="Feb 2013 — May 2015"
          bullets={[
            "Advised patients on how to safely take prescriptions and identified potential drug interactions.",
            "Maintained and updated pharmacy records and inventory systems.",
          ]}
        />
      </div>
    </section>
  );
}
