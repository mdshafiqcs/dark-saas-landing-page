"use client";

import React, { FC, useEffect, useRef } from 'react'
import { EchoSystemIcon } from "@/assets/icons";
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

interface FeatureProps {
  title: string, 
  description: string
}

const Feature: FC<FeatureProps> = ({title, description}) => {

  const borderRef = useRef<HTMLDivElement>(null);

  const offsetX = useMotionValue(-100);
  const offsetY = useMotionValue(-100);
  const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      if(!borderRef.current) return;

      const borderRect = borderRef.current.getBoundingClientRect();
      
      offsetX.set(e.clientX - borderRect.x);
      offsetY.set(e.clientY - borderRect.y);

    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    }
  })


  return <div key={title} className='border border-white/30 px-5 py-10 text-center rounded-xl flex-1 relative'>
  
  <motion.div 
  ref={borderRef}
  className='absolute inset-0 border-2 border-purple-400 rounded-lg'
  style={{ 
    maskImage: maskImage, 
    WebkitMaskImage: maskImage 
  }}
  ></motion.div>

  <div className='inline-flex mx-auto h-14 w-14 bg-white text-black justify-center items-center rounded-lg'>
    <EchoSystemIcon/>
  </div>
  <h3 className='mt-6 font-bold'>{title}</h3>
  <p className='mt-2 text-white/70'>{description}</p>
  
</div>
}

export default Feature