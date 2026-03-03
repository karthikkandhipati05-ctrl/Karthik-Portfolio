import { resumeData } from '@/data/resumeData';

export default function ContactPage() {
  const hasLinkedin = Boolean(resumeData.contact.linkedin);
  const hasGithub = Boolean(resumeData.contact.github);

  return (
    <section className="space-y-6">
      <h1 className="section-title">Contact</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <form className="card space-y-4" action={`mailto:${resumeData.contact.email}`} method="post" encType="text/plain">
          <label className="block text-sm">
            Name
            <input className="mt-1 w-full rounded border border-slate-300 bg-transparent p-2 dark:border-slate-700" name="name" required />
          </label>
          <label className="block text-sm">
            Email
            <input type="email" className="mt-1 w-full rounded border border-slate-300 bg-transparent p-2 dark:border-slate-700" name="email" required />
          </label>
          <label className="block text-sm">
            Message
            <textarea className="mt-1 w-full rounded border border-slate-300 bg-transparent p-2 dark:border-slate-700" name="message" rows={5} required />
          </label>
          <button className="rounded bg-accent-500 px-4 py-2 text-white" type="submit">
            Send Message
          </button>
        </form>
        <div className="card space-y-3">
          <p>
            <strong>Email:</strong> {resumeData.contact.email}
          </p>
          <p>
            <strong>Phone:</strong> {resumeData.contact.phone}
          </p>
          <p>
            <strong>Location:</strong> {resumeData.contact.location}
          </p>
          {hasLinkedin ? (
            <a className="text-accent-600 underline" href={resumeData.contact.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-300">LinkedIn URL not provided in the supplied resume.</p>
          )}
          {hasGithub ? (
            <a className="block text-accent-600 underline" href={resumeData.contact.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : (
            <p className="text-sm text-slate-600 dark:text-slate-300">GitHub URL not provided in the supplied resume.</p>
          )}
        </div>
      </div>
    </section>
  );
}
