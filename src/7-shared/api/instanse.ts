import axios from 'axios'

import { config } from '@/7-shared/config'

export const instance = axios.create({
  withCredentials: true,
  baseURL: `${config.BASE_API}/api`,
})
