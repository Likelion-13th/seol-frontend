import React from 'react';
import Menu from './Menu';
import Banner from './Banner';
import "../../styles/Home.css";
import AboutUs from "../../components/AboutUs.js";
const Home = () => {
    return (
        <>
            <div className='home-container'>
                <Banner />
                <Menu />
            </div>
            <div>
                <AboutUs/>
            </div>
        </>
    );
};

export default Home;