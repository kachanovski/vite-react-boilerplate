import { useTranslation } from 'react-i18next'
import { Namespace } from 'i18next'

export const useI18next = (ns?: Namespace) => {
  const { i18n, t, ready } = useTranslation(ns)

  return {
    i18n,
    t,
    ready,
  }
}
