"use client"

import Link from "next/link"
import { useState, useTransition } from "react"
import { deleteLink } from "@/app/dashboard/actions"

export default function LinkCard({ id, shortLink, originalUrl, createdAt }) {
  const [copied, setCopied] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const [isPending, startTransition] = useTransition()

  const handleCopy = async () => {
    await navigator.clipboard.writeText(shortLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 1800)
  }

  const handleDelete = () => {
    startTransition(async () => {
      await deleteLink(id)
      setConfirming(false)
    })
  }

  return (
    <div className={`flex flex-col gap-3 rounded-2xl border bg-slate-50 p-5 transition hover:border-indigo-200 hover:bg-white sm:flex-row sm:items-center sm:justify-between ${isPending ? "opacity-50 pointer-events-none" : "border-slate-200"}`}>

      {/* Link info */}
      <div className="min-w-0 flex-1">
        <Link
          href={shortLink}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-indigo-600 underline-offset-4 hover:underline break-all"
        >
          {shortLink}
        </Link>
        <p className="mt-1 truncate text-sm text-slate-500">{originalUrl}</p>
        {createdAt && (
          <p className="mt-1 text-xs text-slate-400">
            {new Date(createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2">
        {/* Copy */}
        <button
          onClick={handleCopy}
          className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition-colors ${
            copied
              ? "bg-emerald-100 text-emerald-700"
              : "bg-slate-100 text-slate-600 hover:bg-indigo-100 hover:text-indigo-700"
          }`}
        >
          {copied ? (
            <>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              Copied
            </>
          ) : (
            <>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copy
            </>
          )}
        </button>

        {/* Delete */}
        {confirming ? (
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-slate-500">Sure?</span>
            <button
              onClick={handleDelete}
              className="rounded-lg bg-red-500 px-3 py-2 text-xs font-bold text-white hover:bg-red-600 transition-colors"
            >
              {isPending ? "Deleting…" : "Yes, delete"}
            </button>
            <button
              onClick={() => setConfirming(false)}
              className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirming(true)}
            className="flex items-center gap-1.5 rounded-lg bg-slate-100 px-3 py-2 text-xs font-bold text-slate-600 hover:bg-red-100 hover:text-red-600 transition-colors"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Delete
          </button>
        )}
      </div>
    </div>
  )
}
