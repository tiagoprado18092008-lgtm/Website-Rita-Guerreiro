'use client'

import { useRef, useEffect, useState, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export default function Reveal({ children, delay = 0, y = 24, className, once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once, margin: '-40px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration: 0.7,
        delay: delay / 1000,
        ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
