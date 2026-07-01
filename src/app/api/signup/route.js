import clientPromise from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { name, email, password } = await request.json();

  if (!name?.trim() || !email?.trim() || !password) {
    return Response.json({ message: "All fields are required.", success: false }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ message: "Enter a valid email address.", success: false }, { status: 400 });
  }

  if (password.length < 6) {
    return Response.json({ message: "Password must be at least 6 characters.", success: false }, { status: 400 });
  }

  const client = await clientPromise;
  const db = client.db("trimlinks");

  const existing = await db.collection("users").findOne({ email: email.toLowerCase() });
  if (existing) {
    return Response.json({ message: "An account with this email already exists.", success: false }, { status: 409 });
  }

  const hashedPassword = bcrypt.hashSync(password, 12);

  await db.collection("users").insertOne({
    name: name.trim(),
    email: email.toLowerCase(),
    password: hashedPassword,
    emailVerified: null,
    image: null,
    createdAt: new Date(),
  });

  return Response.json({ message: "Account created successfully.", success: true }, { status: 201 });
}
