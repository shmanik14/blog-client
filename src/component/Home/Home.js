import React from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';
import Sliders from '../Sliders/Sliders';

const Home = () => {
    return (
        <div>
            <Header />
            <Sliders />
            <Category />
        </div>
    );
};

export default Home;