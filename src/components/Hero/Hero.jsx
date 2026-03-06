import './Hero.css';
import heroVideo from '../../assets/hero-premium.mp4';
import logo from '../../assets/logo.png';

const Hero = () => {
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
                    <h1 className="hero-logo-container">
                        <img src={logo} alt="K Cosméticos Logo" className="hero-logo" />
                    </h1>
                    <p className="hero-description">
                        Descubra a harmonia perfeita entre ingredientes naturais e alta performance
                        para uma pele radiantemente saudável.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary">Explorar Coleção</button>
                        <button className="btn-secondary">Nossa História</button>
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
