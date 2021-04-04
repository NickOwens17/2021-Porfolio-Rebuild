import React from "react"
import { container, box, box1, box2, box3, box4 } from "../styles/developmentSection.module.scss"
import { motion } from "framer-motion";

const animationProps = {
  initial: { opacity: 0, y: 1200 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut", delay: 0.4 }
}

const DevelopmentBackground = () => {
  return (
    <div className={container}>
      <motion.div {...animationProps} className={[box, box1].join(' ')}></motion.div>
      <motion.div {...animationProps} className={[box, box2].join(' ')}></motion.div>
      <motion.div {...animationProps} className={[box, box3].join(' ')}></motion.div>
      <motion.div {...animationProps} className={[box, box4].join(' ')}></motion.div>
    </div>
  )
}

export default DevelopmentBackground;