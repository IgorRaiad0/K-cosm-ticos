import React, { useEffect, useState } from 'react';
import './Preloader.css';
import logo from '../../assets/logo.png';

const Preloader = ({ isLoading }) => {
    const [isExiting, setIsExiting] = useState(false);

    useEffect(() => {
        if (!isLoading) {
            setIsExiting(true);
        }
    }, [isLoading]);

    return (
        <div className={`preloader ${isExiting ? 'exit' : ''}`}>
            <div className="preloader-content">
                <div className="logo-wrapper">
                    <img src={logo} alt="K-Cosméticos Logo" className="preloader-logo" />
                </div>
            </div>
            <div className="preloader-bg"></div>
        </div>
    );
};

export default Preloader;
