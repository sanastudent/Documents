


type Post ={
	title:string,
	summary:string,
	image: {
		asset: {
		  _ref: string; // This is a reference to the image
		  _type: string; // "image" is the type
		};
		alt?: string; // Optional alt text for the image
	  };
	slug:string

}