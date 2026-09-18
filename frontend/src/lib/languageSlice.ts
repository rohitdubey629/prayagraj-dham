import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Lang = 'hi' | 'en'

interface LanguageState {
  lang: Lang
}

const initialState: LanguageState = {
  lang: 'hi'
}

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<Lang>) => {
      state.lang = action.payload
    },
    toggleLanguage: (state) => {
      state.lang = state.lang === 'hi' ? 'en' : 'hi'
    }
  }
})

export const { setLanguage, toggleLanguage } = languageSlice.actions
export default languageSlice.reducer
