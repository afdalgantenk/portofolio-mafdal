'use client'

import { motion } from 'framer-motion'
import { SiLaravel, SiPhp, SiMysql, SiBootstrap, SiGit, SiLinux, SiHtml5 } from 'react-icons/si'
import { FaNetworkWired } from 'react-icons/fa'

const skills = [
  { name: 'Laravel', type: 'Backend Framework', color: '#ff2d55', bg: 'rgba(255,45,85,0.1)', icon: SiLaravel },
  { name: 'PHP', type: 'Backend Language', color: '#4f8ef7', bg: 'rgba(79,142,247,0.1)', icon: SiPhp },
  { name: 'MySQL', type: 'Database', color: '#34d399', bg: 'rgba(52,211,153,0.1)', icon: SiMysql },
  { name: 'HTML & CSS', type: 'Frontend', color: '#fbbf24', bg: 'rgba(251,191,36,0.1)', icon: SiHtml5 },
  { name: 'Bootstrap', type: 'CSS Framework', color: '#a78bfa', bg: 'rgba(167,139,250,0.1)', icon: SiBootstrap },
  { name: 'Networking', type: 'Infrastructure', color: '#34d399', bg: 'rgba(52,211,153,0.1)', icon: FaNetworkWired },
  { name: 'Git', type: 'Version Control', color: '#f97316', bg: 'rgba(249,115,22,0.1)', icon: SiGit },
]

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-24" style={{ borderTop: '0.5px solid rgba(255,255,255,0.07)' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: '#4f8ef7' }}>Kemampuan</p>
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-16" style={{ fontFamily: 'Syne, sans-serif' }}>Tech stack saya</h2>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
            className="flex items-center gap-3 p-4 rounded-xl transition-all hover:-translate-y-1"
            style={{
              background: '#111118',
              border: '0.5px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: skill.bg, color: skill.color }}
            >
              <skill.icon size={18} />
            </div>
            <div>
              <div className="text-sm font-medium" style={{ color: '#f0f0f5' }}>{skill.name}</div>
              <div className="text-xs" style={{ color: '#888899' }}>{skill.type}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}