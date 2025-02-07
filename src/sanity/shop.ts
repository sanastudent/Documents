

import { defineField } from "sanity";


// schemas/product.js
export const products = {
  name: 'products',
  title: 'Products',
  type: 'document',
  fields: [

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
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'price',
      type: 'number',
    },
    {name:'images',
      type:'image',
      title: 'Images',
      options: {
        hotspot: true, 
    }
  }
]
};
