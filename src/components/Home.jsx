import React from 'react';
import Hero from './Hero/Hero';
import Suppliers from './Suppliers/Suppliers';
import Showcase from './Showcase/Showcase';
import About from './About/About';
import Products from './Products/Products';
import WorkWithUs from './WorkWithUs/WorkWithUs';
import Location from './Location/Location';
import Contact from './Contact/Contact';

const Home = ({ isLoading }) => {
    return (
        <>
            <Hero isLoading={isLoading} />
            <Suppliers />
            <Showcase />
            <Products />
            <WorkWithUs />
            <Location />
            <About />
            <Contact />
        </>
    );
};

export default Home;
