
import { useEffect,useState } from "react";
import { useRouter } from "next/router";


const products = [
  { title: "Classic Wooden Armchair", name: "Classic Wooden Armchair", description: "Bring timeless elegance to your home with this classic wooden armchair. Crafted from durable hardwood, this chair features a comfortable upholstered seat and backrest, perfect for adding charm to your living room, hallway, or study" },
  { title: "Compact Accent Chair", name: "Compact Accent Chair", description: "This compact accent chair is the perfect addition to smaller spaces, offering a chic and functional seating option. With its sleek design and comfortable seat, it fits seamlessly into any room, adding a touch of style to your home decor." },
  { title: "Stylish Dining Chair Set", name: "Stylish Dining Chair Set", description: "Add elegance to your dining area with this stylish dining chair set. Featuring modern design and sturdy construction, these chairs offer comfort and support for long meals, making them perfect for family dinners or hosting guests" },
];



const SearchComponent = () => {
  const router = useRouter();
  const { q } = router.query;
  const [searchResults, setSearchResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState(q || ""); // Add local state for the search input

  useEffect(() => {
    if (q) {
      // Ensure 'q' is a string before calling toLowerCase
      const query = Array.isArray(q) ? q[0] : q; // Convert to string if it's an array

      // Filter products based on the query
      const filteredResults = products.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [q]);

  // Update URL query when user types
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    router.push(`/?q=${value}`); // Update the query in the URL
  };

  return (
    <div className="search-page">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <h1>{`Search Results for "${q}"`}</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result, index) => (
            <li key={index}>
              <strong>{result.name}</strong> - {result.description}
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};
