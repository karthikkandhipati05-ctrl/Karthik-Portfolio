import AnimatedSection from './components/animated-section';
import { resumeData } from '@/data/resumeData';

const topMetrics = resumeData.quantifiedMetrics;

export default function HomePage() {
  return (
    <div className="space-y-14">
      <AnimatedSection>
        <section className="card bg-gradient-to-br from-white to-slate-100 dark:from-slate-900 dark:to-slate-950">
          <p className="text-sm uppercase tracking-wider text-accent-600">Data Scientist / Product Analytics</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">{resumeData.name}</h1>
          <p className="mt-4 max-w-3xl text-lg text-slate-700 dark:text-slate-300">{resumeData.summary}</p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <h2 className="section-title mb-5">Key Outcomes</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {topMetrics.map((metric) => (
              <div key={metric} className="card font-medium">{metric}</div>
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <h2 className="section-title mb-5">Skills</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {Object.entries(resumeData.skills).map(([group, items]) => (
              <div key={group} className="card">
                <h3 className="mb-3 text-lg font-semibold capitalize">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="rounded-full bg-slate-100 px-3 py-1 text-sm dark:bg-slate-800">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </AnimatedSection>
    </div>
  );
}
