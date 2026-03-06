import React from 'react';
import Hero from './Hero/Hero';
import Suppliers from './Suppliers/Suppliers';
import Showcase from './Showcase/Showcase';
import Products from './Products/Products';
import WorkWithUs from './WorkWithUs/WorkWithUs';

const Home = () => {
    return (
        <>
            <Hero />
            <Suppliers />
            <Showcase />
            <Products />
            <WorkWithUs />
        </>
    );
};

export default Home;
