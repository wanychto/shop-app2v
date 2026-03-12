import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import productsData from "./data/data.json";
import { type Item } from "./types";
import { useState, useEffect } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const [filteredProducts, setFilteredProducts] = useState<Item[]>(productsData);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchTerm.trim()) {
        const filtered = productsData.filter(item =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(productsData);
      }
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchTerm]);
  return (
    <div className="wrapper">
      <Header title="Магазин" searchTerm={searchTerm} onSearch={setSearchTerm} />
      <ProductGrid products={filteredProducts} />
    </div>
  )
}

export default App
