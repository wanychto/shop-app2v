import React from 'react';
import { type Item } from "../types/index";
import ModalPortal from "./ModalPortal";
import { useKey } from 'react-use';

type ProductModalProps = {
    product: Item | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    useKey('Escape', onClose);
    if (!isOpen || !product) return null;

    return (
        <ModalPortal>
            <div className="modal-overlay" onClick={onClose}>
                <div id="modal" className="modal" onClick={(e) => { e.stopPropagation(); }}>
                    <span id="close" className="close" onClick={onClose}>&times;</span>
                    <div className="modal-body">
                        <div className="modal-img">
                            <img id="modal-img" src={product.image} alt={product.title} />
                        </div>
                        <div className="modal-info">
                            <div id="modal-title" className="modal-title">{product.title}</div>
                            <p className="descrip">Характеристики товара:</p>
                            <div id="modal-desc" className="modal-desc">{product.description}</div>
                            <div id="modal-price" className="modal-price">{product.price}</div>
                            <button id="buy-btn" className="buy-btn">Купить</button>
                        </div>
                    </div>
                </div>
            </div>
        </ModalPortal >
    )
}

export default ProductModal;