import React from 'react';
import './Checkout.css';
import Subtotal from "./Subtotal.js"
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider'

function Checkout() {
		// render entire cart using useStateValue hook to pull cart items
		const [{ basket }, dipatch] = useStateValue();

	return (
		<div className="checkout">
			<div className="checkout__left">
				<img 
					className="checkout__ad"
					src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
					alt=""
				/>

				<div>
					<h2 className="checkout__title">Your shopping cart
					</h2>

					<CheckoutProduct 
							id='537'
							title="Funko My Hero Academia Katsuki Bakugo Summer Convention Shared Exclusive POP! Vinyl" 
							image="https://images-na.ssl-images-amazon.com/images/I/61uPATck7bL._AC_SL1024_.jpg" 
							price={8.78}
							rating= {5}
						/>
						<CheckoutProduct 
							id='538'
							title="Funko POP! Rocks: Tupac - Vest with Bandana, Multicolour, 3.75 inches"
							image="https://images-na.ssl-images-amazon.com/images/I/61KKLO-HoqL._AC_SL1300_.jpg"  
							price={75.98}
							rating= {5}
						/>

					{basket.map(item => (
						<CheckoutProduct 
							id={item.id}
							title={item.title}
							image={item.image}
							price={item.price}
							rating= {item.rating}
						/>
					))}

					{/* CheckoutProduct */}
					{/* CheckoutProduct */}
					{/* CheckoutProduct */}
					{/* CheckoutProduct */}
					{/* CheckoutProduct */}

				</div>
			</div>

				<div className="checkout__right">
					<Subtotal />
				</div>
		</div>
	)
}

export default Checkout;
