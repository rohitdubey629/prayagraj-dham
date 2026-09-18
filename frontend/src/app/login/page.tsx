'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '../../lib/authSlice'
import Layout from '../../components/Layout'
import { adminLogin } from '../../lib/api'
import { useTranslation } from '@/lib/useTranslation'
import { translations } from '@/lib/translations'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()
  const { t } = useTranslation()
  const l = translations.login

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (email === 'user@example.com' && password === 'user123') {
      dispatch(login({ email, role: 'user' }))
      router.push('/')
      return
    }

    try {
      const { token } = await adminLogin(email, password)
      dispatch(login({ email, role: 'admin', token }))
      router.push('/admin')
    } catch {
      setError(t(l.invalidCredentials))
    }
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-prayagraj-primary mb-6">{t(l.title)}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {t(l.email)}
            </label>
            <input
              id="email"
              type="email"
              className="w-full px-3 py-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2" htmlFor="password">
              {t(l.password)}
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-prayagraj-primary text-white py-2 px-4 rounded hover:bg-prayagraj-secondary transition"
          >
            {t(l.submit)}
          </button>
        </form>
      </div>
    </Layout>
  )
}
