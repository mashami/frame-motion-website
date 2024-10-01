"use client"

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import { useRef, useState } from "react"
import { Video } from "../Video"

const WorkSection = () => {
  const container = useRef<HTMLDivElement>(null)
  const ref = useRef(null)

  const [isHover, setIsHover] = useState<boolean>(false)

  const [isTextHovered, setIsTextHovered] = useState<boolean>(false)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"]
  })

  const translate = useTransform(scrollYProgress, [0, 0.7], [800, 0])
  const rotate = useTransform(scrollYProgress, [0, 0.7], [15, 0])

  return (
    <div
      ref={container}
      className="relative w-full h-full bg-white py-44 pl-44 pr-20 space-y-12  overflow-hidden"
    >
      <motion.h1
        style={{
          y: translate,
          rotate: rotate
        }}
        // viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="text-black text-[250px] font-medium"
      >
        Work
      </motion.h1>
      <div className="flex gap-32 w-full">
        {/* <div> */}
        <Video
          height="750px"
          width="1500px"
          imageUrl="image1.webp"
          videoUrl="Video1.mp4"
        />

        {/* </div> */}

        <div>
          <div className="space-y-[32px]">
            <span className="flex items-center space-x-4">
              <svg
                viewBox="0 0 12 12"
                fill="black"
                xmlns="http://www.w3.org/2000/svg"
                width={10}
                height={10}
                className="icon"
                data-v-669b4a84
              >
                <path
                  d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                  fill="black"
                  data-v-669b4a84
                />
              </svg>

              <p className="text-black text-lg font-light">Featured Projects</p>
            </span>

            <p className="text-black text-[25px] font-light">
              Highlights of cases that we passionately built with
              forward-thinking clients and friends over the years.
            </p>
          </div>

          <div className="pt-[250px]">
            <Video
              height="450px"
              width="100%"
              imageUrl="image2.webp"
              videoUrl="Video2.mp4"
            />
            {/* <StickyCursor ref={mouseRef} text={"View"} /> */}
          </div>
        </div>
      </div>
      <div className="h-[750px] w-full flex gap-28 pt-20 pl-20">
        <motion.div className="flex self-end">
          <Video
            className="relative"
            height="300px"
            width="250px"
            imageUrl="image4.webp"
            videoUrl="Video4.mp4"
          />
        </motion.div>

        <div className="relative flex flex-col group">
          <motion.div
            ref={ref}
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
          >
            <Video
              className="self-start"
              height="580px"
              width="470px"
              imageUrl="Image3.webp"
              videoUrl="video3.mp4"
            />
          </motion.div>
          <span className="h-[30px] w-full flex items-center overflow-hidden mt-1.5">
            <AnimatePresence>
              {isHover && (
                <motion.span
                  initial={{ y: 40, rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  exit={{
                    y: -43,
                    rotate: -7,
                    x: 3,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ duration: 0.8 }}
                  className="text-black translate-y-10 flex items-center space-x-3"
                >
                  <p> Luxurious design experience</p>
                  <svg width={4} height={2} className="bg-black">
                    ----
                  </svg>
                  <p className="font-light text-">Mashami paccy</p>
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </div>
      </div>
      <div className="w-full pr-[260px] flex items-center justify-end ">
        <motion.div
          onHoverStart={() => setIsTextHovered(true)}
          onHoverEnd={() => setIsTextHovered(false)}
          className="flex items-center space-x-2 cursor-pointer h-[40px] w-fit"
        >
          <motion.div
            initial={{
              width: 10,
              height: 10,
              background: "black",
              border: "0.5px solid black",
              borderRadius: 32
            }}
            animate={
              isTextHovered
                ? {
                    width: 32,
                    height: 32,
                    background: "black",
                    border: "0.5px solid black",
                    borderRadius: 32,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }
                : {
                    width: 8,
                    height: 8,
                    background: "white",
                    border: "0.5px solid black",
                    borderRadius: 32,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }
            }
            className="flex flex-shrink-0 items-center justify-center "
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
                  fill="white"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z" />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.span className="flex flex-col overflow-hidden">
            <p className="text-black text-base font-light flex flex-shrink-0 w-fit">
              Browse all work
            </p>
            <AnimatePresence>
              {isTextHovered && (
                <motion.span
                  initial={{ opacity: 0, x: 120 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: 120,
                    transition: { duration: 0.5, ease: "easeInOut" }
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="w-full h-[1px] bg-black"
                ></motion.span>
              )}
            </AnimatePresence>
          </motion.span>
        </motion.div>
      </div>
    </div>
  )
}

export default WorkSection
