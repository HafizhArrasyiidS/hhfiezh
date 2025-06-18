'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import s1 from '@/assets/jr.png'
import s2 from '@/assets/ajr.png'
import s3 from '@/assets/uin.png'
import s4 from '@/assets/unr.png'
import s5 from '@/assets/uns.png'

const achievements = [
  {
    title: 'Junior Programming',
    description: 'Certification is carried out through LSP SMK Negeri 1 Bangil, Junior Programming scheme.',
    image: s1,
  },
  {
    title: 'Junior Programming Assistant',
    description: 'Sertifikasi dilakukan melalui LSP SMK Negeri 1 Bangil, skema Asisten Pemrogram Junior.',
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
]

export const Services = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<null | typeof achievements[0]>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let animationFrame: number
    const scrollSpeed = 0.5

    const animateScroll = () => {
      if (!container || selected) {
        animationFrame = requestAnimationFrame(animateScroll)
        return
      }
      container.scrollLeft += scrollSpeed

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0
      }

      animationFrame = requestAnimationFrame(animateScroll)
    }

    animationFrame = requestAnimationFrame(animateScroll)
    return () => cancelAnimationFrame(animationFrame)
  }, [selected])

  const loopingData = [...achievements, ...achievements]

  return (
    <section className="text-white py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-6xl text-blue-500 font-extrabold mb-10 text-center sm:text-left">
          ACHIEVEMENTS
        </h2>

        <div
          ref={scrollRef}
          className="overflow-x-auto scrollbar-hide"
          style={{ scrollBehavior: 'auto', whiteSpace: 'nowrap' }}
        >
          <div className="flex gap-6 w-max">
            {loopingData.map((item, index) => (
              <div
                key={index}
                className="min-w-[260px] sm:min-w-[300px] md:min-w-[340px] max-w-[90vw] flex-shrink-0 bg-[#1c1c1e] rounded-2xl shadow-xl p-4 sm:p-6 cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => setSelected(item)}
              >
                <div className="w-full h-44 sm:h-56 relative mb-4">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-white">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-300 leading-snug line-clamp-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4 py-8 sm:py-12 overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#1c1c1e] rounded-2xl p-6 sm:p-8 w-full max-w-5xl text-white relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Gambar sertifikat responsif */}
            <div className="relative w-full h-[60vh] sm:h-[70vh] mb-6">
              <Image
                src={selected.image}
                alt={selected.title}
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold mb-4">{selected.title}</h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed mb-6">
              {selected.description}
            </p>

            <button
              onClick={() => setSelected(null)}
              className="mt-4 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
