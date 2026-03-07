import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../hooks/useProducts';
import './Products.css';

// URL da planilha vinda das variáveis de ambiente
const SHEET_URL = import.meta.env.VITE_SHEET_URL;

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { addToCart } = useCart();
    const { products, loading, error } = useProducts(SHEET_URL);

    // Lista fallback para caso a planilha não carregue ou enquanto não houver URL
    const fallbackProducts = [
        {
            id: 1,
            name: "Sérum Facial Iluminador",
            price: "R$ 129,90",
            category: "Skincare",
            tag: "Best Seller"
        },
        // ... outros produtos simplificados se necessário
    ];

    const productsList = products.length > 0 ? products : fallbackProducts;

    const nextSlide = () => {
        if (currentIndex < productsList.length - 1) {
            setCurrentIndex(prev => prev + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prev => prev - 1);
        } else {
            setCurrentIndex(productsList.length - 1);
        }
    };

    return (
        <section className="products-section" id="produtos">
            <div className="section-container">
                <div className="section-header">
                    <span className="section-tagline">Coleção Exclusiva</span>
                    <h2 className="section-title">Nossos Produtos</h2>
                    <p className="section-desc">
                        Produtos selecionados com as melhores tecnologias e ingredientes para realçar sua beleza natural.
                    </p>
                </div>

                <div className="products-carousel-wrapper">
                    <button className="carousel-btn prev" onClick={prevSlide} aria-label="Anterior">
                        <span>&#8249;</span>
                    </button>

                    <div className="products-carousel-window">
                        <div
                            className="products-track"
                            style={{ transform: `translateX(-${currentIndex * (310)}px)` }}
                        >
                            {loading ? (
                                <div className="loading-carousel">Carregando catálogo...</div>
                            ) : productsList.map((product) => (
                                <div className="product-card" key={product.id}>
                                    <div className="product-image-container">
                                        {product.image ? (
                                            <img src={product.image} alt={product.name} className="product-img" />
                                        ) : (
                                            <div className="product-placeholder">
                                                <span>{product.category}</span>
                                            </div>
                                        )}
                                        {product.tag && <span className="product-tag">{product.tag}</span>}
                                        <div className="product-overlay">
                                            <button
                                                className="btn-add"
                                                onClick={() => addToCart(product)}
                                            >
                                                Adicionar ao Carrinho
                                            </button>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <span className="product-category">{product.category}</span>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-price">{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <button className="carousel-btn next" onClick={nextSlide} aria-label="Próximo">
                        <span>&#8250;</span>
                    </button>
                </div>

                <div className="products-footer">
                    <Link to="/marketplace" className="btn-view-all">
                        Ver todos os Produtos
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Products;
