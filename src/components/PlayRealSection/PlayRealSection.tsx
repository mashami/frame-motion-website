"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"
import styles from "./styles.module.scss"

const PlayRealSection = () => {
  const container = useRef(null)

  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", `end end`]
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 4])

  const text1Scale = useTransform(scrollYProgress, [0, 1], [150, 350])
  const text2Scale = useTransform(scrollYProgress, [0, 1], [1000, 700])
  const headerScale = useTransform(scrollYProgress, [0, 1], [-9, 1620])
  const footerScale = useTransform(scrollYProgress, [0, 1], [-1640, -80])

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
    <section ref={container} className={styles.container}>
      <motion.div
        style={{ zIndex: "1000", y: headerScale }}
        className={"absolute top-[2.5rem] w-full"}
      >
        <div className="flex items-center justify-center gap-2">
          <svg
            viewBox="0 0 12 12"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            width={10}
            height={10}
            className="icon"
            data-v-669b4a84
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="white"
              data-v-669b4a84
            />
          </svg>
          <p className="text-white text-sm font-light">Work in motion</p>
        </div>
      </motion.div>
      <div className={styles.sticky}>
        <motion.p
          style={{
            x: text1Scale,
            zIndex: 1000
          }}
          className="text-white absolute top-[250px] translate-x-1/2 text-[180px]"
        >
          Play
        </motion.p>

        <motion.div style={{ scale }} className={styles.el}>
          <div className={styles.videoContainer}>
            <video
              ref={videoRef}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              playsInline
              loop
              muted
              src="/zoomVideo.mp4"
            />
          </div>
        </motion.div>

        <motion.p
          style={{
            x: text2Scale,
            zIndex: 1000
          }}
          className="text-white absolute top-[250px] translate-x-1/2 text-[180px]"
        >
          Real
        </motion.p>
      </div>
      <motion.div
        style={{
          // x: 600,

          y: footerScale
        }}
        className="absolute bottom-0 w-full"
      >
        <div className="w-[320px] mx-auto">
          <p className="text-white text-sm text-center ">
            Our work is best experienced in motion. Don’t forget to put on your
            headphones.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

export default PlayRealSection
