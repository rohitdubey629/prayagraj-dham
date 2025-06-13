import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface User {
  email: string
  role: 'admin' | 'user'
}

interface AuthState {
  user: User | null
  isAdmin: boolean
  isAuthenticated: boolean
}

const initialState: AuthState = {
  user: null,
  isAdmin: false,
  isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.user = action.payload
      state.isAdmin = action.payload.role === 'admin'
      state.isAuthenticated = true
    },
    logout: (state) => {
      state.user = null
      state.isAdmin = false
      state.isAuthenticated = false
    }
  }
})

export const { login, logout } = authSlice.actions
export default authSlice.reducer