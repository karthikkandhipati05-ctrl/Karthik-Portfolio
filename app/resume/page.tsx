import { resumeData } from '@/data/resumeData';

export default function ResumePage() {
  return (
    <section className="space-y-6">
      <h1 className="section-title">Resume</h1>
      <div className="card p-0 overflow-hidden">
        <iframe
          src="/Karthik_Kandhipati_Resume.pdf"
          title="Resume PDF"
          className="h-[75vh] w-full"
        />
      </div>
      <a
        href="/Karthik_Kandhipati_Resume.pdf"
        download
        className="inline-block rounded bg-accent-500 px-4 py-2 text-white"
      >
        Download Resume
      </a>
      <div className="card">
        <h2 className="font-semibold">Education</h2>
        {resumeData.education.map((edu) => (
          <p key={edu.institution} className="mt-2 text-slate-700 dark:text-slate-300">
            {edu.degree}, {edu.institution} ({edu.details})
          </p>
        ))}
      </div>
    </section>
  );
}
