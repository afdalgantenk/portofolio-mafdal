import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Muhammad Afdal — Software Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div style={{
        width: 1200,
        height: 630,
        background: '#0a0a0f',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px',
        fontFamily: 'sans-serif',
      }}>
        <div style={{ color: '#4f8ef7', fontSize: 18, fontWeight: 600, letterSpacing: 4, marginBottom: 24 }}>
          SOFTWARE DEVELOPER
        </div>
        <div style={{ color: '#ffffff', fontSize: 80, fontWeight: 800, lineHeight: 1, marginBottom: 24 }}>
          Muhammad Afdal
        </div>
        <div style={{ color: '#888899', fontSize: 24, maxWidth: 700 }}>
          Memulai dari nol, otodidak sejak 2020. Tidak ada gelar — hanya rasa penasaran dan ambisi yang tidak pernah berhenti.
        </div>
        <div style={{ position: 'absolute', bottom: 80, right: 80, color: '#4f8ef7', fontSize: 32, fontWeight: 800 }}>
          mafdal.my.id
        </div>
      </div>
    ),
    { ...size }
  )
}