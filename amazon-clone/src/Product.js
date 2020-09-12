import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider"

function Product({id, title, image, price, rating}) {
		const [{ basket }, dispatch] = useStateValue();

		console.log("Basket...Kobe", basket)

			const addToBasket = () => {
				// dispatch the item into the data layer to be pulled by StateProvider [redux data layer]
				// dispatch will be how we manipulate data; Our "gun" that shoots actions into the datt layer
				dispatch({
					type: "ADD_TO_BASKET",
					item: {
						id: id,
						title: title,
						image: image,
						price: price,
						rating: rating
					},
				});
			};

	return (
		<div className="product">
			<div className="product__info">
				<p>{title}</p>
				<p className="product__price">
					<small>$</small>
					<strong>{price}</strong>
				</p>

				<div className="product__rating">
					{Array(rating)
						.fill()
						.map((_, i) => ( // _ in our parameter bc I don't care what the first parameter is
						  <p>🌟</p>
						))}					
				</div>

            </div>
				<img src={image} alt="" />

                <button onClick={addToBasket}>Add to Cart</button>
		</div>
	);
}

export default Product;
