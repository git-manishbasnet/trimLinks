"use client";

import Link from "next/link";
import React, { useState } from "react";

const Shorten = () => {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url,
          shortUrl,
        }),
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
    } catch (error) {
      console.error("Error:", error);
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
    <main className="min-h-[calc(100vh-4rem)] bg-slate-50 px-4 py-12">
      <section className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_420px] lg:items-start">
        <div className="pt-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-indigo-600">
            TrimLinks Shortener
          </p>
          <h1 className="max-w-2xl text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            Make long URLs easier to share.
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Create a clean short link with your own custom slug. Keep it simple,
            readable, and ready for chats, bios, notes, or project demos.
          </p>
          <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-2xl font-black text-indigo-600">1</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Paste URL</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-2xl font-black text-indigo-600">2</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Pick slug</p>
            </div>
            <div className="rounded-lg border border-slate-200 bg-white p-4">
              <p className="text-2xl font-black text-indigo-600">3</p>
              <p className="mt-1 text-sm font-semibold text-slate-800">Share link</p>
            </div>
          </div>
        </div>

        <form
          onSubmit={generate}
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-slate-950">Generate your short URL</h2>
          <p className="mt-2 text-sm text-slate-500">
            Use letters, numbers, and hyphens for the short text.
          </p>
          <div className="mt-6 flex flex-col gap-4">
        <input
          value={url}
              type="url"
              placeholder="https://example.com/very-long-link"
          onChange={(e) => {
            setUrl(e.target.value);
          }}
              className="rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              required
        />
        <input
          value={shortUrl}
          type="text"
              placeholder="your-custom-link"
          onChange={(e) => {
            setShortUrl(e.target.value);
          }}
              className="rounded-md border border-slate-300 px-4 py-3 text-slate-950 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
              pattern="[A-Za-z0-9-]+"
              required
        />
        <button
              type="submit"
              disabled={isLoading}
              className="rounded-md bg-indigo-600 px-4 py-3 font-bold text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:bg-indigo-300"
        >
              {isLoading ? "Generating..." : "Generate"}
        </button>
      </div>

          {message && (
            <p
              className={`mt-4 rounded-md px-4 py-3 text-sm font-medium ${
                isError
                  ? "bg-red-50 text-red-700"
                  : "bg-emerald-50 text-emerald-700"
              }`}
            >
              {message}
            </p>
          )}

     {generated && (
            <div className="mt-5 rounded-lg border border-indigo-100 bg-indigo-50 p-4">
              <p className="text-sm font-bold text-slate-900">Generated Short URL</p>
              <Link
                href={generated}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block break-all text-indigo-700 underline-offset-4 hover:underline"
              >
          {generated}
        </Link>
              <button
                type="button"
                onClick={copyGenerated}
                className="mt-4 rounded-md bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-slate-800"
              >
                {copied ? "Copied" : "Copy link"}
              </button>
            </div>
     )}
        </form>
      </section>
    </main>
  );
};

export default Shorten;
