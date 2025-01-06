import { Metadata } from 'next'

// TODO: Update metadata

export function constructMetadata({
  title = 'Dolev Dublon',
  description = "I am a software engineer with a passion for building scalable and efficient web applications.",
  image = 'https://github-portfolio-red.vercel.app/thumbnail.jpeg', // Absolute URL
  icons = 'https://github-portfolio-red.vercel.app/thumbnail.jpeg', // Absolute URL
  noIndex = false
}: {
  title?: string
  description?: string
  image?: string
  icons?: string
  noIndex?: boolean
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [image]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image],
      creator: '@dolev146'
    },
    icons,
    metadataBase: new URL('https://github-portfolio-red.vercel.app/'),
    ...(noIndex && {
      robots: {
        index: false,
        follow: false
      }
    })
  }
}
