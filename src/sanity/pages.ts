


import { defineType, defineField, defineArrayMember } from "sanity";

export const pages = defineType({
  name: 'pages',
  type: 'document',
  title: 'Pages',
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
      name: 'description',
      type: 'text',
      title: 'Description',
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
    
    defineField({
      name: 'price',
      type: 'number',
      title: 'Price',
    
    }),

  
  ]
})










// import { Rule } from '@sanity/types';


// export const pages = {
//   name: 'pages',
//   title: 'Pages',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string'
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'title',
//         maxLength: 96
//       }
//     },
//     {
//       name:'description',
//       title:'Description',
//       type:'string'
//     },
//     {
//       name: 'mainImage',
//       title: 'Main Image',
//       type: 'image',
//       options: {
//         hotspot: true,
//       }
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: (Rule: Rule) => Rule.min(0).error('Price must be a positive number'),

//     }
//   ]
// }
