import { redirect, notFound } from 'next/navigation'
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { shortUrl } = await params
  const client = await clientPromise;
  const db = client.db("trimlinks");
  const doc = await db.collection("url").findOne({ shortUrl })

  if (doc) {
    redirect(doc.url)
  }

  notFound()
}