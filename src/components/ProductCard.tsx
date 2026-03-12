import { type Item } from "../types/index";
import React, { useState } from 'react';
import ProductModal from "./ModalWindow";

type ProductCardProps = {
    product: Item;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <div className="card" onClick={() => setIsModalOpen(true)}>
                <img src={product.image} alt={product.title} />
                <h3>{product.title}</h3>
                <p>{product.price} ₽</p>
            </div>
            <ProductModal product={product} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </>
    );
};

export default ProductCard;