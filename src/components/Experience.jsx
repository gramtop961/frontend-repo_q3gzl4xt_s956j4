import { motion } from "framer-motion";

function ExperienceItem({ role, company, location, date, bullets, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm ring-1 ring-black/5"
    >
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-lg font-semibold text-gray-900">
          {role} <span className="font-normal text-gray-500">— {company}</span>
        </h3>
        <div className="text-sm text-gray-600">
          {location} • {date}
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-700">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section className="relative z-0 mx-auto max-w-6xl px-6 py-12">
      <h2 className="text-2xl font-bold text-gray-900">Employment History</h2>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <ExperienceItem
          index={0}
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
          index={1}
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
