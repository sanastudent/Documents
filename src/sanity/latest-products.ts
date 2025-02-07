

import { Rule } from '@sanity/types';


export const latest = {
    name: 'latest',
    title: 'Latest',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Product Image',
        type: 'image',
        options: {
          hotspot: true, // allows you to crop the image
        },
      },
      {
        name: 'regularPrice',
        title: 'Regular Price',
        type: 'number',
        validation: (Rule: Rule) => Rule.required().min(0),
      },
      {
        name: 'discountedPrice',
        title: 'Discounted Price',
        type: 'number',
        validation: (Rule: Rule) => Rule.required().min(0),
      },
      {
        name: 'stockLevel',
        type: 'number',
        title: 'Stock Level',
        validation: (Rule: any) => Rule.min(0).error('Stock level must be a positive number.'),
      },
    
    ],
  };
  