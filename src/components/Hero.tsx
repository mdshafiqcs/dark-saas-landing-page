"use client";

import { ArrowWIcon } from "@/assets/icons";
import {cursorImage, messageImage } from "@/assets/images";
import Image from "next/image";
import { motion } from "framer-motion";


export const Hero = () => {
  return <div className="bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24 relative overflow-clip ">
    <div className="absolute h-[375px] w-[750px] sm:h-[768px] sm:w-[1536px] lg:h-[1200px] lg:w-[2400px]  xl:w-[3200px] rounded-[100%] left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)] "></div>
    <div className='container relative'>
      <div className='flex items-center justify-center'>
        <a href="#" className='inline-flex gap-3 py-1 px-2 rounded-lg border border-white/30'>
          <span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)] text-transparent bg-clip-text [-webkit-background-clip:text] '>Version 2.0 is here</span>
          <span className='inline-flex gap-1 items-center'>
            <span>Read more</span>
            <ArrowWIcon className='text-white w-4 h-4' />
          </span>
        </a>
      </div>

      <div className='flex justify-center mt-8'>
        <div className='inline-flex relative'>
          <h1 className='text-7xl sm:text-9xl inline-flex font-bold tracking-tighter text-center'>One Task<br/>at a Time</h1>
          
          <motion.div
            className="absolute right-[476px] top-[108px] hidden sm:inline"
            drag
            dragSnapToOrigin
          >
            <Image src={cursorImage} height={200} width={200} alt="cursor image" className=" max-w-none " draggable={false} />
          </motion.div>
          
          <motion.div
            className="absolute top-[56px] left-[498px] hidden sm:inline"
            drag
            dragSnapToOrigin
          >
          <Image src={messageImage} height={200} width={200} alt="message image" className=" max-w-none " draggable={false} />
          </motion.div>
        </div>
      </div>
      <div className='flex justify-center'>
        <p className='mt-8 text-center text-xl max-w-md'>Celebrate the joy of accomplishment with an app designed to track your progress, motivate your efforts, and celebrate your successes.</p>

      </div>
      <div className='mt-8 flex justify-center'>
        <button className='bg-white text-black font-medium py-3 px-5 rounded-lg'>Get for free</button>
      </div>
    </div>
    
  </div>
};
