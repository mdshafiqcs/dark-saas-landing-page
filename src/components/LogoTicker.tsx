"use client";
import acmeLogo from "../assets/images/acme.png";
import quantumLogo from "../assets/images/quantum.png";
import echoLogo from "../assets/images/echo.png";
import celestialLogo from "../assets/images/celestial.png";
import pulseLogo from "../assets/images/pulse.png";
import apexLogo from "../assets/images/apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: acmeLogo, alt: "Acme Logo" },
  { src: quantumLogo, alt: "Quantum Logo" },
  { src: echoLogo, alt: "Echo Logo" },
  { src: celestialLogo, alt: "Celestial Logo" },
  { src: pulseLogo, alt: "Pulse Logo" },
  { src: apexLogo, alt: "Apex Logo" },
];

export const LogoTicker = () => {
  return <div className='bg-black text-white py-[72px] sm:py-24 '>
    <div className='container'>
      <h2 className='text-xl text-center text-white/70'>Trusted by the world's most innovative teams</h2>

      <div className="flex overflow-hidden mt-9 before:content-[''] after:content-[''] before:absolute after:absolute before:h-full after:h-full before:w-5 after:w-5 relative before:left-0 after:right-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,black,transparent)] before:z-10 after:bg-[linear-gradient(to_left,black,transparent)] ">
        <motion.div 
        className='flex gap-16 flex-none pr-16 '
        initial={{ translateX: 0 }}
        animate={{ translateX: "-50%" }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
        >
          {
            images.concat(images).map(({src, alt}, index) => (
              <Image src={src} alt={alt} key={index} className='flex-none h-8 w-auto ' />
            ))
          }

          {
            images.concat(images).map(({src, alt}, index) => (
              <Image src={src} alt={alt} key={index} className='flex-none h-8 w-auto ' />
            ))
          }
        </motion.div>
      </div>
    </div>
  </div>;
};
