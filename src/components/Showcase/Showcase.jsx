import React from 'react';
import './Showcase.css';

const Showcase = () => {
    return (
        <section className="showcase-section">
            <div className="showcase-container">

                {/* Primeira Linha: Cosméticos */}
                <div className="showcase-row">
                    <div className="showcase-image-container">
                        <div className="image-placeholder">
                            <span>Imagem Cosméticos</span>
                        </div>
                    </div>
                    <div className="showcase-text-container">
                        <span className="showcase-tag">Cuidados & Beleza</span>
                        <h2 className="showcase-title">A Ciência da Beleza</h2>
                        <p className="showcase-description">
                            Nossa seleção de cosméticos reúne o que há de mais moderno em tecnologia estética.
                            Trabalhamos com marcas que priorizam ingredientes naturais e resultados comprovados,
                            garantindo que sua pele receba o cuidado que merece. Descubra texturas luxuosas e
                            fragrâncias envolventes que transformam sua rotina diária em um momento de puro prazer.
                        </p>
                    </div>
                </div>

                {/* Segunda Linha: Variedades (Acessórios) */}
                <div className="showcase-row reverse">
                    <div className="showcase-image-container">
                        <div className="image-placeholder">
                            <span>Imagem Acessórios</span>
                        </div>
                    </div>
                    <div className="showcase-text-container">
                        <span className="showcase-tag">Variedades & Estilo</span>
                        <h2 className="showcase-title">Acessórios Indispensáveis</h2>
                        <p className="showcase-description">
                            Além de cosméticos de alta performance, oferecemos uma linha completa de acessórios
                            essenciais. Explore nossa variedade de piranhas, escovas de cabelo ergonômicas e
                            itens que facilitam seu dia a dia. Combinamos funcionalidade e estilo para que você
                            esteja sempre pronta, realçando seu visual com praticidade e elegância.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showcase;
