import clientPromise from "@/lib/mongodb";


export async function POST(request) {
  const body= await request.json();
  const url = body.url?.trim();
  const shortUrl = body.shortUrl?.trim().toLowerCase();

  if (!url || !shortUrl) {
    return Response.json({ message: "URL and short text are required", success: false, error: true }, { status: 400 });
  }

  if (!/^https?:\/\//i.test(url)) {
    return Response.json({ message: "Please enter a URL that starts with http:// or https://", success: false, error: true }, { status: 400 });
  }

  if (!/^[a-z0-9-]+$/.test(shortUrl)) {
    return Response.json({ message: "Short text can only use lowercase letters, numbers, and hyphens", success: false, error: true }, { status: 400 });
  }
  
  const client=await clientPromise;
  const db=client.db("trimlinks");
  const collection=db.collection("url");

    //check if the shortUrl already exists in the database
    const doc= await collection.findOne({shortUrl})
    if(doc){
      return Response.json({ message: "Short URL already exists" , success:false, error:true, }, { status: 409 })
    }

  const result = await collection.insertOne({
    url,
    shortUrl,
  })

  return Response.json({ message: "URL generated successfully" , success:true, error:false, shortUrl, id: result.insertedId })
}
// {
//     "url":"https://google.com",
//     "shortUrl":"google"
// }
