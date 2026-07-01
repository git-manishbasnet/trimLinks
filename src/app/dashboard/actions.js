"use server"

import { auth } from "@/auth"
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { revalidatePath } from "next/cache"

export async function deleteLink(id) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const client = await clientPromise
  const db = client.db("trimlinks")

  await db.collection("url").deleteOne({
    _id: new ObjectId(id),
    userId: session.user.id,
  })

  revalidatePath("/dashboard")
}
