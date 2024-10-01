"use client"

import Lenis from "lenis"
import { Inter } from "next/font/google"
import { useEffect } from "react"
import "../styles/globals.scss"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: any) {
      lenis.raf(time)

      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <html lang="en">
      <body className={inter.className + "relative "}>
        {/* <div className="fixed top-8 right-14 left-14 z-50">
          <NavBar />
        </div> */}
        <main className="no-scrollbar">{children}</main>
      </body>
    </html>
  )
}
