import React, { useState, useMemo } from 'react';
import './Marketplace.css';

const Marketplace = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    // Dados expandidos para o Marketplace
    const productsList = [
        { id: 1, name: "Sérum Facial Iluminador", price: "R$ 129,90", category: "Skincare", tag: "Best Seller" },
        { id: 2, name: "Batom Matte Velvet Lux", price: "R$ 64,90", category: "Maquiagem", tag: "Novo" },
        { id: 3, name: "Perfume Essência Gold", price: "R$ 249,00", category: "Fragrâncias", tag: "Premium" },
        { id: 4, name: "Máscara Capilar Nutritiva", price: "R$ 89,90", category: "Cabelos", tag: "Natural" },
        { id: 5, name: "Tônico Facial Purificante", price: "R$ 79,90", category: "Skincare", tag: "Novo" },
        { id: 6, name: "Óleo Corporal Radiance", price: "R$ 159,00", category: "Corpo", tag: "Premium" },
        { id: 7, name: "Escova de Cabelo Ergonômica", price: "R$ 45,00", category: "Acessórios", tag: "Essencial" },
        { id: 8, name: "Kit Piranhas Color", price: "R$ 25,00", category: "Acessórios", tag: "Promo" },
        { id: 9, name: "Base Fluida Alta Cobertura", price: "R$ 85,00", category: "Maquiagem", tag: "Novo" },
        { id: 10, name: "Creme de Mãos Karité", price: "R$ 35,00", category: "Corpo", tag: "Natural" },
        { id: 11, name: "Condicionador Revitalizante", price: "R$ 55,00", category: "Cabelos", tag: "Natural" },
        { id: 12, name: "Gloss Labial 3D", price: "R$ 39,90", category: "Maquiagem", tag: "Pop" },
    ];

    const categories = ['Todos', 'Skincare', 'Maquiagem', 'Fragrâncias', 'Cabelos', 'Corpo', 'Acessórios'];

    const filteredProducts = useMemo(() => {
        return productsList.filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'Todos' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        });
    }, [searchTerm, selectedCategory]);

    return (
        <div className="marketplace-page">
            <div className="marketplace-container">
                <header className="marketplace-header">
                    <h1 className="marketplace-title">Nossa Vitrine</h1>
                    <p className="marketplace-subtitle">Explore nossa coleção completa de beleza e acessórios</p>
                </header>

                <div className="marketplace-controls">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Pesquisar produtos..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>

                    <div className="filter-categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="marketplace-grid">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="marketplace-card" key={product.id}>
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
                        ))
                    ) : (
                        <div className="no-results">
                            <p>Nenhum produto encontrado para sua busca.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
