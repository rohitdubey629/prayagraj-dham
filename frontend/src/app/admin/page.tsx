'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import Layout from '../../components/Layout'
import AdminDashboard from '@/components/AdminDashboard'
import { RootState } from '../../lib/store'

export default function Admin() {
  const router = useRouter()
  const { isAdmin, isAuthenticated, hydrated } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    if (hydrated && (!isAuthenticated || !isAdmin)) {
      router.push('/login')
    }
  }, [hydrated, isAuthenticated, isAdmin, router])

  if (!hydrated || !isAuthenticated || !isAdmin) {
    return null
  }

  return (
    <Layout noBackground>
      <AdminDashboard />
    </Layout>
  )
}