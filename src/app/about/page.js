import Link from "next/link";

export const metadata = {
  title: "About TrimLinks",
  description: "Learn about TrimLinks, a simple URL shortener built with Next.js and MongoDB.",
};

export default function About() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-12">
      <section className="mx-auto max-w-5xl">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            About TrimLinks
          </p>
          <h1 className="text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            A straightforward URL shortener for cleaner sharing.
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            TrimLinks helps turn long, messy URLs into short custom links that
            are easier to remember, share, and type. It is built as a focused
            Next.js app with MongoDB storing each original URL and its short
            code.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-slate-950">Simple</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Paste a destination URL, choose a readable short text, and get a
              link you can use immediately.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-slate-950">Custom</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Use meaningful slugs for projects, profiles, resources, or quick
              demos instead of random-looking strings.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5">
            <h2 className="text-lg font-bold text-slate-950">Expandable</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The app can grow with analytics, user accounts, QR codes, and a
              dashboard for managing links.
            </p>
          </div>
        </div>

        <Link
          href="/shorten"
          className="mt-10 inline-flex rounded-md bg-indigo-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-indigo-700"
        >
          Create a short link
        </Link>
      </section>
    </main>
  );
}
