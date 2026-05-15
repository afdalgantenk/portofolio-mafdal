'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 md:px-24 py-4"
          style={{
            background: 'rgba(10,10,15,0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '0.5px solid rgba(255,255,255,0.07)'
          }}
        >
          <a href="#" className="flex items-center">
            <Image src="/logo.png" alt="Muhammad Afdal" width={45} height={45} priority />
          </a>
          <ul className="flex gap-6 list-none">
            {[
              { label: 'Tentang', href: '#about' },
              { label: 'Skill', href: '#skills' },
              { label: 'Proyek', href: '#projects' },
              { label: 'Kontak', href: '#contact' },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm transition-colors hover:text-white" style={{ color: '#888899' }}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}