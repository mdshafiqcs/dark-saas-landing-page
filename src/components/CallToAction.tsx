"use client";

import { helixImage, emojiStarImage } from "@/assets/images";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const CallToAction = () => {

  const containerRef = useRef<HTMLDivElement>(null);

  const {scrollYProgress} = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0,1], [40, -40]);


  return <div ref={containerRef} className='bg-black text-white text-center py-[72px] sm:py[24] overflow-x-clip '>
    <div className='container max-w-xl relative'>
      <motion.div style={{ translateY }}>
        <Image src={helixImage} alt="helix image" width={200} height={200} className='absolute top-6 left-[calc(100%+36px)] ' />
      </motion.div>
      <motion.div style={{ translateY }}>
        <Image src={emojiStarImage} alt="emoji star image" width={225} height={225} className='absolute -top-[120px] right-[calc(100%+24px)] rotate-12 ' />
      </motion.div>

      <h2 className='text-5xl sm:text-6xl font-bold tracking-tighter'>Get instant access</h2>
      <p className='text-xl text-white/70 mt-5'>Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.</p>
      
      <form className='mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row'>
        <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] sm:flex-1" />
        <button className="bg-white text-black h-12 px-5 rounded-lg">Get access</button>
      </form>
    </div>
  </div>
};
