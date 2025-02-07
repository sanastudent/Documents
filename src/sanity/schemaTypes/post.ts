

import { defineType, defineField, defineArrayMember } from "sanity";

export const post = defineType({
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post title',
      description: 'Title of the post',
      validation: Rule => Rule.required(),
    }),

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

    defineField({
      name: 'summary',
      type: 'text',
      title: 'Summary',
      validation: Rule => Rule.required(),
    }),

    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options:{
        hotspot:true
      }
    }),

    // Add Date Field (datePublished)
    defineField({
      name: 'datePublished',  // You can name it anything like 'date' or 'publishedAt'
      type: 'datetime',
      title: 'Publish Date',
      description: 'Date when the post was published',
      validation: Rule => Rule.required(),
    }),
  ]
})
