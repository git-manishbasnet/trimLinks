import Link from 'next/link'

const Footer = () => {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/"

  return (
    <footer className="bg-indigo-700 text-white mt-auto">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold">TrimLinks</p>
            <p className="mt-2 text-sm text-indigo-200">
              Short links that are clean, custom, and easy to share.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-indigo-300 mb-3">Navigation</p>
            <ul className="space-y-2 text-sm text-indigo-100">
              <li><Link href="/" className="hover:text-white transition">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/shorten" className="hover:text-white transition">Shortener</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-semibold text-sm uppercase tracking-wider text-indigo-300 mb-3">Links</p>
            <ul className="space-y-2 text-sm text-indigo-100">
              <li>
                <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </Link>
              </li>
              <li>
                <Link href="/shorten" className="hover:text-white transition">
                  Try Now
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-indigo-600 pt-6 text-center text-sm text-indigo-300">
          &copy; 2024–present TrimLinks. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
