import React from 'react'
import ProductCard from "./ProductCard"
import { type Item } from "../types/index"

type ProdactGridProps = {
    products: Item[];
}
const ProductGrid: React.FC<ProdactGridProps> = ({ products }) => {
    if (products.length === 0) {
        return (<p id="no-results" className="no-results">Ничего не найдено:( Попробуйте изменить поисковой запрос</p>);
    }
    return (
        <div className="products-grid">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductGrid