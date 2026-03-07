import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { useProducts } from '../../hooks/useProducts';
import './Marketplace.css';

const SHEET_URL = import.meta.env.VITE_SHEET_URL;

const Marketplace = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Todos');
    const { addToCart } = useCart();
    const { products, loading, error } = useProducts(SHEET_URL);

    // Dados expandidos para o Marketplace (Fallback)
    const fallbackProducts = [
        { id: 1, name: "Sérum Facial Iluminador", price: "R$ 129,90", category: "Skincare", tag: "Best Seller" },
        // ... outros produtos simplificados
    ];

    const productsList = products.length > 0 ? products : fallbackProducts;

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
                        <Search className="search-icon-svg" size={20} />
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
                    {loading ? (
                        <div className="loading-state">Carregando produtos...</div>
                    ) : filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div className="marketplace-card" key={product.id}>
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
