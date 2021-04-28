import qs from 'query-string'

const API = `https://apikit.vercel.app/api`

export const getHTML = async (url: string, { js }: { js?: boolean } = {}) => {
  const { html } = await fetch(
    API + `/html${qs.stringify({ url, js })}`,
  ).then((res) => res.json())

  return html
}

export const screenshot = async (
  url: string,
  { fullPage }: { fullPage?: boolean } = {},
) => {
  const res = await fetch(API + `/screenshot${qs.stringify({ url, fullPage })}`)

  return {
    getBuffer() {
      return res.arrayBuffer()
    },
  }
}

/**
 * Get SEO information
 */
export const seo = async (
  url: string,
  { js }: { js?: boolean } = {},
): Promise<{
  title?: string
  description?: string
  image?: string
  og: {
    title?: string
    description?: string
    image?: string
  }
  twitter: {
    creator?: string
    site?: string
    title?: string
    description?: string
    image?: string
  }
}> => {
  const data = await fetch(
    API + `/seo${qs.stringify({ url, js })}`,
  ).then((res) => res.json())

  return data
}

export const getRealURL = (url: string) => {
  return fetch(API + `/real-url${qs.stringify({ url })}`).then((res) =>
    res.text(),
  )
}
