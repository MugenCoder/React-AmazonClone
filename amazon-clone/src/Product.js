import React from "react";
import "./Product.css";

function Product() {
	return (
		<div className="product">
			<div className="product__info">
				<p>The Lean Startup broken in pieces cuz this is all i got to prove that you got meeee</p>
				<p className="product__price">
					<small>$</small>
					<strong>19.99</strong>
				</p>
				<div className="product__rating">
					<p>🌟</p>
				</div>
            </div>

				<img
					src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
					alt=""
				/>

                <button>Add to Cart</button>
		</div>
	);
}

export default Product;
