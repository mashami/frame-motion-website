"use client"
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

const SpreadTheNewsSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoRef2 = useRef<HTMLVideoElement>(null)
  const container = useRef(null)
  const [isTextHovered, setIsTextHovered] = useState<boolean>(false)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", `end end`]
  })

  const scaleRightImage = useTransform(scrollYProgress, [0, 1], [830, 1000])
  const scaleVideoLeft = useTransform(scrollYProgress, [0, 1], [270, 100])
  const scaleImageLeft = useTransform(scrollYProgress, [0, 1], [500, -100])
  const scaleVideoRight = useTransform(scrollYProgress, [0, 1], [750, 1200])
  const scaleFooter = useTransform(scrollYProgress, [0, 1], [500, -100])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoRef.current && videoRef2.current) {
          videoRef.current.play()
          videoRef2.current.play()
        } else {
          videoRef.current?.pause()
          videoRef2.current?.pause()
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
      className="h-[200vh] w-screen overflow-hidden bg-white relative"
    >
      <div className="absolute w-[350px] h-[700px] top-[290px] right-1/2 translate-x-1/2">
        <Image
          alt="image"
          src={"/image7.webp"}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>

      <motion.div
        className="absolute z-50  w-[390px] h-[200px]"
        style={{
          x: scaleVideoLeft,
          y: 500
        }}
      >
        <video
          ref={videoRef}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          playsInline
          loop
          muted
          src="/follower.mp4"
        />
      </motion.div>

      <motion.div
        className="absolute z-50 w-[160px] h-[230px] "
        style={{
          x: scaleRightImage,
          y: 340
        }}
      >
        <Image
          alt="image"
          src={"/image5.webp"}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      <motion.div
        className="absolute z-20  w-[360px] h-[380px]"
        style={{
          x: scaleVideoRight,
          y: 740
        }}
      >
        <video
          ref={videoRef2}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          playsInline
          loop
          muted
          src="/pelle.mp4"
        />
      </motion.div>

      <motion.div
        className="absolute z-20  w-[390px] h-[240px]"
        style={{
          x: scaleImageLeft,
          y: 800
        }}
      >
        <Image
          alt="image"
          src={"/image6.webp"}
          fill
          style={{ objectFit: "cover" }}
        />
      </motion.div>

      <motion.div
        style={{
          y: scaleFooter,
          x: "50%"
        }}
        className="absolute bottom-0 right-1/2 translate-x-1/2 flex flex-col items-center space-y-5 w-[800px] mx-auto"
      >
        <span className="flex items-center space-x-4 ">
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

          <p className="text-black text-lg font-normal">In the media</p>
        </span>

        <p className="text-[120px] text-black text-center font-medium leading-[120px]">
          Spread the news
        </p>

        <div className="w-[500px] mx-auto grid place-items-center space-y-4">
          <p className="text-[28px] text-[#0D0E13] text-center">
            Find out more about our work on these leading design and technology
            platforms.
          </p>

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
                Browse all news
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
                    className="w-full h-[1px] bg-black"
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
                    className="w-full h-[1px] bg-black"
                  ></motion.span>
                )}
              </AnimatePresence>
            </motion.span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default SpreadTheNewsSection
