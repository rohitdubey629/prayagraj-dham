'use client'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { login, authHydrated, loadPersistedAuth } from '@/lib/authSlice'

export default function AuthInitializer() {
  const dispatch = useDispatch()

  useEffect(() => {
    const stored = loadPersistedAuth()
    if (stored) {
      dispatch(login({ email: stored.user.email, role: stored.user.role, token: stored.token || undefined }))
    } else {
      dispatch(authHydrated())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null
}
