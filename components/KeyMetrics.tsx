"use client";

import React from 'react';
import { motion, useInView } from 'framer-motion';

const metrics = [
  {
    id: 1,
    value: '3+',
    label: 'Years of Experience',
    description: 'Dedicated to honing my skills in full-stack development.',
  },
  {
    id: 2,
    value: '20+',
    label: 'Projects Completed',
    description: 'From small applications to complex web platforms.',
  },
  {
    id: 3,
    value: '10+',
    label: 'Technologies Mastered',
    description: 'Proficient in various programming languages and frameworks.',
  },
  {
    id: 4,
    value: '98%',
    label: 'Code Quality',
    description: 'Committed to writing clean, efficient, and maintainable code.',
  },
  {
    id: 5,
    value: '100+',
    label: 'Commits on GitHub',
    description: 'Active contributor to open-source and personal projects.',
  },
];

export const KeyMetrics = () => {
    const ref = React.useRef<HTMLElement>(null);
    const isInView = useInView(ref, { once: false });

    return (
        <section id="keymetrics" className="glass">
            <motion.section
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8 }}
                className="container mx-auto px-4 py-16 text-white"
            >
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-6xl font-bold mb-12"
                >
                    ABOUT
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                            className="flex flex-col"
                        >
                            <motion.h3
                                initial={{ scale: 0.5 }}
                                animate={isInView ? { scale: 1 } : { scale: 0.5 }}
                                transition={{ delay: 0.6 + index * 0.1, duration: 0.4, type: 'spring' }}
                                className="text-5xl font-bold text-blue-500 mb-2"
                            >
                                {metric.value}
                            </motion.h3>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                className="text-xl font-semibold mb-2"
                            >
                                {metric.label}
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                                className="text-gray-400"
                            >
                                {metric.description}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </section>
    );
};
