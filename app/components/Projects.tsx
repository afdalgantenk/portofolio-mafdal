'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const projects = [
  {
    title: 'Sistem CBT',
    subtitle: 'CBT Darul Hijrah Putri',
    description: 'Aplikasi Computer Based Test untuk ujian digital di pesantren. Dibangun dengan tema liquid glass, mendukung bahasa Arab, rumus matematika, dan import soal dari Word.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    techColors: ['#4f8ef7', '#a78bfa', '#34d399', '#fbbf24'],
    features: [
      '3 tipe soal: pilihan ganda, benar/salah, multiple choice',
      'Support bahasa Arab, simbol unik & rumus OMML',
      'Import soal dari file Word',
      'Nilai otomatis & acak soal/jawaban',
      'Token per ujian & timer real-time',
      'Responsive di semua device',
    ],
    roadmap: [
      'Koreksi essay otomatis terintegrasi AI',
    ],
    images: [
      '/images/cbt-login.png',
      '/images/cbt-ujian.png',
      '/images/cbt-monitoring.png',
    ],
    accent: '#4f8ef7',
  },
  {
    title: 'Sistem Perizinan',
    subtitle: 'Perizinan Darul Hijrah Putri',
    description: 'Aplikasi manajemen perizinan santri berbasis web. Terintegrasi langsung dengan data santri dari sistem Jibas, lengkap dengan cetak surat izin.',
    tech: ['Laravel', 'PHP', 'MySQL', 'Jibas API'],
    techColors: ['#f472b6', '#a78bfa', '#34d399', '#fbbf24'],
    features: [
      'Integrasi data santri dari Jibas',
      'Input & manajemen perizinan (CRUD)',
      'Cetak surat izin langsung dari sistem',
      'Dashboard monitoring izin harian & bulanan',
      'Manajemen asrama, kamar & operator',
    ],
    roadmap: [
      'Integrasi kartu mahrom digital',
    ],
    images: [
      '/images/perizinan-login.png',
      '/images/perizinan-dashboard.png',
      '/images/perizinan-form.png',
    ],
    accent: '#f472b6',
  },
]

export default function Projects() {
  const [activeImg, setActiveImg] = useState<{ [key: number]: number }>({ 0: 0, 1: 0 })
  const [direction, setDirection] = useState<{ [key: number]: number }>({ 0: 0, 1: 0 })
  const [lightbox, setLightbox] = useState<{ open: boolean, src: string } | null>(null)

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const navigate = (projectIdx: number, dir: number) => {
    setDirection(prev => ({ ...prev, [projectIdx]: dir }))
    setActiveImg(prev => ({ ...prev, [projectIdx]: prev[projectIdx] + dir }))
  }

  return (
    <section id="projects" className="py-32 px-6 md:px-24" style={{ background: '#111118', borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#4f8ef7' }}>Proyek</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'Syne, sans-serif' }}>Yang sudah saya bangun</h2>
      </motion.div>

      <div className="flex flex-col gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="rounded-2xl overflow-hidden"
            style={{ background: '#16161f', border: '0.5px solid rgba(255,255,255,0.07)' }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative p-6 flex flex-col gap-3" style={{ background: '#0a0a0f' }}>
                <div className="relative w-full rounded-xl overflow-hidden cursor-pointer" style={{ aspectRatio: '16/9', background: '#111118' }}>
                  <AnimatePresence mode="sync" custom={direction[i]}>
                    <motion.div
                      key={activeImg[i]}
                      custom={direction[i]}
                      variants={{
                        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 1 }),
                        center: { x: 0, opacity: 1 },
                        exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 1 }),
                      }}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                      className="absolute inset-0"
                      style={{ background: '#111118' }}
                      onClick={() => setLightbox({ open: true, src: project.images[activeImg[i]] })}
                    >
                      <Image src={project.images[activeImg[i]]} alt={project.title} fill className="object-contain" />
                    </motion.div>
                  </AnimatePresence>

                  {activeImg[i] > 0 && (
                    <button
                      onClick={() => navigate(i, -1)}
                      className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all"
                      style={{
                        width: 30, height: 30,
                        borderRadius: '50%',
                        background: 'rgba(79,142,247,0.15)',
                        backdropFilter: 'blur(4px)',
                        border: '0.5px solid rgba(79,142,247,0.3)',
                        color: '#000205',
                      }}
                    >
                      <FiChevronLeft size={16} />
                    </button>
                  )}
                  {activeImg[i] < project.images.length - 1 && (
                    <button
                      onClick={() => navigate(i, 1)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all"
                      style={{
                        width: 30, height: 30,
                        borderRadius: '50%',
                        background: 'rgba(79,142,247,0.15)',
                        backdropFilter: 'blur(4px)',
                        border: '0.5px solid rgba(79,142,247,0.3)',
                        color: '#01050c',
                      }}
                    >
                      <FiChevronRight size={16} />
                    </button>
                  )}
                </div>

                {/* Dot indicators */}
                <div className="flex gap-2">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setDirection(prev => ({ ...prev, [i]: idx > activeImg[i] ? 1 : -1 }))
                        setActiveImg(prev => ({ ...prev, [i]: idx }))
                      }}
                      className="h-1.5 rounded-full transition-all"
                      style={{
                        width: activeImg[i] === idx ? '24px' : '8px',
                        background: activeImg[i] === idx ? project.accent : 'rgba(255,255,255,0.2)',
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content side */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t, ti) => (
                      <span
                        key={ti}
                        className="text-xs font-medium px-3 py-1 rounded-full"
                        style={{
                          background: `${project.techColors[ti]}18`,
                          color: project.techColors[ti],
                          border: `0.5px solid ${project.techColors[ti]}33`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-1 tracking-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{project.title}</h3>
                  <p className="text-sm mb-4" style={{ color: project.accent }}>{project.subtitle}</p>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: '#888899' }}>{project.description}</p>

                  <ul className="flex flex-col gap-2">
                    {project.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm" style={{ color: '#888899' }}>
                        <span className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: project.accent }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mt-6 pt-4" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
                  <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: '#fbbf24' }}>Rencana Pengembangan</p>
                  <ul className="flex flex-col gap-2">
                    {project.roadmap.map((r, ri) => (
                      <li key={ri} className="flex items-center gap-2 text-sm">
                        <span className="px-2 py-0.5 rounded-md text-xs font-medium" style={{ background: 'rgba(251,191,36,0.1)', color: '#fbbf24', border: '0.5px solid rgba(251,191,36,0.2)' }}>
                          In Development
                        </span>
                        <span style={{ color: '#888899' }}>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox?.open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] flex items-center justify-center p-4"
            style={{ background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(8px)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden"
              style={{ aspectRatio: '16/9' }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image src={lightbox.src} alt="Preview" fill className="object-contain" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}