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
                    <Product title="Lenovo Flex 5 Touch Display, AMD Ryzen 5 4500U Processor, 16GB DDR4, 256GB SSD, Digital Pen Included, Win 10, Graphite Grey" 
                        price={599.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81x%2B9uFY1QL._AC_SL1500_.jpg" 
                        rating={5}
                    />
                    <Product title="Philips Sonicare ProtectiveClean 5100 Gum Health, Rechargeable electric toothbrush with pressure sensor, Black HX6850/60, 1 Count" 
                        price={79.95} 
                        image="https://images-na.ssl-images-amazon.com/images/I/81TsSvh4ClL._SL1500_.jpg" 
                        rating={5} 
                    />
                    <Product title="Moxi Skates - Beach Bunny - Fashionable Womens Roller Skates" 
                        price={449.95} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61oHYEg432L._AC_SL1000_.jpg" 
                        rating={4} 
                    />
                </div>

                <div className="home__row">
                    <Product title="Funko POP! Rocks: Tupac - Vest with Bandana, Multicolour, 3.75 inches" price={8.78} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61KKLO-HoqL._AC_SL1300_.jpg" 
                        rating={4}
                    /> 
                    <Product title="Funko My Hero Academia Katsuki Bakugo Summer Convention Shared Exclusive POP! Vinyl" 
                        price={75.98} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61uPATck7bL._AC_SL1024_.jpg" 
                        rating={5}
                    /> 
                    <Product 
                        title="Funko Pop! Star Wars: The Mandalorian - The Child with Frog, Multicolor" 
                        price={7.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51%2BeEdKmT9L._AC_SL1154_.jpg" 
                        rating={3} 
                    /> 
                </div>

                <div className="home__row">
                    <Product title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback" 
                        price={29.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                        rating={4} 
                    />                     
                    <Product title="MyGift Wall-Mounted Organizer with Cork Bulletin Board, Mail Holder, Key Hooks, Flower Vase" 
                        price={62.51} 
                        image="https://images-na.ssl-images-amazon.com/images/I/91%2BA3VE9lOL._AC_SL1500_.jpg" 
                        rating={4}
                    /> 
                    <Product title="YSAGi Multifunctional Ultra Thin Waterproof Office Desk Pad, (Calamine Blue+Cobalt Green)" 
                        price={17.99} 
                        image="https://images-na.ssl-images-amazon.com/images/I/712x6R9RDBL._AC_SL1500_.jpg" 
                        rating={4}
                    /> 

                    <Product title="Sunny Isle Extra Dark Jamaican Black Castor Oil" 
                        price={12.80} 
                        image="https://images-na.ssl-images-amazon.com/images/I/61Gf5OigwzL._SL1200_.jpg" 
                        rating={4} 
                    /> 
                </div>

            </div>
        </div>
    )
}

export default Home
