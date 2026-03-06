import React from 'react';
import './Suppliers.css';

// Importando imagens da pasta com erro de digitação conforme planejado
import avon from '../../assets/forncedores/avon.jpg';
import belabere from '../../assets/forncedores/belabere.jpg';
import hosil from '../../assets/forncedores/hosil.png';
import japinha from '../../assets/forncedores/japinha.webp';
import natura from '../../assets/forncedores/natura.webp';
import newcosmetico from '../../assets/forncedores/newcosmetico.png';
import outralogo from '../../assets/forncedores/nn1sc88.png';
import veggue from '../../assets/forncedores/veggue.webp';

const Suppliers = () => {
    const supplierLogos = [
        { name: 'Avon', src: avon },
        { name: 'Bela Bere', src: belabere },
        { name: 'Hosil', src: hosil },
        { name: 'Japinha', src: japinha },
        { name: 'Natura', src: natura },
        { name: 'New Cosmético', src: newcosmetico },
        { name: 'Parceiro', src: outralogo },
        { name: 'Veggue', src: veggue },
    ];

    // Duplicamos a lista para criar o efeito infinito sem gaps
    const doubleLogos = [...supplierLogos, ...supplierLogos, ...supplierLogos];

    return (
        <section className="suppliers-section">
            <div className="suppliers-container">
                <h2 className="suppliers-title">Nossos principais fornecedores</h2>

                <div className="suppliers-carousel">
                    <div className="suppliers-track">
                        {doubleLogos.map((logo, index) => (
                            <div className="supplier-item" key={index}>
                                <img src={logo.src} alt={logo.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suppliers;
