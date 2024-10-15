import { Metadata } from "next"


export function constructMetadata({
  title = "SaaS Dark Landing Page",
  description = 'landing page design with nextjs, tailwindcss, and framer-motion',
  image = "/thumbnail.png",
  icons = "/favicon.ico"
}: {
  title?: string,
  description?: string,
  image?: string,
  icons?: string
} = {} ): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    icons,
    metadataBase: new URL("https://light-saas-landing-page-nextjs.vercel.app")
  }
}