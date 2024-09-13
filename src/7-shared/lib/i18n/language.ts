import { LangVariants } from './types'

export const language = {
  getCurrentLanguage() {
    return localStorage.getItem('lang')
  },
  setLanguage(lang: LangVariants) {
    return localStorage.setItem('lang', lang)
  },
}
