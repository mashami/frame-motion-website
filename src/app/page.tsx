"use client"

import { DigitalSection } from "@/components/DigitalSection"
import { NavBar } from "@/components/NavBar"
import OurStorrySection from "@/components/OurStorrySection/OurStorrySection"
import { PlayRealSection } from "@/components/PlayRealSection"
import { SpreadTheNewsSection } from "@/components/SpreadTheNewsSection"
import { WorkSection } from "@/components/WorkSection"
import { motion, useScroll } from "framer-motion"
import { useRef } from "react"

export default function Home() {
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 1000, rotate: 4 }}
      // transition={{ duration: 1, ease: "easeInOut" }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      className="relative"
      ref={containerRef}
      style={{
        transition: "transform 0.6s cubic-bezier(0.61, 1, 0.88, 1)"
      }}
    >
      <motion.div
        initial={{ opacity: 0, x: -120 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
        animate={{ opacity: 1, x: 0 }}
        className="fixed top-8 right-14 left-14 z-50"
      >
        <NavBar scrollYProgress={scrollYProgress} />
      </motion.div>
      <div className="relative">
        <DigitalSection />
      </div>

      <div className="">
        <WorkSection />
      </div>
      <div>
        <PlayRealSection />
        {/* <StickyCursor ref={containerRef} text={"Play"} /> */}
      </div>
      <div>
        <SpreadTheNewsSection />
      </div>
      <div>
        <OurStorrySection />
      </div>
    </motion.div>
  )
}
