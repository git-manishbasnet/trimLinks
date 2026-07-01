import { RateLimiterMongo } from "rate-limiter-flexible";
import clientPromise from "@/lib/mongodb";

let rateLimiter;

export async function getRateLimiter() {
  if (rateLimiter) return rateLimiter;

  const client = await clientPromise;

  rateLimiter = new RateLimiterMongo({
    storeClient: client,
    dbName: "trimlinks",        // matches your db
    points: 10,                 // 10 requests
    duration: 60,               // per 60 seconds
    keyPrefix: "rl_generate",
  });

  return rateLimiter;
}