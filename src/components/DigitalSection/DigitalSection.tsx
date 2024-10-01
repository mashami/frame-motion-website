/* eslint-disable jsx-a11y/alt-text */
"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { StickyCursor } from "../StickyCursor"

const DigitalSection = () => {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const fastY = useTransform(scrollYProgress, [0, 1], [450, -300])

  return (
    <>
      <section className="h-[170vh] overflow-hidden" ref={ref}>
        <div className="relative w-full h-[250vh] -z-0">
          <Image
            alt="Image"
            src={"/backgroundImage1.webp"}
            fill
            style={{ objectFit: "fill" }}
          />
        </div>

        <motion.div
          style={{ y: fastY }}
          className="absolute top-0 left-[100px] space-y-14"
        >
          <div className="w-[500px] flex flex-wrap">
            <p className="text-2xl font-light select-none">
              Global digital design studio partnering with brands and businesses
              that create exceptional experiences where people live, work, and
              unwind.{" "}
            </p>
          </div>
          <div className="flex flex-wrap">
            <h1 className="text-[250px] leading-[240px] select-none ">
              Digital Design Experience
            </h1>
          </div>
          s
          <div className="space-y-12 w-full">
            <div className="w-[500px] flex flex-wrap">
              <p className="text-2xl font-light select-none">
                We help experience-driven companies thrive by making their
                audience feel the refined intricacies of their brand and product
                in the digital space. Unforgettable journeys start with a click.
              </p>
            </div>
            <div className="flex items-center justify-between pr-40 w-full">
              <p className="underline">The studio</p>
              <div className="flex items-start space-x-28">
                <ul>
                  <li>Work</li>
                  <li>Studio</li>
                  <li>News</li>
                  <li>Contact</li>
                </ul>

                <ul>
                  <li>Hello@exoape.com</li>
                  <li>+25073 324 233</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <StickyCursor ref={ref} text={"Scroll"} />
    </>
  )
}

export default DigitalSection
