import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { language } from './language'

import { config } from '../../config'

async function i18Loader() {
  await i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
      lng: language.getCurrentLanguage() || config.INIT_LANG,
      debug: false,
      fallbackLng: config.INIT_LANG,
      backend: {
        loadPath: '/public/locales/{{lng}}/{{ns}}.json',
      },
    })
}

i18Loader()
