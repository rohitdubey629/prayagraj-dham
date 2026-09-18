import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  email: string
  role: 'admin' | 'user'
}

interface AuthState {
  user: User | null
  isAdmin: boolean
  isAuthenticated: boolean
  token: string | null
  hydrated: boolean
}

export const AUTH_STORAGE_KEY = 'auth'
export const AUTH_MAX_AGE_MS = 30 * 24 * 60 * 60 * 1000 // 30 days

interface StoredAuth {
  user: User
  token: string | null
  expiresAt: number
}

const initialState: AuthState = {
  user: null,
  isAdmin: false,
  isAuthenticated: false,
  token: null,
  hydrated: false
}

function persistAuth(user: User, token: string | null) {
  try {
    const stored: StoredAuth = { user, token, expiresAt: Date.now() + AUTH_MAX_AGE_MS }
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(stored))
  } catch {
    // localStorage unavailable, ignore
  }
}

function clearPersistedAuth() {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY)
  } catch {
    // localStorage unavailable, ignore
  }
}

export function loadPersistedAuth(): StoredAuth | null {
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY)
    if (!raw) return null
    const stored = JSON.parse(raw) as StoredAuth
    if (!stored.expiresAt || stored.expiresAt < Date.now()) {
      clearPersistedAuth()
      return null
    }
    return stored
  } catch {
    return null
  }
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User & { token?: string }>) => {
      state.user = { email: action.payload.email, role: action.payload.role }
      state.isAdmin = action.payload.role === 'admin'
      state.isAuthenticated = true
      state.token = action.payload.token || null
      state.hydrated = true
      persistAuth(state.user, state.token)
    },
    logout: (state) => {
      state.user = null
      state.isAdmin = false
      state.isAuthenticated = false
      state.token = null
      state.hydrated = true
      clearPersistedAuth()
    },
    authHydrated: (state) => {
      state.hydrated = true
    }
  }
})

export const { login, logout, authHydrated } = authSlice.actions
export default authSlice.reducer
