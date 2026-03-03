'use client';

import { useState } from 'react';
import AnimatedSection from '@/app/components/animated-section';
import { resumeData } from '@/data/resumeData';

function CaseStudyCard({ title, caseStudy }: { title: string; caseStudy: (typeof resumeData.projects)[number]['caseStudy'] }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="card">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-3 text-slate-700 dark:text-slate-300"><strong>Problem:</strong> {caseStudy.problem}</p>
      <p className="mt-2 text-slate-700 dark:text-slate-300"><strong>Impact:</strong> {caseStudy.impact}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {caseStudy.metrics.map((metric) => (
          <span key={metric} className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">{metric}</span>
        ))}
      </div>
      <button className="mt-4 rounded bg-accent-500 px-3 py-2 text-sm text-white" onClick={() => setOpen(!open)}>
        {open ? 'Hide' : 'Show'} Technical Deep Dive
      </button>
      {open && (
        <div className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <p><strong>Business Context:</strong> {caseStudy.businessContext}</p>
          {caseStudy.hypothesis && <p><strong>Hypothesis:</strong> {caseStudy.hypothesis}</p>}
          <p><strong>Approach:</strong> {caseStudy.approach}</p>
          <p><strong>Tools:</strong> {caseStudy.tools.join(', ')}</p>
          {caseStudy.tradeoffs && <p><strong>Tradeoffs:</strong> {caseStudy.tradeoffs}</p>}
        </div>
      )}
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <AnimatedSection>
      <section className="space-y-5">
        <h1 className="section-title">Case Studies</h1>
        {resumeData.experience.map((exp) => (
          <CaseStudyCard key={exp.company} title={`${exp.company} · ${exp.role}`} caseStudy={exp.caseStudy} />
        ))}
        {resumeData.projects.map((project) => (
          <CaseStudyCard key={project.name} title={project.name} caseStudy={project.caseStudy} />
        ))}
      </section>
    </AnimatedSection>
  );
}
