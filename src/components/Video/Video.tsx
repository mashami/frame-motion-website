"use client"

import Image from "next/image"
import { useRef, useState } from "react"

interface VideoProps {
  width: string
  height: string
  imageUrl: string
  videoUrl: string
  className?: string
}

const Video = ({
  width,
  height,
  imageUrl,
  videoUrl,
  className
}: VideoProps) => {
  const containRef = useRef(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlay, setIsPlay] = useState<boolean>(false)

  const handleMouseEnter = () => {
    setIsPlay(true)
    videoRef.current?.play()
  }

  const handleMouseLeave = () => {
    setIsPlay(false)
    if (videoRef.current) {
      videoRef.current.pause()
      videoRef.current.currentTime = 0
    }
  }

  return (
    <div
      ref={containRef}
      className={`relative overflow-hidden group cursor-pointer -z-0 ${className}`}
      style={{
        height: height,
        width: width
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        alt="Image"
        src={`/${imageUrl}`}
        fill
        style={{ objectFit: "cover" }}
        className={`transition-opacity duration-300 ${
          isPlay ? "hidden" : "block"
        }`}
      />

      <video
        ref={videoRef}
        src={`/${videoUrl}`}
        playsInline
        loop
        onPlay={() => true}
        muted
        style={{ objectFit: "cover" }}
        className={`absolute w-full h-full transition-opacity duration-300 ${
          isPlay ? "block" : "hidden"
        }`}
      />
    </div>
  )
}

export default Video
