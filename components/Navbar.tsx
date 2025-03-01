"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineUser, AiOutlineFundProjectionScreen, AiOutlineAppstore, AiOutlineMail } from "react-icons/ai";

const navLinks = [
    { title: "About", path: "#keymetrics", icon: <AiOutlineUser size={24} /> },
    { title: "Portfolio", path: "#portfolio", icon: <AiOutlineFundProjectionScreen size={24} /> },
    { title: "Stack", path: "#stack", icon: <AiOutlineAppstore size={24} /> },
    { title: "Contact", path: "#contact", icon: <AiOutlineMail size={24} /> },
];

export const Navbar = () => {
    const router = useRouter();

    const handleScroll = (path: string) => {
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            router.push("/"); // Redirect jika elemen tidak ditemukan
        }
    };

    return (
        <div className="z-50 fixed flex justify-center w-full text-white font-bold">
            {/* Desktop Navbar */}
            <div className="border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto">
                <ul className="flex flex-row p-2 space-x-8">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleScroll(link.path)}
                                className="transform hover:text-white/50 transition-all duration-300 ease-in-out"
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Mobile Navbar */}
            <div className="md:hidden fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-black/70 rounded-full p-3 flex space-x-6">
                {navLinks.map((link, index) => (
                    <button
                        key={index}
                        onClick={() => handleScroll(link.path)}
                        className="text-white text-2xl hover:text-white/50 transition-all"
                    >
                        {link.icon}
                    </button>
                ))}
            </div>
        </div>
    );
};
