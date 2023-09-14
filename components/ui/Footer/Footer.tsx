import Link from 'next/link';

import Logo from '@/components/icons/Logo';
import GitHub from '@/components/icons/GitHub';
import TwitterLogo from '@/components/socials/TwitterLogo';
import InstagramLogo from '@/components/socials/InstagramLogo';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1920px] px-6">
      <div className="grid grid-cols-1 gap-8 py-12  transition-colors duration-150 border-b lg:grid-cols-12 border-zinc-600">
        <div className="col-span-1 lg:col-span-2">
          <Link
            href="/"
            className="flex items-center flex-initial font-bold md:mr-24"
          >
            <span className="mr-2 border rounded-full border-zinc-700">
              <Logo />
            </span>
            <div className='flex items-center'>
              <span className='font-semibold text-blue9'>Then</span>
              <span className='font-semibold text-red9'>Pixels</span>
            </div>
          </Link>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
              
                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Home
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
              
                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                About
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
              
                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                What we offer
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
              
                href="/"
                className="transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="col-span-1 lg:col-span-2">
          <ul className="flex flex-col flex-initial md:flex-1">
            <li className="py-3 md:py-0 md:pb-4">
              <p className="font-bold transition duration-150 ease-in-out hover:text-zinc-200">
                LEGAL
              </p>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Privacy Policy
              </Link>
            </li>
            <li id='custom-text' className="py-3 md:py-0 md:pb-4">
              <Link
                href="/"
                className=" transition duration-150 ease-in-out hover:text-zinc-200"
              >
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-between py-12 space-y-4 md:flex-row">
        <div>
          <span id='custom-text' className='text-sm'>
            &copy; {new Date().getFullYear()} ThenPixels LLC All rights reserved.
          </span>
        </div>
        {/* <div className="flex items-center">
          <span className="">Crafted by</span>
          <a href="https://vercel.com" aria-label="Vercel.com Link">
            <img
              src="/vercel.svg"
              alt="Vercel.com Logo"
              className="inline-block h-6 ml-4 "
            />
          </a>
        </div> */}
        <div className="flex gap-2 items-center">
          <Link href='https://x.com/thenpixels' aria-label='thenpixels x link'>
            <TwitterLogo />
          </Link>
          <Link href='https://instagram.com/thenpixels' aria-label='thenpixels instagram link'>
            <InstagramLogo />
          </Link>
        </div>
      </div>
    </footer>
  );
}
