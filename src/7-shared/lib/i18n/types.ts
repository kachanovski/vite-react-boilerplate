import { type TFunction } from 'i18next'

import { config } from '../../config'

export type LangVariants = (typeof config.SUPPORTED_LANG)[number]
export type I18nTranslate = TFunction<string | 'translation'>
