'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import s1 from '@/assets/jr.png'
import s2 from '@/assets/ajr.png'
import s3 from '@/assets/uin.png'
import s4 from '@/assets/unr.png'
import s5 from '@/assets/uns.png'
import s6 from '@/assets/ub.jpg'

const achievements = [
  {
    title: 'Junior Programming',
    description: 'Certification is carried out through LSP SMK Negeri 1 Bangil, Junior Programming scheme.',
    image: s1,
  },
  {
    title: 'Junior Programming Assistant',
    description: 'Certification is carried out through the LSP of State Vocational School 1 Bangil, Junior Programmer Assistant scheme.',
    image: s2,
  },
  {
    title: 'CREATIVE VIDEO IBFair 2023',
    description: '1st Place in IBFair Creative Video Competition at UIN Malang.',
    image: s3,
  },
  {
    title: 'Web Design Competition',
    description: 'Web design competition at Airlangga University.',
    image: s4,
  },
  {
    title: 'Web Design',
    description: 'Web design competition at The Eleventh March University.',
    image: s5,
  },
  {
    title: 'Internship',
    description: 'Completed internship program at PT. Universal Big Data (UBIG) With good results.',
    image: s6,
  },
]

export const Services = () => {
  const [selected, setSelected] = useState<null | typeof achievements[0]>(null)
  const [showAll, setShowAll] = useState(false)

  const visibleAchievements = showAll ? achievements : achievements.slice(0, 3)

  return (
    <section className="py-20 sm:py-28 bg-[#0f0f11] text-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-blue-500 mb-12 text-center">Achievements</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleAchievements.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-[#1c1c1e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer"
              onClick={() => setSelected(item)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ delay: idx * 0.1, duration: 0.5, ease: 'easeOut' }}
            >
              <div className="relative w-full h-52 sm:h-60">
                <Image src={item.image} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-3">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Button See More / See Less */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
          >
            {showAll ? 'Show Less' : 'See More'}
          </button>
        </div>
      </div>

      {/* Modal with animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-[#1c1c1e] rounded-2xl p-6 sm:p-8 w-full max-w-4xl shadow-2xl relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:text-red-500"
                onClick={() => setSelected(null)}
              >
                &times;
              </button>
              <div className="relative w-full h-[50vh] sm:h-[60vh] mb-6">
                <Image
                  src={selected.image}
                  alt={selected.title}
                  fill
                  className="rounded-xl object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4">{selected.title}</h3>
              <p className="text-gray-300">{selected.description}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
