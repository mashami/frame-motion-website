"use client"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { forwardRef, useEffect } from "react"

interface StickyCursorProps {
  text: string
}

const StickyCursor = forwardRef<HTMLDivElement, StickyCursorProps>(
  ({ text }, ref) => {
    const mouse = {
      x: useMotionValue(0),
      y: useMotionValue(0)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const manageMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      mouse.x.set(clientX)
      mouse.y.set(clientY)
    }

    const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 }
    const smoothMouse = {
      x: useSpring(mouse.x, smoothOptions),
      y: useSpring(mouse.y, smoothOptions)
    }

    useEffect(() => {
      window.addEventListener("mousemove", manageMouseMove)
      return () => {
        window.removeEventListener("mousemove", manageMouseMove)
      }
    }, [manageMouseMove])

    return (
      <div className="">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut", delay: 0.1 }}
          style={{
            left: ref ? smoothMouse.x : 0,
            top: ref ? smoothMouse.y : 0
          }}
          className="fixed rounded-full pointer-events-none backdrop-blur-2xl border-white/80 bg-white/10 w-[80px] h-[80px] flex items-center justify-center"
        >
          <p className="text-sm text-white text-center font-light">{text}</p>
        </motion.div>
      </div>
    )
  }
)

StickyCursor.displayName = "StickyCursor"

export default StickyCursor
