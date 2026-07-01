'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/shorten', label: 'Shortener' },
  { href: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const pathname = usePathname()
  const { data: session, status } = useSession()
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/'
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  const linkClass = (href) =>
    pathname === href
      ? 'text-white font-semibold underline underline-offset-4 decoration-indigo-300'
      : 'text-indigo-100 hover:text-white transition-colors duration-200'

  return (
    <>
      <nav className='sticky top-0 z-50 min-h-16 bg-indigo-700 text-white'>
        <div className='flex items-center justify-between px-4 py-3'>

          {/* Logo */}
          <div className='font-bold text-lg'>
            <Link href='/'>TrimLinks</Link>
          </div>

          {/* Desktop nav */}
          <ul className='hidden md:flex items-center gap-5 text-sm'>
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} className={linkClass(href)}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Desktop actions */}
          <div className='hidden md:flex items-center gap-3'>
            <Link href='/shorten'>
              <button className='bg-indigo-500 rounded-lg font-bold py-1.5 px-3 text-sm hover:bg-indigo-400 transition-colors duration-200'>
                Try Now
              </button>
            </Link>
            <Link href={githubUrl} target='_blank' rel='noopener noreferrer'>
              <button className='bg-indigo-500 rounded-lg font-bold py-1.5 px-3 text-sm hover:bg-indigo-400 transition-colors duration-200'>
                GitHub
              </button>
            </Link>

            {status === 'loading' ? (
              <div className='h-8 w-8 animate-pulse rounded-full bg-indigo-500' />
            ) : session ? (
              <div className='flex items-center gap-2'>
                <Link href='/dashboard' className={`text-sm ${linkClass('/dashboard')}`}>
                  Dashboard
                </Link>
                {session.user?.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name ?? 'User'}
                    width={30}
                    height={30}
                    className='rounded-full ring-2 ring-indigo-300'
                  />
                )}
                <button
                  onClick={() => signOut({ callbackUrl: '/' })}
                  className='rounded-lg bg-indigo-500 px-3 py-1.5 text-sm font-bold hover:bg-indigo-400 transition-colors duration-200'
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Link href='/login'>
                <button className='rounded-lg bg-white px-3 py-1.5 text-sm font-bold text-indigo-700 hover:bg-indigo-50 transition-colors duration-200'>
                  Sign in
                </button>
              </Link>
            )}
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setSidebarOpen(true)}
            className='md:hidden flex flex-col justify-center items-center gap-1.5 p-2 rounded-lg hover:bg-indigo-600 transition-colors'
            aria-label='Open menu'
          >
            <span className='block h-0.5 w-6 bg-white rounded' />
            <span className='block h-0.5 w-6 bg-white rounded' />
            <span className='block h-0.5 w-6 bg-white rounded' />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {sidebarOpen && (
        <div
          className='fixed inset-0 z-50 bg-black/40 backdrop-blur-sm md:hidden'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-indigo-800 text-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out md:hidden ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar header */}
        <div className='flex items-center justify-between px-5 py-4 border-b border-indigo-700'>
          <span className='font-bold text-lg'>TrimLinks</span>
          <button
            onClick={() => setSidebarOpen(false)}
            className='p-2 rounded-lg hover:bg-indigo-700 transition-colors'
            aria-label='Close menu'
          >
            <svg className='h-5 w-5' fill='none' stroke='currentColor' strokeWidth={2} viewBox='0 0 24 24'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>

        {/* User info */}
        {session && (
          <div className='flex items-center gap-3 px-5 py-4 border-b border-indigo-700 bg-indigo-900/40'>
            {session.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name ?? 'User'}
                width={38}
                height={38}
                className='rounded-full ring-2 ring-indigo-400'
              />
            )}
            <div className='min-w-0'>
              <p className='font-semibold text-sm truncate'>{session.user.name}</p>
              <p className='text-xs text-indigo-300 truncate'>{session.user.email}</p>
            </div>
          </div>
        )}

        {/* Nav links */}
        <nav className='flex-1 overflow-y-auto px-4 py-5'>
          <ul className='flex flex-col gap-1'>
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              )
            })}

            {session && (
              <li>
                <Link
                  href='/dashboard'
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    pathname === '/dashboard'
                      ? 'bg-indigo-600 text-white'
                      : 'text-indigo-100 hover:bg-indigo-700 hover:text-white'
                  }`}
                >
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          <div className='mt-4 flex flex-col gap-3 border-t border-indigo-700 pt-4'>
            <Link href='/shorten' onClick={() => setSidebarOpen(false)} className='flex items-center justify-center rounded-xl bg-indigo-500 py-3 text-sm font-bold hover:bg-indigo-400 transition-colors'>
              Try Now
            </Link>
            <Link href={githubUrl} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center rounded-xl bg-indigo-700 py-3 text-sm font-bold hover:bg-indigo-600 transition-colors'>
              GitHub
            </Link>
          </div>
        </nav>

        {/* Sign in / out at bottom */}
        <div className='px-4 py-5 border-t border-indigo-700'>
          {status === 'loading' ? (
            <div className='h-10 animate-pulse rounded-xl bg-indigo-700' />
          ) : session ? (
            <button
              onClick={() => signOut({ callbackUrl: '/' })}
              className='w-full rounded-xl bg-red-500/20 py-3 text-sm font-bold text-red-300 hover:bg-red-500/30 transition-colors'
            >
              Sign out
            </button>
          ) : (
            <div className='flex flex-col gap-2'>
              <Link href='/login' onClick={() => setSidebarOpen(false)} className='flex items-center justify-center rounded-xl bg-white py-3 text-sm font-bold text-indigo-700 hover:bg-indigo-50 transition-colors'>
                Sign in
              </Link>
              <Link href='/signup' onClick={() => setSidebarOpen(false)} className='flex items-center justify-center rounded-xl border border-indigo-500 py-3 text-sm font-bold text-indigo-200 hover:bg-indigo-700 transition-colors'>
                Sign up
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
