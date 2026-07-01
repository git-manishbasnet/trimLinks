import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/";

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-slate-50 px-4 py-24 md:py-36">
        {/* decorative blobs */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-indigo-200 opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            URL Shortener
          </span>

          <h1
            className={`mt-6 text-5xl font-extrabold leading-tight text-slate-950 md:text-6xl lg:text-7xl ${poppins.className}`}
          >
            Short links that{" "}
            <span className="text-indigo-600">actually</span> work.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            Turn any long URL into a clean, custom slug in seconds. Perfect for
            social bios, project demos, quick sharing, and everything in
            between.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/shorten"
              className="w-full rounded-xl bg-indigo-600 px-8 py-4 text-center font-bold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700 hover:shadow-indigo-300 sm:w-auto"
            >
              Try It Free
            </Link>
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full rounded-xl border border-slate-300 bg-white px-8 py-4 text-center font-bold text-slate-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-700 sm:w-auto"
            >
              View on GitHub
            </Link>
          </div>

          {/* example pill */}
          <div className="mx-auto mt-14 flex max-w-lg items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-md">
            <div className="min-w-0">
              <p className="truncate text-sm text-slate-400">
                https://example.com/very/long/url/that/is/hard/to/share
              </p>
              <p className="mt-1 font-semibold text-indigo-600">
                trimlinks.app/my-demo
              </p>
            </div>
            <span className="ml-4 shrink-0 rounded-lg bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
              Shortened
            </span>
          </div>
        </div>
      </section>

      {/* ── Stats strip ── */}
      <section className="border-y border-slate-100 bg-white px-4 py-12">
        <div className="mx-auto grid max-w-4xl gap-8 text-center sm:grid-cols-3">
          {[
            { value: "100%", label: "Free to use" },
            { value: "Custom", label: "Slugs you choose" },
            { value: "Instant", label: "Redirects" },
          ].map(({ value, label }) => (
            <div key={label}>
              <p className={`text-4xl font-extrabold text-indigo-600 ${poppins.className}`}>
                {value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-500">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              How it works
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Three steps to a cleaner link.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Paste your URL",
                desc: "Drop in any long, unwieldy link — blog post, product page, or Google doc.",
              },
              {
                step: "02",
                title: "Pick a slug",
                desc: "Choose a short, readable keyword that makes sense for your audience.",
              },
              {
                step: "03",
                title: "Share anywhere",
                desc: "Copy the short link and drop it in a chat, bio, email, or slide deck.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
              >
                <span className={`text-5xl font-extrabold text-indigo-100 ${poppins.className}`}>
                  {step}
                </span>
                <h3 className="mt-3 text-lg font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Features
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Everything you need, nothing you don&apos;t.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656L13 5.27" />
                  </svg>
                ),
                title: "Custom slugs",
                desc: "Pick a meaningful keyword instead of a random string.",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Instant redirects",
                desc: "Visitors land on the destination page with zero delay.",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7c0-2-1-3-3-3H7C5 4 4 5 4 7z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M9 16h4" />
                  </svg>
                ),
                title: "MongoDB backed",
                desc: "Every link stored reliably with a simple schema.",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Unique slugs enforced",
                desc: "Duplicate short codes are rejected automatically.",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                ),
                title: "One-click copy",
                desc: "Copy your new short URL straight to the clipboard.",
              },
              {
                icon: (
                  <svg className="h-6 w-6 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                ),
                title: "Open source",
                desc: "Host it yourself, fork it, or contribute on GitHub.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-6 transition hover:border-indigo-100 hover:bg-indigo-50"
              >
                <div className="mt-0.5 shrink-0 rounded-lg border border-indigo-100 bg-white p-2 shadow-sm">
                  {icon}
                </div>
                <div>
                  <h3 className="font-bold text-slate-950">{title}</h3>
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
            Ready to trim your links?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            No sign-up required. Just paste, shorten, and share.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/shorten"
              className="w-full rounded-xl bg-white px-8 py-4 text-center font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50 sm:w-auto"
            >
              Get Started
            </Link>
            <Link
              href="/about"
              className="w-full rounded-xl border border-indigo-400 px-8 py-4 text-center font-bold text-white transition hover:border-white hover:bg-indigo-700 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
