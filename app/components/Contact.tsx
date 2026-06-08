'use client'

import { motion } from 'framer-motion'
import { MdEmail } from 'react-icons/md'
import { FaInstagram } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-24" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#4f8ef7' }}>Kontak</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Syne, sans-serif' }}>
            Mari berkolaborasi
          </h2>
          <p className="text-lg leading-relaxed mb-10" style={{ color: '#888899' }}>
            Tertarik untuk bekerja sama atau punya pertanyaan? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:officialmafdal@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium text-white transition-all hover:-translate-y-0.5"
              style={{ background: '#4f8ef7' }}
            >
              <MdEmail size={18} />
              officialmafdal@gmail.com
            </a>
            <a
              href="https://instagram.com/m.afdal_r"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all hover:-translate-y-0.5"
              style={{
                border: '0.5px solid rgba(255,255,255,0.12)',
                color: '#888899'
              }}
            >
              <FaInstagram size={18} />
              @m.afdal_r
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-24 pt-8 flex justify-between items-center"
        style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}
      >
        <span className="text-sm font-bold" style={{ fontFamily: 'Syne, sans-serif', color: '#888899' }}>Muhammad Afdal</span>
        <span className="text-xs" style={{ color: '#888899', opacity: 0.6 }}>© 2025 — Dibuat dengan sepenuh hati</span>
      </motion.div>
    </section>
  )
}
