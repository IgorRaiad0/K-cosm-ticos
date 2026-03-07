import React, { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Send, Trash2 } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const Cart = () => {
    const {
        cart,
        removeFromCart,
        updateQuantity,
        cartTotal,
        cartCount,
        clearCart,
        isCartOpen,
        toggleCart
    } = useCart();

    const formatPrice = (price) => {
        return price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const handleCheckout = () => {
        if (cart.length === 0) return;

        let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n";

        cart.forEach(item => {
            message += `*${item.quantity}x ${item.name}* - ${formatPrice(item.priceNumber * item.quantity)}\n`;
        });

        message += `\n*Total do Pedido: ${formatPrice(cartTotal)}*`;

        const encodedMessage = encodeURIComponent(message);
        const whatsappNumber = "5511999999999"; // TODO: Substituir pelo número real do cliente
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <>
            {/* Botão Flutuante */}
            <button className={`cart-floating-btn ${cartCount > 0 ? 'visible' : ''}`} onClick={toggleCart}>
                <ShoppingBag size={24} />
                {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* Overlay */}
            <div className={`cart-overlay ${isCartOpen ? 'active' : ''}`} onClick={toggleCart}></div>

            {/* Carrinho Lateral */}
            <aside className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
                <div className="cart-header">
                    <h2>Meu Carrinho</h2>
                    <button className="close-btn" onClick={toggleCart}>
                        <X size={24} />
                    </button>
                </div>

                <div className="cart-content">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <ShoppingBag size={64} opacity={0.2} />
                            <p>Seu carrinho está vazio</p>
                            <button className="btn-continue" onClick={toggleCart}>Continuar Comprando</button>
                        </div>
                    ) : (
                        <div className="cart-items">
                            {cart.map(item => (
                                <div className="cart-item" key={item.id}>
                                    <div className="item-img-placeholder">
                                        {item.category[0]}
                                    </div>
                                    <div className="item-details">
                                        <div className="item-title-row">
                                            <h3>{item.name}</h3>
                                            <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                        <p className="item-price">{formatPrice(item.priceNumber)}</p>
                                        <div className="item-controls">
                                            <div className="quantity-selector">
                                                <button onClick={() => updateQuantity(item.id, -1)}><Minus size={14} /></button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}><Plus size={14} /></button>
                                            </div>
                                            <span className="item-subtotal">
                                                {formatPrice(item.priceNumber * item.quantity)}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="cart-summary">
                            <div className="summary-row">
                                <span>Subtotal</span>
                                <span>{formatPrice(cartTotal)}</span>
                            </div>
                            <div className="summary-row total">
                                <span>Total</span>
                                <span>{formatPrice(cartTotal)}</span>
                            </div>
                        </div>
                        <button className="checkout-btn" onClick={handleCheckout}>
                            <Send size={18} />
                            Finalizar no WhatsApp
                        </button>
                        <button className="clear-btn" onClick={clearCart}>Limpar Carrinho</button>
                    </div>
                )}
            </aside>
        </>
    );
};

export default Cart;
