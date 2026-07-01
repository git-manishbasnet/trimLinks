"use client";

import Link from "next/link";
import localFont from "next/font/local";
import React, { useState } from "react";

const poppins = localFont({
  src: "../fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
});

export default function Shorten() {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [generated, setGenerated] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generate = async (e) => {
    e.preventDefault();
    setMessage("");
    setGenerated("");
    setCopied(false);

    try {
      setIsLoading(true);
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, shortUrl }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setIsError(true);
        setMessage(result.message || "Could not generate the short URL.");
        return;
      }

      const host = process.env.NEXT_PUBLIC_HOST || window.location.origin;
      const nextGenerated = `${host}/${result.shortUrl || shortUrl.trim().toLowerCase()}`;

      setUrl("");
      setShortUrl("");
      setGenerated(nextGenerated);
      setIsError(false);
      setMessage(result.message);
    } catch {
      setIsError(true);
      setMessage("An error occurred while generating the short URL.");
    } finally {
      setIsLoading(false);
    }
  };

  const copyGenerated = async () => {
    if (!generated) return;
    await navigator.clipboard.writeText(generated);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <main className="flex flex-col">

      {/* ── Hero / Form section ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-indigo-50 via-white to-slate-50 px-4 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-100 opacity-50 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-200 opacity-40 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="text-center">
            <span className="inline-block rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-indigo-600">
              URL Shortener
            </span>
            <h1 className={`mt-5 text-4xl font-extrabold leading-tight text-slate-950 md:text-5xl ${poppins.className}`}>
              Make your links shorter.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-slate-600">
              Paste any long URL, pick a readable slug, and get a clean short
              link ready to share anywhere.
            </p>
          </div>

          {/* ── Form card ── */}
          <form
            onSubmit={generate}
            className="mx-auto mt-12 max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg"
          >
            <div className="flex flex-col gap-5">

              {/* Long URL */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Destination URL
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                  <svg className="h-4 w-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656L13 5.27" />
                  </svg>
                  <input
                    value={url}
                    type="url"
                    placeholder="https://example.com/very/long/url"
                    onChange={(e) => setUrl(e.target.value)}
                    className="w-full bg-transparent text-sm text-slate-950 outline-none placeholder:text-slate-400"
                    required
                  />
                </div>
              </div>

              {/* Custom slug */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-semibold text-slate-700">
                  Custom slug
                </label>
                <div className="flex overflow-hidden rounded-xl border border-slate-300 bg-slate-50 transition focus-within:border-indigo-500 focus-within:bg-white focus-within:ring-2 focus-within:ring-indigo-100">
                  <span className="flex items-center border-r border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-500 select-none">
                    trimlinks/
                  </span>
                  <input
                    value={shortUrl}
                    type="text"
                    placeholder="my-custom-slug"
                    onChange={(e) => setShortUrl(e.target.value)}
                    className="w-full bg-transparent px-4 py-3 text-sm text-slate-950 outline-none placeholder:text-slate-400"
                    pattern="[A-Za-z0-9-]+"
                    required
                  />
                </div>
                <p className="text-xs text-slate-400">
                  Letters, numbers, and hyphens only.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isLoading}
                className="flex items-center justify-center gap-2 rounded-xl bg-indigo-600 py-4 font-bold text-white shadow-sm shadow-indigo-200 transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isLoading ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                    </svg>
                    Generating…
                  </>
                ) : (
                  <>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Generate Short URL
                  </>
                )}
              </button>
            </div>

            {/* Feedback message */}
            {message && (
              <div
                className={`mt-5 flex items-start gap-3 rounded-xl px-4 py-4 text-sm font-medium ${
                  isError
                    ? "bg-red-50 text-red-700"
                    : "bg-emerald-50 text-emerald-700"
                }`}
              >
                {isError ? (
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ) : (
                  <svg className="mt-0.5 h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )}
                {message}
              </div>
            )}

            {/* Generated link card */}
            {generated && (
              <div className="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 p-5">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-indigo-400">
                    Your short URL
                  </p>
                  <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
                    Ready
                  </span>
                </div>
                <Link
                  href={generated}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block break-all text-lg font-bold text-indigo-700 underline-offset-4 hover:underline"
                >
                  {generated}
                </Link>
                <button
                  type="button"
                  onClick={copyGenerated}
                  className="mt-4 flex items-center gap-2 rounded-lg bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
                >
                  {copied ? (
                    <>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      Copy link
                    </>
                  )}
                </button>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* ── Steps ── */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              How it works
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Three steps, done.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Paste your long URL",
                desc: "Drop in any destination link — a blog post, doc, product page, or anything else.",
              },
              {
                step: "02",
                title: "Choose a custom slug",
                desc: "Pick a short, readable keyword. Use letters, numbers, and hyphens.",
              },
              {
                step: "03",
                title: "Copy and share",
                desc: "Your trimmed link is ready. Share it in chats, bios, emails, or slides.",
              },
            ].map(({ step, title, desc }) => (
              <div
                key={step}
                className="relative rounded-2xl border border-slate-100 bg-slate-50 p-7 transition hover:border-indigo-100 hover:shadow-md"
              >
                <span className={`text-5xl font-extrabold text-indigo-100 ${poppins.className}`}>
                  {step}
                </span>
                <h3 className="mt-3 font-bold text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tips ── */}
      <section className="bg-slate-50 px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Tips
            </p>
            <h2 className={`mt-3 text-3xl font-extrabold text-slate-950 md:text-4xl ${poppins.className}`}>
              Make your slugs great.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              {
                good: true,
                example: "my-portfolio",
                note: "Clear and easy to type from memory.",
              },
              {
                good: false,
                example: "aB3-xZ9-qR1",
                note: "Hard to remember or share verbally.",
              },
              {
                good: true,
                example: "summer-sale",
                note: "Descriptive — tells people where they're going.",
              },
              {
                good: false,
                example: "link1",
                note: "Too generic. Collides easily with others.",
              },
            ].map(({ good, example, note }) => (
              <div
                key={example}
                className={`flex items-start gap-4 rounded-2xl border p-5 ${
                  good
                    ? "border-emerald-100 bg-emerald-50"
                    : "border-red-100 bg-red-50"
                }`}
              >
                <div className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${good ? "bg-emerald-100" : "bg-red-100"}`}>
                  {good ? (
                    <svg className="h-3.5 w-3.5 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  ) : (
                    <svg className="h-3.5 w-3.5 text-red-500" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div>
                  <p className={`font-bold ${good ? "text-emerald-800" : "text-red-700"}`}>
                    trimlinks/<span className="underline underline-offset-2">{example}</span>
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{note}</p>
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
            Ready to trim your first link?
          </h2>
          <p className="mt-4 text-lg text-indigo-200">
            No sign-up needed. Paste, shorten, and share.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 inline-flex rounded-xl bg-white px-8 py-4 font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
          >
            Shorten a link ↑
          </button>
        </div>
      </section>

    </main>
  );
}
