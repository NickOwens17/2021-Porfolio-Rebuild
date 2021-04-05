import React from "react"
import { container, box, box1, box2, box3, box4 } from "../styles/developmentSection.module.scss"
import { motion } from "framer-motion";

const containerVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const boxVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 1200 },
}

const DevelopmentBackground = () => {
  return (
    <motion.div className={container} 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      transition={{duration: 0.6, delay: 0.4}}
    >
      <motion.div variants={boxVariants} className={[box, box1].join(' ')}></motion.div>
      <motion.div variants={boxVariants} className={[box, box2].join(' ')}></motion.div>
      <motion.div variants={boxVariants} className={[box, box3].join(' ')}></motion.div>
      <motion.div variants={boxVariants} className={[box, box4].join(' ')}></motion.div>
    </motion.div>
  )
}

export default DevelopmentBackground;