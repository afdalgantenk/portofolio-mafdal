'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">

      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)'
      }} />

      <div className="absolute w-96 h-96 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{
        background: 'radial-gradient(circle, rgba(79,142,247,0.08) 0%, transparent 70%)'
      }} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-6"
          style={{
            background: 'rgba(79,142,247,0.1)',
            border: '0.5px solid rgba(79,142,247,0.25)',
            color: '#4f8ef7'
          }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to work
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-6xl md:text-8xl font-extrabold leading-none tracking-tighter mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          Muhammad<br />
          <span style={{
            background: 'linear-gradient(135deg, #4f8ef7, #a78bfa)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Afdal
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg font-light max-w-lg mb-4"
          style={{ color: '#888899' }}
        >
          <span style={{ color: '#f0f0f5', fontWeight: 400 }}>Software Developer</span> yang suka tantangan baru dan puas saat karyanya benar-benar dipakai orang.
        </motion.p>

        <motion.div
          animate={{
            y: [0, -6, 0]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: [0.42, 0, 0.58, 1],
            delay: 1
          }}
          className="mb-10 will-change-transform"
          style={{
            borderLeft: '3px solid #4f8ef7',
            paddingLeft: '14px',
            filter: `
              drop-shadow(0 0 6px rgba(96,165,250,0.55))
              drop-shadow(0 0 14px rgba(59,130,246,0.28))
            `,
          }}
        >
          <p
            className="text-base font-medium"
            style={{
              color: '#ffffff',
              textShadow: '0 0 10px rgba(96,165,250,0.25)',
              WebkitTextStroke: '0.15px rgba(255,255,255,0.05)',
            }}
          >
            Memulai dari nol, otodidak sejak 2020. Tidak ada gelar — <br />
            hanya rasa penasaran dan ambisi yang tidak pernah berhenti.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:-translate-y-0.5"
            style={{ background: '#4f8ef7' }}
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
            style={{
              border: '0.5px solid rgba(255,255,255,0.12)',
              color: '#888899'
            }}
          >
            Hubungi Saya
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: '#888899' }}
      >
        <div className="w-px h-10" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.12))' }} />
        <span className="text-xs">scroll</span>
      </motion.div>

    </section>
  )
}