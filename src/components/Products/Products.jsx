import React, { useState } from 'react';
import './Products.css';

const Products = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Dados de exemplo para o catálogo
    const productsList = [
        {
            id: 1,
            name: "Sérum Facial Iluminador",
            price: "R$ 129,90",
            category: "Skincare",
            tag: "Best Seller"
        },
        {
            id: 2,
            name: "Batom Matte Velvet Lux",
            price: "R$ 64,90",
            category: "Maquiagem",
            tag: "Novo"
        },
        {
            id: 3,
            name: "Perfume Essência Gold",
            price: "R$ 249,00",
            category: "Fragrâncias",
            tag: "Premium"
        },
        {
            id: 4,
            name: "Máscara Capilar Nutritiva",
            price: "R$ 89,90",
            category: "Cabelos",
            tag: "Natural"
        },
        {
            id: 5,
            name: "Tônico Facial Purificante",
            price: "R$ 79,90",
            category: "Skincare",
            tag: "Novo"
        },
        {
            id: 6,
            name: "Óleo Corporal Radiance",
            price: "R$ 159,00",
            category: "Corpo",
            tag: "Premium"
        }
    ];

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
                            {productsList.map((product) => (
                                <div className="product-card" key={product.id}>
                                    <div className="product-image-container">
                                        <div className="product-placeholder">
                                            <span>{product.category}</span>
                                        </div>
                                        {product.tag && <span className="product-tag">{product.tag}</span>}
                                        <div className="product-overlay">
                                            <button className="btn-add">Adicionar ao Carrinho</button>
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
            </div>
        </section>
    );
};

export default Products;
