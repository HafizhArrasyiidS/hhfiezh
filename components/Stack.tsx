import React from "react";
import { FaReact } from "react-icons/fa";
import { SiLaravel } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiFlutter } from "react-icons/si";

const stackItems = [
    { id: 1, name: "React", icon: FaReact, color: '#61DAFB' },
    { id: 2, name: "Laravel", icon: SiLaravel, color: '#FF2D20' },
    { id: 3, name: "TypeScript", icon: SiTypescript, color: '#3178C6' },
    { id: 4, name: "Flutter", icon: SiFlutter, color: '#42A5F5' },
    { id: 5, name: "Next.js", icon: TbBrandNextjs, color: '#000000' },
];

export const Stack = () => {
    return (
        <section id="stack" className="py-16 glass">
            <div className="max-w-[1200px] mx-auto px-4 text-center">
                <h2 className="text-5xl text-gray-200 font-bold mb-4">My Tech Stack</h2>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                    {stackItems.map((item) => (
                        <div key={item.id} className="flex items-center justify-center flex-col rounded-xl p-4">
                            <div className="mb-4 bg-white/10 p-6 rounded-xl">
                                {React.createElement(item.icon, {
                                    className: "w-32 h-32",
                                    style : {color: item.color}
                                })}
                            </div>
                            <p className="text-gray-400 font-semibold">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}