import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='full-width sticky top-0 z-50 backdrop-blur-sm'>
      <div className="navbar-wrapper py-5 flex items-center justify-between">
          <Link href="/" className="logo-wrapper">
              <Image src="/logo.svg" height={32} width={32} alt="One Landing Page" priority />
          </Link>

          <nav className="nav-menu flex items-center gap-10">
              <Link href="/" className='text-accent-purple'>Sign in</Link>
              <Link href="/" className='text-text bg-accent-purple py-2 px-5 rounded-sm'>Sign up</Link>
          </nav>
      </div>
    </header>
  )
}

export default Navbar