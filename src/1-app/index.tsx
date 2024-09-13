import React, { Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import '@/7-shared/lib/i18n/i18n'
import '@/7-shared/assets/global.css'
import { Notifications, ModalsProvider, MantineProvider } from '@/7-shared/ui'

import styles from './styles.module.scss'
import { router } from './routes'

createRoot(document.getElementById('root')!).render(
  <MantineProvider>
    <ModalsProvider>
      <Notifications className={styles.root} />
      <Suspense fallback={<></>}>
        <RouterProvider router={router} />
      </Suspense>
    </ModalsProvider>
  </MantineProvider>,
)
