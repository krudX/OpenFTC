import Image from 'next/image'
import Link from 'next/link'

import { FaFacebookF, FaTwitter, FaGithub,FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer-wrapper'>

      <section className="newsletter w-full px-12 py-16 grid items-center md:grid-cols-2 gap-10" style={{backgroundImage: 'url("/bg_newsletter.png")'}}>
        <div className="col-title">
          <h2 className="title text-3xl font-bold text-white">Stay in the loop</h2>
          <p className="desc text-text pt-2">Join our newsletter to get top news before anyone else.</p>
        </div>
        <div className="col-form">
          <form action="" className='flex flex-col md:flex-row gap-2'>
            <input type="email" name='email' placeholder='Enter your email...' className='py-3 px-4 bg-accent-dark-purple border border-accent-light-purple w-full rounded-sm placeholder:text-opacity-60' />
            <button className='py-3 px-8 bg-text rounded-sm text-accent-purple w-full md:w-auto'>Subscribe</button>
          </form>
        </div>
      </section>

      <footer className='my-16'>
        <div className="footer-grid grid md:grid-cols-5 gap-8">
          <div className="footer-col col-span-2">
            <Image src="/logo.svg" width={32} height={32} alt='Open Landing Page' />
            <p className="footer-desc text-text-light pt-4">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          </div>

          <div className="footer-col">
            <h4 className="col-title text-sm text-text pb-2">Products</h4>
            <div className="menu-links text-text-light text-sm grid gap-1">
              <Link href="/">Web Studio</Link>
              <Link href="/">DynamicBox Flex</Link>
              <Link href="/">Programming Forms</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-title text-sm text-text pb-2">Resources</h4>
            <div className="menu-links text-text-light text-sm grid gap-1">
              <Link href="/">Nostrud exercitation</Link>
              <Link href="/">Visual Mockups</Link>
              <Link href="/">Nostrud exercitation</Link>
              <Link href="/">Visual Mockups</Link>
              <Link href="/">Nostrud exercitation</Link>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="col-title text-sm text-text pb-2">Company</h4>
            <div className="menu-links text-text-light text-sm grid gap-1">
              <Link href="/">Consectetur adipiscing</Link>
              <Link href="/">Labore et dolore</Link>
              <Link href="/">Consectetur adipiscing</Link>
              <Link href="/">Labore et dolore</Link>
              <Link href="/">Consectetur adipiscing</Link>
            </div>
          </div>

        </div>

        <div className="footer-bottom flex flex-col md:flex-row items-center justify-between gap-4 pt-12">
          <p className="copyright text-text-light text-sm">Made by <Link href="/" className='text-text'>Cruip</Link>. All right reserved</p>
          <div className="social-links flex items-center gap-4">
            <Link href="/" className='p-2 bg-dark-gray rounded-full'><FaTwitter className='text-base text-accent-purple' /></Link>
            <Link href="/" className='p-2 bg-dark-gray rounded-full'><FaGithub className='text-base text-accent-purple' /></Link>
            <Link href="/" className='p-2 bg-dark-gray rounded-full'><FaFacebookF className='text-base text-accent-purple' /></Link>
            <Link href="/" className='p-2 bg-dark-gray rounded-full'><FaInstagram className='text-base text-accent-purple' /></Link>
            <Link href="/" className='p-2 bg-dark-gray rounded-full'><FaLinkedin className='text-base text-accent-purple' /></Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer