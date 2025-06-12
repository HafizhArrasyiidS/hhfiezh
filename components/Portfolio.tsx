"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import project1 from "@/assets/sipatuh.png"
import project2 from "@/assets/atapu.png"
import project3 from "@/assets/assettrack.png"
import project4 from "@/assets/ar.png"
import project5 from "@/assets/webshitt.jpg"
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
  AnimatePresence,
  TargetAndTransition,
  Variants,
} from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

const project = [
  {
    id: 1,
    year: 2024,
    title: "SiPatuh Mobile App",
    description:
      "This project is a mobile app-based project that records student violations and achievements, violations and achievements that will be recorded can be done via a QR code from the students student card, violations and achievements that have been recorded can be printed like notes..",
    image: project1,
  },
  {
    id: 2,
    year: 2022,
    title: "Atapu Store",
    description:
      "This project is an online game diamond buying and selling website or a platform for buying game diamonds such as Free Fire and Mobile Legends quickly and safely.",
    image: project2,
  },
  {
    id: 3,
    year: 2024,
    title: "Asset Track",
    description:
      "AssetTrack offers a complete solution for managing your assets. From tracking to reports, all in one application! Swipe to see superior features.",
    image: project3,
  },
  {
    id: 4,
    year: 2024,
    title: "AR Furniture",
    description:
      "This project is a mobile app based project that displays a list of items sold in a shop, the items sold can be viewed with Augmented Reality (AR).",
    image: project4,
  },
  {
    id: 5,
    year: 2025,
    title: "WebShitt",
    description:
      "This project features a complete digital solution service for online business growth.",
    image: project5,
  },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const color = useMotionValue(COLORS_TOP[0])

  useEffect(() => {
    const controls = animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    })
    return controls.stop
  }, [color]) // ✅ Tambahkan dependency 'color'

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
  const textColor = useMotionTemplate`${color}`

  const nextProject = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % project.length)
  }

  const prevProject = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + project.length) % project.length)
  }

  const selectedProject = project[currentIndex]

  const variants: Variants = {
    enter: (dir: number): TargetAndTransition => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number): TargetAndTransition => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  }

  return (
    <motion.section
      style={{ backgroundImage }}
      id="portfolio"
      className="py-32 text-white"
    >
      <div className="max-w-5xl mx-auto px-4 flex flex-col items-center text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-10">
          Selected <motion.span style={{ color: textColor }}>Project</motion.span>
        </h2>

        <div className="relative w-full max-w-3xl min-h-[520px] sm:min-h-[500px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={selectedProject.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -100) nextProject()
                if (info.offset.x > 100) prevProject()
              }}
              className="p-2 sm:p-4 absolute top-0 left-0 w-full"
            >
              <Image
                src={selectedProject.image.src}
                alt={selectedProject.title}
                className="rounded-xl shadow-lg mb-6 mx-auto w-full h-auto max-h-[280px] object-contain sm:max-h-[400px]"
                width={800}
                height={450}
              />
              <p className="text-gray-400 text-sm sm:text-base mb-1">
                {selectedProject.year}
              </p>

              <div className="flex items-center justify-center gap-3 flex-wrap mb-4">
                <button
                  onClick={prevProject}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition w-9 h-9 flex items-center justify-center"
                  aria-label="Previous project"
                >
                  <ChevronLeft className="w-4 h-4 text-white" />
                </button>

                <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-200 break-words text-center px-2">
                  {selectedProject.title}
                </h3>

                <button
                  onClick={nextProject}
                  className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition w-9 h-9 flex items-center justify-center"
                  aria-label="Next project"
                >
                  <ChevronRight className="w-4 h-4 text-white" />
                </button>
              </div>

              <p className="text-gray-400 text-sm sm:text-base">
                {selectedProject.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}
