import React from 'react';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';
import "./Home.css"

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;