"use client"

import React, { useEffect, useState } from "react"
import { FiArrowRight } from "react-icons/fi"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"
import Image from "next/image"
import profilepic1 from "@/assets/5.png"
import profilepic2 from "@/assets/2.jpg"

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Hero = () => {
    const color = useMotionValue(COLORS_TOP[0])
    const [currentImage, setCurrentImage] = useState(profilepic1)
    const [isFading, setIsFading] = useState(false)
    
    useEffect(() => {
        animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, [])
    
    useEffect(() => {
        const interval = setInterval(() => {
            changeImage()
        }, 10000)
        return () => clearInterval(interval)
    }, [])
    
    const changeImage = () => {
        setIsFading(true)
        setTimeout(() => {
            setCurrentImage(prevImage => prevImage === profilepic1 ? profilepic2 : profilepic1)
            setIsFading(false)
        }, 500)
    }
    
    const handleImageClick = () => {
        changeImage()
    }
    
    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const border = useMotionTemplate`1px solid ${color}`
    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
    
    return (
        <motion.section style={{ backgroundImage }} className="relative grid min-h-screen place-content-center overflow-hidden px-4 pt-6 md:pt-24 pb-12 text-gray-200">
            <div className="z-10 flex flex-col items-center">
                <span className="mb-1.5 inline-block rounded-full bg-gray-600/50 px-3 py-1.5 text-sm">
                    Open for ask anything
                </span>
                <h1 className="text-white/40 text-5xl md:text-7xl font-black">Hi, I am</h1>
                <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent text-5xl md:text-7xl text-center">
                    Hafizh Arrasyiid Syahbana
                </h1>
                <motion.div 
                    animate={{ opacity: isFading ? 0 : 1, scale: isFading ? 0.95 : 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Image
                        src={currentImage}
                        alt="profile pic"
                        width={250}
                        height={250}
                        className="rounded-full transition-transform duration-300 hover:scale-110 mb-5 mt-3 cursor-pointer"
                        onClick={handleImageClick}
                    />
                </motion.div>
                <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-center items-center space-x-2 mb-4">
                    <p className="font-medium px-4">Ravi de vous rencontrer</p>
                </div>
                <p className="my-6 max-w-xl text-center">Fullstack Developer based in Malang, with over 3+ years of experience</p>
                <motion.a
                    href="https://nnas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ border, boxShadow }}
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.985 }}
                    className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
                >
                    Other things
                    <FiArrowRight/>
                </motion.a>
            </div>
            <div className="bg-circle-container">
                <div className="bg-circle-background"></div>
                <div className="bg-circle"></div>
            </div>
        </motion.section>
    )
}
