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
}

const initialState: AuthState = {
  user: null,
  isAdmin: false,
  isAuthenticated: false,
  token: null
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
    },
    logout: (state) => {
      state.user = null
      state.isAdmin = false
      state.isAuthenticated = false
      state.token = null
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer