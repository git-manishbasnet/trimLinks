import Image from "next/image";
import localFont from "next/font/local"
import Link from "next/link";

const poppins = localFont({
  src:"./fonts/Poppins-ExtraBold.ttf",
  variable: "--font-poppins",
  subsets: ["latin"],
});

export default function Home() {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/";

  return (
    <main>
     <section className="flex flex-col-reverse items-center gap-10 bg-blue-100 px-6 py-16 md:flex-row md:justify-between md:px-24 lg:px-40">
      <div className="justify-center items-center flex flex-col gap-4 ml-20  ">
        <p className={`text-4xl font-extrabold ${poppins.className}`}>The best trending URL Shortner</p>
        <p className="text-xl text-center">We are the most straight-forward URL Shortner. </p>
        <div className='flex gap-3'>
          <Link href="/shorten"><button className='bg-indigo-500 rounded-lg shadow-2xl font-bold py-1 p-3 text-white'>Try Now</button></Link>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer"><button className='bg-indigo-500 rounded-lg shadow-2xl font-bold py-1 p-3 text-white'>Github</button></Link>
        </div>
      </div>
      
<Image className="mix-blend-darken" alt="an Image of a vector" src={"/images.png"} width={500} height={500}/>
     
     </section>
    </main>
  );
}
