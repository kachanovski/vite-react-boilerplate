export const PUBLIC_PAGES = {
  signIn: '/sign-in',
}

export const PRIVATE_PAGES = {
  main: {
    root: '/',
  },
}

const COMMON_PAGES = {
  page404: '/404',
}

export const PATH_PAGE = {
  ...PUBLIC_PAGES,
  ...PRIVATE_PAGES,
  ...COMMON_PAGES,
}
