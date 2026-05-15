'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-24" style={{ background: '#111118', borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#4f8ef7' }}>Tentang</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'Syne, sans-serif' }}>Siapa saya?</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col gap-4"
        >
          <p className="text-lg leading-relaxed" style={{ color: '#888899' }}>
            Halo! Saya <span style={{ color: '#f0f0f5' }}>Muhammad Afdal</span>, software developer lulusan{' '}
            <span style={{ color: '#f0f0f5' }}>SMK Garuda Mahadhika</span>, jurusan Teknik Komputer dan Jaringan.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#888899' }}>
            Meski berlatar belakang TKJ, saya tertarik ke dunia <span style={{ color: '#f0f0f5' }}>pengembangan aplikasi web</span> karena saya suka hal yang baru dan menantang — dan coding selalu punya tantangan baru setiap harinya.
          </p>
          <p className="text-lg leading-relaxed" style={{ color: '#888899' }}>
            Saya paling puas saat aplikasi yang saya bangun <span style={{ color: '#f0f0f5' }}>benar-benar dipakai orang</span>, bug berhasil difix, dan UI-nya enak dilihat. Buat saya, software yang baik adalah yang terasa mulus dari logic sampai tampilan.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
          style={{ border: '0.5px solid rgba(255,255,255,0.07)' }}
        >
          {[
            { num: '2+', label: 'Proyek selesai', color: '#4f8ef7' },
            { num: 'Laravel', label: 'Framework utama', color: '#a78bfa' },
            { num: 'SMK', label: 'Garuda Mahadhika', color: '#34d399' },
            { num: 'TKJ', label: 'Teknik Komputer & Jaringan', color: '#fbbf24' },
          ].map((item, i) => (
            <div key={i} className="p-6 flex flex-col gap-1" style={{ background: '#16161f' }}>
              <div className="text-3xl font-extrabold tracking-tight" style={{ fontFamily: 'Syne, sans-serif', color: item.color }}>{item.num}</div>
              <div className="text-sm" style={{ color: '#888899' }}>{item.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}