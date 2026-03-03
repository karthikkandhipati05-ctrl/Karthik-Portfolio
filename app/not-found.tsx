import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="card text-center">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2">The page you are looking for does not exist.</p>
      <Link className="mt-4 inline-block rounded bg-accent-500 px-4 py-2 text-white" href="/">Back Home</Link>
    </div>
  );
}
