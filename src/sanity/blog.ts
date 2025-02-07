



export const blog = {
    name: 'blog',
    title: 'blog',
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
        name:'description',
        type:'string'
      },

      {
        name: 'author',
        title: 'Author',
        type: 'string',  // You can use 'string' for name or 'reference' if you have an author document
      },
      {
        name: 'publishDate',
        title: 'Publish Date',
        type: 'datetime',  // This will allow you to add a date
      },
    ]
    }