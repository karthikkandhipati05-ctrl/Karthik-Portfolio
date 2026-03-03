import AnimatedSection from '@/app/components/animated-section';
import { resumeData } from '@/data/resumeData';

export default function AboutPage() {
  return (
    <div className="space-y-10">
      <AnimatedSection>
        <section className="card">
          <h1 className="section-title mb-4">About</h1>
          <p className="text-slate-700 dark:text-slate-300">
            Karthik is a product-minded analytics professional who specializes in turning fragmented enterprise data into decisions leaders can execute quickly. His work spans healthcare and financial services, where trustworthy KPIs, experimentation, and scalable data pipelines directly influence capacity, risk, and growth outcomes.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <h2 className="section-title mb-5">Experience Timeline</h2>
          <div className="space-y-4">
            {resumeData.experience.map((exp) => (
              <article key={exp.company} className="card">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-semibold">{exp.role} · {exp.company}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{exp.duration}</p>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{exp.location}</p>
                <p className="mt-4 text-slate-700 dark:text-slate-300">{exp.caseStudy.businessContext}</p>
              </article>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
