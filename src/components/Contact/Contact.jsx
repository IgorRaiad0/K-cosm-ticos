import React from 'react';
import { MessageCircle, Send, User, Mail, MessageSquare } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Lógica de envio será implementada futuramente
        alert("Mensagem enviada com sucesso! (Simulação)");
    };

    return (
        <section className="contact-section" id="contato">
            <div className="contact-container">
                <div className="contact-whatsapp">
                    <span className="contact-tag">Fale Conosco</span>
                    <h2 className="contact-title">Atendimento Imediato via WhatsApp</h2>
                    <p className="contact-text">
                        Prefere uma conversa rápida? Nossa equipe está pronta para te atender,
                        tirar dúvidas sobre produtos ou auxiliar em sua compra agora mesmo.
                    </p>
                    <a
                        href="https://wa.me/seunumeroaqui"
                        className="btn-whatsapp-large"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <MessageCircle size={24} />
                        Iniciar Conversa no WhatsApp
                    </a>
                </div>

                <div className="contact-form-wrapper">
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label><User size={16} /> Nome Completo</label>
                            <input type="text" placeholder="Seu nome" required />
                        </div>
                        <div className="form-group">
                            <label><Mail size={16} /> E-mail</label>
                            <input type="email" placeholder="seu@email.com" required />
                        </div>
                        <div className="form-group">
                            <label><MessageSquare size={16} /> Mensagem</label>
                            <textarea placeholder="Como podemos te ajudar?" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-send-form">
                            <Send size={18} />
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
