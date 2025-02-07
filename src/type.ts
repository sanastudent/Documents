
// Define the Post type in a single file
export type Post = {
    title: string;
    description: string;
    price: number;
    slug: { current: string };  // Define slug as an object with a 'current' string field
    image?: {  // Make image optional
      asset: {
        _ref: string;
      };
    };
  };
  