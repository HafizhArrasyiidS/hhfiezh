"use client"

import { motion } from 'framer-motion';

export const Contact = () => {
    return (
        <section id="contact" className='py-20 md:py-32 text-white max-w-[1200px] mx-auto px-4 md:px-8'>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='max-w-2xl mx-auto'
            >
                <div className="space-y-8 md:space-y-12">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='text-5xl md:text-7xl font-bold text-gray-300 text-center'
                    >
                        Get in <span className='text-blue-500'>Touch</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='glass p-6 md:p-8 rounded-2xl space-y-6 md:space-y-8'
                    >
                        <div className="space-y-2">
                            <p className='text-base md:text-lg text-gray-300'>Phone</p>
                            <a href="tel:+6282230132607" className='text-xl md:text-2xl font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-2'>
                                +62-822-3013-2607
                            </a>
                        </div>

                        <div className="space-y-2">
                            <p className='text-base md:text-lg text-gray-300'>Email</p>
                            <a href="mailto:hafizhas14des@gmail.com" className='text-xl md:text-2xl font-semibold hover:text-blue-400 transition duration-300 flex items-center gap-2'>
                                hafizhas14des@gmail.com
                            </a>
                        </div>

                        
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}
