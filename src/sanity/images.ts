import { title } from "process";
import { defineField } from "sanity";


export const images = {
  name: 'images',
  type: 'document',
  title: 'Images',
  fields: [
    { name: 'title', title: 'Image title', type: 'string' },

    // Slug field
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required(),
    }),

    { name: 'description', title: 'Image description', type: 'text' },

    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      }
    },
    { name: 'price', title: 'Image price', type: 'number' },
    {
      name: 'stockLevel',
      type: 'number',
      title: 'Stock Level',
      validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
    },








  ]
}