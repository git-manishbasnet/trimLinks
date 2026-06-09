import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/";

  return (
    <nav className='min-h-16 text-white flex flex-wrap items-center gap-4 px-4 py-3 justify-between bg-indigo-700'>
      <div className='font-bold'>
        <Link href="/">TrimLinks</Link>
        
      </div>
      <ul className='flex flex-wrap gap-4 items-center justify-center text-sm sm:text-base'>
        <Link href="/"><li>Home</li></Link>
        <Link href="/about"><li>About</li></Link>
        <Link href="/shorten"><li>Shortener</li></Link>
        <Link href="/contact"><li>Contact Us</li></Link>
        <li className='flex gap-3'>
          <Link href="/shorten"><button className='bg-indigo-500 rounded-lg shadow-2xl font-bold py-1 p-3'>Try Now</button></Link>
          <Link href={githubUrl} target="_blank" rel="noopener noreferrer"><button className='bg-indigo-500 rounded-lg shadow-2xl font-bold py-1 p-3'>Github</button></Link>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar 
