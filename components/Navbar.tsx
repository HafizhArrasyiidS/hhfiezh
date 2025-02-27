"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const navLinks = [
    { title: "About", path: "#keymetrics" },
    { title: "Portfolio", path: "#portfolio" },
    { title: "Stack", path: "#stack" },
    { title: "Contact", path: "#contact" },
];

export const Navbar = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();

    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const handleScroll = (path: string) => {
        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeNav();
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

            {/* Mobile Menu Toggle */}
            <div
                onClick={toggleNav}
                className="md:hidden absolute top-5 right-14 border rounded z-50 text-white/70 border-white/70 p-2"
            >
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>

            {/* Mobile Navbar */}
            <div
                className={`fixed left-0 top-0 w-full h-full bg-black/90 transform transition-transform duration-300 ${
                    nav ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <ul className="flex flex-col items-center justify-center space-y-8 h-full">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <button
                                onClick={() => handleScroll(link.path)}
                                className="text-5xl text-white"
                            >
                                {link.title}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
