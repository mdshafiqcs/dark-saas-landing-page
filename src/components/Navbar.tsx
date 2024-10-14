import { logo } from "@/assets/images";
import Image from "next/image";
import { MenuIcon } from "@/assets/icons";

export const Navbar = () => {
  return <section className='bg-black'>
    <div className="px-4 ">
    <div className='py-4 flex items-center justify-between'>
      <div className='relative'>
        <div className='absolute w-full top-2 bottom-0 bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] blur-md'></div>
        <Image src={logo} alt="SaaS Logo" className="h-12 w-12 relative" />
      </div>
      <div className='border border-white border-opacity-30 w-10 h-10 rounded-lg inline-flex justify-center items-center sm:hidden'>
        <MenuIcon className="h-6 w-6 text-white" />
      </div>
      <nav className=" hidden sm:flex items-center gap-6 ">
        <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">About</a>
        <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Features</a>
        <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Updates</a>
        <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Help</a>
        <a href="#" className="text-white text-opacity-60 hover:text-opacity-100 transition">Customers</a>
        <button className='bg-white py-2 px-4 rounded-lg '>Get for free</button>
      </nav>
    </div>
  </div>
  </section>
};
