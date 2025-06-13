'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { login } from '../../lib/authSlice'
import Layout from '../../components/Layout'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would validate credentials with a backend
    if (email === 'admin@prayagraj.com' && password === 'admin123') {
      dispatch(login({ email, role: 'admin' }))
      router.push('/admin')
    } else if (email === 'user@example.com' && password === 'user123') {
      dispatch(login({ email, role: 'user' }))
      router.push('/')
    } else {
      alert('Invalid credentials')
    }
  }

  return (
    <Layout>
      <div className="max-w-md mx-auto my-12 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-prayagraj-primary mb-6">Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
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
              Password
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
          <button
            type="submit"
            className="w-full bg-prayagraj-primary text-white py-2 px-4 rounded hover:bg-prayagraj-secondary transition"
          >
            Login
          </button>
        </form>
      </div>
    </Layout>
  )
}