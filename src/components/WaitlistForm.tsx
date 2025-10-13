'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const WaitlistForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)

    try {
      // Futuramente integrar com mailchimp, formspree, etc
      await new Promise(res => setTimeout(res, 1000))
      router.push('/obrigado')
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 p-6 bg-white/10 border border-white/20 rounded-xl shadow-xl backdrop-blur-md max-w-lg w-full"
    >
      <input
        type="email"
        required
        placeholder="Digite seu e-mail"
        value={email}
        onChange={e => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 focus:border-white focus:outline-none placeholder-white/60 text-white"
      />
      <button
        type="submit"
        disabled={loading}
        className="text-black bg-primary hover:bg-primary-accent px-6 py-3 font-semibold rounded-lg transition disabled:opacity-50"
      >
        {loading ? 'Enviando...' : 'Entrar na lista'}
      </button>
    </form>
  )
}

export default WaitlistForm
