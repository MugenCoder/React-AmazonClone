// rfce
import React from 'react';
import "./Home.css";
import "./Product";
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img 
                    className="home__image" 
                    src="https://images-na.ssl-images-amazon.com/images/G/01/Audible/en_US/images/creative/amazon/Minerva_Gateway_Hero_Desktop_070820_PremiumPlus_1x._CB410855810_.jpg" 
                alt=""
                />

                <div className="home__row">
                    <Product />
                    <Product />
                </div>

                <div className="home__row">
                    <Product /> 
                    <Product /> 
                    <Product /> 
                </div>

                <div className="home__row">
                    <Product /> 
                    <Product /> 
                </div>

            </div>
        </div>
    )
}

export default Home
