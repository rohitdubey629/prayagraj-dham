'use client'

import { Suspense, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import Link from 'next/link'
import { login } from '../../lib/authSlice'
import Layout from '../../components/Layout'
import { registerUser } from '../../lib/api'
import { useTranslation } from '@/lib/useTranslation'
import { translations } from '@/lib/translations'

export default function Register() {
  return (
    <Suspense fallback={null}>
      <RegisterForm />
    </Suspense>
  )
}

function RegisterForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const dispatch = useDispatch()
  const router = useRouter()
  const searchParams = useSearchParams()
  const { t } = useTranslation()
  const r = translations.register

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSubmitting(true)
    try {
      const { token, user } = await registerUser(name, email, password)
      dispatch(login({ id: user.id, name: user.name, email: user.email, role: 'user', token }))
      router.push(searchParams.get('next') || '/my-yatra')
    } catch (err) {
      setError(err instanceof Error ? err.message : t(r.genericError))
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Layout noBackground>
      <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-prayagraj-primary mb-6">{t(r.title)}</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              {t(r.name)}
            </label>
            <input
              id="name"
              type="text"
              className="w-full px-3 py-2 border rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              {t(r.email)}
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
              {t(r.password)}
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
              required
            />
            <p className="text-xs text-gray-500 mt-1">{t(r.passwordHint)}</p>
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-prayagraj-primary text-white py-2 px-4 rounded hover:bg-prayagraj-secondary transition disabled:opacity-60"
          >
            {t(r.submit)}
          </button>
        </form>
        <p className="text-sm text-gray-600 mt-4 text-center">
          {t(r.haveAccount)}{' '}
          <Link href="/login" className="text-prayagraj-primary font-semibold hover:underline">
            {t(r.loginLink)}
          </Link>
        </p>
      </div>
    </Layout>
  )
}
