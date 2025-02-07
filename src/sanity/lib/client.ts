import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url';



export const client = createClient({
  projectId:process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset:"production",
  token:process.env.SANITY_API_TOKEN,
//  useCdn: process.env.NODE_ENV ==='production'
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

