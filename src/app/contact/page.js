import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export const metadata = {
  title: "Contact — TrimLinks",
  description: "Contact page for TrimLinks.",
};

const contactMethods = [
  {
    icon: (
      <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "Email",
    value: "hello@trimlinks.dev",
    detail: "For project questions, feedback, and collaboration.",
    href: "mailto:hello@trimlinks.dev",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    label: "Support",
    value: "support@trimlinks.dev",
    detail: "For bug reports, link issues, and technical help.",
    href: "mailto:support@trimlinks.dev",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-indigo-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/trimlinks",
    detail: "View source, open issues, and follow project updates.",
    href: null,
  },
];

const infoItems = [
  {
    icon: (
      <svg className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Location",
    value: "Kathmandu, Nepal",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Working hours",
    value: "Sun – Fri, 10 AM – 6 PM",
  },
  {
    icon: (
      <svg className="h-5 w-5 text-indigo-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    label: "Response time",
    value: "Usually within 24 hours",
  },
];

export default function Contact() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;

  const resolvedMethods = contactMethods.map((m) =>
    m.label === "GitHub" ? { ...m, href: githubUrl ?? null } : m
  );

  return (
    <main className="flex flex-col">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-slate-50 px-4 py-24 md:py-32">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-200 opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-3xl text-center">
          <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Contact Us
          </span>
          <h1 className={`mt-6 text-5xl font-extrabold leading-tight text-slate-950 md:text-6xl ${poppins.className}`}>
            Let&apos;s talk.
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Have a question, spotted a bug, or want to collaborate? Reach us
            through any of the channels below.
          </p>
        </div>
      </section>

      {/* ── Contact methods ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-5 sm:grid-cols-3">
            {resolvedMethods.map(({ icon, label, value, detail, href }) => (
              <Link
                key={label}
                href={href ?? "#"}
                target={href?.startsWith("http") ? "_blank" : undefined}
                rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-indigo-200 hover:bg-indigo-50 hover:shadow-md ${!href ? "pointer-events-none opacity-50" : ""}`}
              >
                <div className="w-fit rounded-xl border border-indigo-100 bg-white p-3 shadow-sm transition group-hover:border-indigo-200">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-500">
                    {label}
                  </p>
                  <p className="mt-1 font-bold text-slate-950 break-all">{value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-500">{detail}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick info ── */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Quick info
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Find us here.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {infoItems.map(({ icon, label, value }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mt-0.5 rounded-xl border border-indigo-100 bg-indigo-50 p-3">
                  {icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    {label}
                  </p>
                  <p className="mt-1 font-semibold text-slate-800">{value}</p>
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
            Just want to shorten a link?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            No forms needed — head straight to the shortener.
          </p>
          <Link
            href="/shorten"
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
          >
            Try the shortener
          </Link>
        </div>
      </section>

    </main>
  );
}
