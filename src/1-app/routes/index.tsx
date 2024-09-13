import { createBrowserRouter } from 'react-router-dom'
import { PATH_PAGE } from '@/7-shared/lib/router'
import { Main } from '@/3-pages/main'

export const router = createBrowserRouter([
  {
    children: [
      {
        children: [
          {
            element: <div>signIn</div>,
            path: PATH_PAGE.signIn,
          },
        ],
      },
      {
        children: [
          {
            element: <Main />,
            path: PATH_PAGE.main.root,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
])
