import { Instagram, Facebook, Music2 } from 'lucide-react';
import './Hero.css';
import heroVideo from '../../assets/hero-premium.mp4';
import logo from '../../assets/logo.png';

const Hero = ({ isLoading }) => {
    return (
        <section className="hero">
            <div className="hero-video-container">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="hero-video"
                >
                    <source src={heroVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="hero-text-wrapper">
                    <div className="hero-brand" style={{ opacity: isLoading ? 0 : 1, transition: 'opacity 0.3s ease 1.2s' }}>
                        <h1 className="hero-logo-container">
                            <img src={logo} alt="K Cosméticos Logo" className="hero-logo" />
                        </h1>
                        <div className="hero-socials-mini">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                            <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer"><Music2 size={20} /></a>
                        </div>
                    </div>
                    <p className="hero-description">
                        Descubra a harmonia perfeita entre ingredientes naturais e alta performance
                        para uma pele radiantemente saudável.
                    </p>
                    <div className="hero-actions">
                        <a href="#fornecedores" className="btn-primary">Explorar Coleção</a>
                    </div>
                </div>
            </div>

            <div className="hero-scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Deslize</span>
            </div>
            <div className="hero-bottom-blur"></div>
        </section>
    );
};

export default Hero;
