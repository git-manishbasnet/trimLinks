import { auth } from "@/auth"
import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"
import localFont from "next/font/local"
import Link from "next/link"
import Image from "next/image"
import LinkCard from "@/components/LinkCard"

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
})

export const metadata = {
  title: "Dashboard — TrimLinks",
}

export default async function Dashboard() {
  const session = await auth()
  if (!session) redirect("/login")

  const client = await clientPromise
  const db = client.db("trimlinks")
  const links = await db
    .collection("url")
    .find({ userId: session.user.id })
    .sort({ createdAt: -1 })
    .toArray()

  const host = process.env.NEXT_PUBLIC_HOST || "http://localhost:3000"

  return (
    <main className="flex flex-col">

      {/* ── Header ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-slate-50 px-4 py-16 md:py-20">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              {session.user?.image && (
                <Image
                  src={session.user.image}
                  alt={session.user.name ?? "User"}
                  width={52}
                  height={52}
                  className="rounded-full ring-2 ring-indigo-200"
                />
              )}
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
                  Dashboard
                </p>
                <h1 className={`text-2xl font-extrabold text-slate-950 md:text-3xl ${poppins.className}`}>
                  {session.user.name?.split(" ")[0]}&apos;s links
                </h1>
                <p className="mt-0.5 text-sm text-slate-500">
                  {links.length} link{links.length !== 1 ? "s" : ""} created
                </p>
              </div>
            </div>

            <Link
              href="/shorten"
              className="inline-flex items-center gap-2 self-start rounded-xl bg-indigo-600 px-5 py-3 font-bold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 sm:self-auto"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              New link
            </Link>
          </div>
        </div>
      </section>

      {/* ── Links list ── */}
      <section className="bg-white px-4 py-12">
        <div className="mx-auto max-w-5xl">
          {links.length === 0 ? (
            <div className="flex flex-col items-center gap-4 rounded-2xl border border-dashed border-slate-300 bg-slate-50 py-24 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-50">
                <svg className="h-6 w-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656L13 5.27" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-slate-950">No links yet</p>
                <p className="mt-1 text-sm text-slate-500">
                  Create your first short link and it will show up here.
                </p>
              </div>
              <Link
                href="/shorten"
                className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-indigo-700"
              >
                Create a link
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <LinkCard
                  key={link._id.toString()}
                  id={link._id.toString()}
                  shortLink={`${host}/${link.shortUrl}`}
                  originalUrl={link.url}
                  createdAt={link.createdAt?.toString() ?? null}
                />
              ))}
            </div>
          )}
        </div>
      </section>

    </main>
  )
}
