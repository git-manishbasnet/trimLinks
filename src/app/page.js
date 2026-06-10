import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const poppins = localFont({
  src: "./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/";

  return (
    <main >
      <section className=" px-4 py-12 md:px-10 lg:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_460px]">
          <div className="text-center lg:text-left">
            <p className="mb-3 text-sm font-bold uppercase tracking-wider text-indigo-700">
              TrimLinks
            </p>
            <h1
              className={`text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl ${poppins.className}`}
            >
              Short links that are clean, custom, and easy to share.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-700 lg:mx-0">
              Turn long URLs into simple links with memorable slugs. Perfect
              for project demos, social bios, notes, and quick sharing.
            </p>

            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/shorten"
                className="rounded-md bg-indigo-600 px-6 py-3 text-center font-bold text-white shadow-sm transition hover:bg-indigo-700"
              >
                Try Now
              </Link>
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-indigo-300 bg-white px-6 py-3 text-center font-bold text-indigo-700 shadow-sm transition hover:border-indigo-500 hover:bg-indigo-50"
              >
                GitHub
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              <div className="rounded-lg bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-950">Custom slugs</p>
                <p className="mt-1 text-sm text-slate-600">Readable links for every use.</p>
              </div>
              <div className="rounded-lg bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-950">Fast redirects</p>
                <p className="mt-1 text-sm text-slate-600">Send visitors to the right URL.</p>
              </div>
              <div className="rounded-lg bg-white/80 p-4 shadow-sm">
                <p className="text-sm font-bold text-slate-950">MongoDB backed</p>
                <p className="mt-1 text-sm text-slate-600">Simple storage for your links.</p>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="rounded-lg bg-white p-4 shadow-lg">
              <Image
                className="mix-blend-darken"
                alt="Illustration of a person organizing web links"
                src={"/images.png"}
                width={460}
                height={460}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
