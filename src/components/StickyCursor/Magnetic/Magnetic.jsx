import { motion } from "framer-motion"
import { useRef } from "react"

export default function Magnetic({ children }) {
  const ref = useRef(null)
  // const [isHover, setIsHover] = useState < boolean > false

  // const handleOnMouseEnter = () => {
  //   setIsHover(true)
  // }

  // const handleOnMouseLeave = () => {
  //   setIsHover(false)
  // }

  // console.log(isHover)
  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      animate={{ x: 0, y: 0 }}
      // transition={{ type: "spring", stiffness: 350, damping: 5, mass: 0.5 }}
      // onMouseEnter={handleOnMouseEnter}
      // onMouseLeave={handleOnMouseLeave}
    >
      {/* {!isHover ? children : <div></div>} */}
      {children}
    </motion.div>
  )
}
