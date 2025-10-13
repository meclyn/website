'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
//@ts-ignore
import confetti from 'canvas-confetti'

const ObrigadoPage = () => {
  useEffect(() => {
    const duration = 1 * 1000 // duração do efeito (1 segundo)
    const end = Date.now() + duration

    const frame = () => {
      confetti({
        particleCount: 4, // quantidade de partículas
        spread: 60, // sobe mais reto
        startVelocity: 90, // aumenta a força para subir mais alto
        origin: {
          x: Math.random(), // posição horizontal aleatória
          y: 1, // começa do rodapé
        },
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    }

    frame()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <div className="p-8 bg-white/10 border border-white/20 rounded-2xl shadow-xl backdrop-blur-md text-center max-w-md w-full">
        <h1 className="text-2xl font-bold mb-2">🎉 Bem-vindo à lista!</h1>
        <p className="text-white/80 mb-6">
          Parabéns pelo seu primeiro passo!<br></br> Em breve, novidades no seu email 🚀
        </p>

        <Link
          href="/"
          className="inline-block bg-primary hover:bg-primary-accent text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  )
}

export default ObrigadoPage
