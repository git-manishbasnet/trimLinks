import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export const metadata = {
  title: "About — TrimLinks",
  description: "Learn about TrimLinks, a simple URL shortener built with Next.js and MongoDB.",
};

const techStack = [
  {
    name: "Next.js 15",
    desc: "App Router with server and client components for fast, modern routing.",
  },
  {
    name: "MongoDB",
    desc: "Stores every original URL and its custom slug reliably.",
  },
  {
    name: "Tailwind CSS",
    desc: "Utility-first styling for a clean, responsive UI.",
  },
  {
    name: "Vercel",
    desc: "Zero-config deployment with edge-optimised performance.",
  },
];

const values = [
  {
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Simple",
    desc: "Paste a URL, choose a slug, get a link. No accounts, no dashboards, no noise.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: "Custom",
    desc: "Pick readable slugs — not random strings — so your links make sense at a glance.",
  },
  {
    icon: (
      <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    title: "Open source",
    desc: "Every line is on GitHub. Fork it, extend it, or self-host it however you like.",
  },
];

export default function About() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/";

  return (
    <main className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-slate-50 px-4 py-24 md:py-32">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-200 opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            About TrimLinks
          </span>
          <h1 className={`mt-6 text-5xl font-extrabold leading-tight text-slate-950 md:text-6xl ${poppins.className}`}>
            A cleaner way to share links.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            TrimLinks turns long, messy URLs into short custom links that are
            easy to remember, type, and share — built with Next.js and MongoDB
            as a focused, no-bloat tool.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Why we built it
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Links should be readable by humans.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              Long URLs look broken in chat messages, get cut off in emails, and
              are impossible to type from memory. TrimLinks solves this with a
              single focused flow — paste your destination, pick a slug, done.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              There are no algorithms, no tracking pixels, and no upsell. Just
              a fast redirect from your short link to wherever you need people
              to go.
            </p>
            <Link
              href="/shorten"
              className="mt-8 inline-flex rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white shadow-sm transition hover:bg-indigo-700"
            >
              Create a short link
            </Link>
          </div>

          {/* decorative card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex flex-col gap-4">
              {[
                { label: "Original URL", value: "docs.example.com/project/setup/getting-started-guide", muted: true },
                { label: "Short URL", value: "trimlinks.app/setup-guide", muted: false },
              ].map(({ label, value, muted }) => (
                <div key={label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">{label}</p>
                  <p className={`mt-1 break-all text-sm font-medium ${muted ? "text-slate-400 line-through" : "text-indigo-600"}`}>
                    {value}
                  </p>
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-4 py-3">
                <svg className="h-4 w-4 shrink-0 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
                <p className="text-sm font-semibold text-emerald-700">Link shortened successfully</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Our principles
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Built on a few strong ideas.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <div className="w-fit rounded-lg border border-indigo-100 bg-indigo-50 p-3">
                  {icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-950">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech stack ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Tech stack
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              What it&apos;s built with.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {techStack.map(({ name, desc }) => (
              <div
                key={name}
                className="flex items-start gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-indigo-100 hover:bg-indigo-50"
              >
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-indigo-600 text-xs font-bold text-white">
                  {name[0]}
                </div>
                <div>
                  <p className="font-bold text-slate-950">{name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-indigo-600 px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-extrabold text-white md:text-4xl ${poppins.className}`}>
            Give it a try.
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            No sign-up. No clutter. Just a short link in seconds.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/shorten"
              className="w-full rounded-xl bg-white px-8 py-4 text-center font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50 sm:w-auto"
            >
              Shorten a link
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-indigo-400 px-8 py-4 text-center font-bold text-white transition hover:border-white hover:bg-indigo-700 sm:w-auto"
            >
              View on GitHub
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
