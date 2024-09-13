import React from 'react'
import { useI18next } from '@/7-shared/lib/i18n'

export const Main = () => {
  const { t } = useI18next('main')
  return (
    <div>
      <div>{t('title')}</div>
    </div>
  )
}
