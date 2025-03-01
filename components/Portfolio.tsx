"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import project1 from "@/assets/sipatuh.png"
import project2 from "@/assets/atapu.png"
import project3 from "@/assets/assettrack.png"
import project4 from "@/assets/ar.png"
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion"

const project = [
    {
        id: 1, 
        year: 2024, 
        title: 'SiPatuh Mobile App', 
        description: 'This project is a mobile app-based project that records student violations and achievements, violations and achievements that will be recorded can be done via a QR code from the students student card, violations and achievements that have been recorded can be printed like notes.', 
        image: project1
    },
    {
        id: 2, 
        year: 2022, 
        title: 'Atapu Store', 
        description: 'This project is an online game diamond buying and selling website or a platform for buying game diamonds such as Free Fire and Mobile Legends quickly and safely', 
        image: project2
    },
    {
        id: 3, 
        year: 2024, 
        title: 'Asset Track', 
        description: 'AssetTrack offers a complete solution for managing your assets. From tracking to reports, all in one application! Swipe to see superior features.', 
        image: project3
    },
    {
        id: 4, 
        year: 2024, 
        title: 'AR Furniture', 
        description: 'This project is a mobile app based project that displays a list of items sold in a shop, the items sold can be viewed with Augmented Reality (AR).', 
        image: project4
    },
]

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]

export const Portfolio = () => {
    const [selectedProject, setSelectedProject] = useState(project[0])
    const color = useMotionValue(COLORS_TOP[0])

    useEffect(() => {
        const controls = animate(color, COLORS_TOP, {
            ease: "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror"
        })
        
        return controls.stop // Cleanup animation on unmount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) 

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
    const textColor = useMotionTemplate`${color}`

    return (
        <motion.section style={{ backgroundImage }} id="portfolio" className="py-32 text-white">
            <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
                <div>
                    <h2 className="text-6xl font-bold mb-10">
                        Selected <motion.span style={{ color: textColor }} className="text-gray-400">Project</motion.span>
                    </h2>
                    {project.map((proj) => (
                        <motion.div
                            key={proj.id}
                            onClick={() => setSelectedProject(proj)}
                            className="cursor-pointer mb-8 group"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <p className="text-gray-400">{proj.year}</p>
                            <motion.h3 
                                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors ${selectedProject.id === proj.id ? 'text-gray-200' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                            >
                                {proj.title}
                            </motion.h3>
                            {selectedProject.id === proj.id && (
                                <motion.div 
                                    className="border-b-2 border-gray-200 my-4"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                />
                            )}
                            {selectedProject.id === proj.id && (
                                <motion.p 
                                    className="text-gray-400 transition-all duration-500 ease-in-out"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                >
                                    {proj.description}
                                </motion.p>
                            )}
                        </motion.div>
                    ))}
                </div>
            
                <motion.div
                    key={selectedProject.id} // Ensures animation runs every time a new project is selected
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                >
                    <Image
                        src={selectedProject.image.src}
                        alt={selectedProject.title}
                        className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
                        width={800}
                        height={450}
                    />
                </motion.div>
            </div>
        </motion.section>
    )
}
