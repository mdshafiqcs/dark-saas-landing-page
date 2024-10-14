import {InstaIcon, XSocialIcon, TiktokIcon, YoutubeIcon } from "@/assets/icons";



export const Footer = () => {
  return <footer className='bg-black py-5 text-white/60 border-t border-white/20'>
    <div className='container'>
      <div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>

        <div className='text-center'>
          &copy; {new Date().getFullYear()} Your company, Inc. All rights reserved.
        </div>

        <ul className='flex justify-center gap-2.5'>
          <li> <XSocialIcon /> </li>
          <li> <InstaIcon /> </li>
          <li> <TiktokIcon /> </li>
          <li> <YoutubeIcon /> </li>
        </ul>
      </div>
    </div>
  </footer>
};
