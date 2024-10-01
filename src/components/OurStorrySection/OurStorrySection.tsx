"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

const OurStorrySection = () => {
  const [isTextHovered, setIsTextHovered] = useState<boolean>(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const container = useRef(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `start start`]
  })

  const scale = useTransform(scrollYProgress, [0, 0.7], [-200, 0])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current) {
          videoRef.current.play()
        } else {
          videoRef.current?.pause()
        }
      },
      { threshold: 0.1 }
    )

    if (container.current) {
      observer.observe(container.current)
    }

    return () => {
      if (container.current) {
        observer.unobserve(container.current)
      }
    }
  }, [])

  return (
    <section
      ref={container}
      className="bg-black w-screen h-screen overflow-hidden"
    >
      <motion.div
        style={{
          y: scale
        }}
      >
        <div className="flex items-center w-full space-x-1">
          <div className="pl-16 w-[38%] space-y-16">
            <p className="text-[#e0ccbb] text-[113px] leading-[100px]">
              Our Story
            </p>

            <p className="text-[#e0cdbdcc] text-[22.4px]">
              The storry behind Exo Ape is one of exploration, creativity and
              curiosity.
            </p>
          </div>
          <div className="w-[100%] h-[500px] overflow-hidden">
            <video
              ref={videoRef}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              playsInline
              loop
              muted
              src="/video-6.mp4"
              className="bg-transparent"
            />
          </div>
        </div>

        <div className="px-16 pt-12">
          <div className="bg-[#e0ccbb] w-full h-[1px]"></div>

          <div className="pb-16 flex justify-between items-end pt-20">
            <div className="flex items-center space-x-40">
              <ul className="text-[#e0ccbb] text-base font-medium space-y-3">
                <li>Willem || Singel 8</li>
                <li>6041 HS, Roermond</li>
                <li>The Netherlands</li>
                <li>mashamipaccy04@gmail.com</li>
              </ul>

              <ul className="text-[#e0ccbb] text-base font-medium space-y-3">
                <li>Work</li>
                <li>Studio</li>
                <li>News</li>
                <li>Contact</li>
              </ul>

              <ul className="text-[#e0ccbb] text-base font-medium space-y-3">
                <li>Behance</li>
                <li>Dribbke</li>
                <li>Twitter</li>
                <li>Instagram</li>
              </ul>
            </div>

            <motion.div
              onHoverStart={() => setIsTextHovered(true)}
              onHoverEnd={() => setIsTextHovered(false)}
              className="flex items-center space-x-2 cursor-pointer h-[40px] w-fit"
            >
              <motion.div
                initial={{
                  width: 8,
                  height: 8,
                  background: "#e0ccbb",
                  border: "0.5px solid #e0ccbb",
                  borderRadius: 32
                }}
                animate={
                  isTextHovered
                    ? {
                        width: 32,
                        height: 32,
                        background: "#e0ccbb",
                        border: "0.5px solid #e0ccbb",
                        borderRadius: 32,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }
                    : {
                        width: 8,
                        height: 8,
                        background: "black",
                        border: "0.5px solid #e0ccbb",
                        borderRadius: 32,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }
                }
                className="flex flex-shrink-0 items-center justify-center overflow-hidden"
              >
                <AnimatePresence>
                  {isTextHovered && (
                    <motion.svg
                      initial={{ x: -30 }}
                      animate={{ x: 0 }}
                      exit={{
                        x: -30,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={15}
                      fill="black"
                      viewBox="0 0 256 256"
                    >
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                    </motion.svg>
                  )}
                </AnimatePresence>
              </motion.div>
              <motion.span className="flex flex-col overflow-hidden">
                <p className="text-[#e0ccbb] text-base font-light flex flex-shrink-0 w-fit">
                  Our Story
                </p>
                <AnimatePresence>
                  {isTextHovered ? (
                    <motion.span
                      initial={{ opacity: 1, x: 0 }}
                      animate={{ opacity: 0, x: 120 }}
                      exit={{
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-[1px] bg-[#e0ccbb]"
                    ></motion.span>
                  ) : (
                    <motion.span
                      initial={{ opacity: 0, x: 120 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{
                        opacity: 0,
                        x: 120,
                        transition: { duration: 0.5, ease: "easeInOut" }
                      }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="w-full h-[1px] bg-[#e0ccbb]"
                    ></motion.span>
                  )}
                </AnimatePresence>
              </motion.span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default OurStorrySection
