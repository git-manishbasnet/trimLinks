import Link from "next/link";
import localFont from "next/font/local";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export const metadata = {
  title: "404 — Page Not Found | TrimLinks",
};

export default function NotFound() {
  return (
    <main className="flex flex-col">
      <section className="relative flex flex-1 overflow-hidden bg-linear-to-br from-indigo-50 via-white to-slate-50 px-4 py-32 md:py-44">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-200 opacity-40 blur-3xl" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center text-center">
          <span className={`text-8xl font-extrabold text-indigo-100 md:text-9xl ${poppins.className}`}>
            404
          </span>

          <h1 className={`-mt-4 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
            Page not found.
          </h1>

          <p className="mx-auto mt-5 max-w-md text-base leading-7 text-slate-600">
            The page you&apos;re looking for doesn&apos;t exist or the short
            link hasn&apos;t been created yet.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="w-full rounded-xl bg-indigo-600 px-7 py-3.5 text-center font-bold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 sm:w-auto"
            >
              Go home
            </Link>
            <Link
              href="/shorten"
              className="w-full rounded-xl border border-slate-300 bg-white px-7 py-3.5 text-center font-bold text-slate-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-700 sm:w-auto"
            >
              Create a short link
            </Link>
          </div>

          <div className="mt-14 grid w-full gap-4 sm:grid-cols-3">
            {[
              { href: "/", label: "Home", desc: "Back to the landing page." },
              { href: "/shorten", label: "Shortener", desc: "Create a new short link." },
              { href: "/contact", label: "Contact", desc: "Report a broken link." },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-indigo-200 hover:shadow-md"
              >
                <p className="font-bold text-slate-950">{label}</p>
                <p className="mt-1 text-sm text-slate-500">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
