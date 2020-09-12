import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import Product from "./Product" 
import { getBasketTotal } from './reducer';

function Subtotal() {
		const [{ basket }, dispatch] = useStateValue();

	return <div className="subtotal">
		<CurrencyFormat 
			renderText={(value) => (
				<>
					<p>
						Subtotal ({basket?.length} items):
						<strong>{value}</strong>
					</p>
					<small className="subtotal__gift">
						<input type="checkbox" /> This order contains a gift
					</small>
				</>
			)}	
			decimalScale={2}
			value={getBasketTotal(basket)}	// default value is set to 0 until items add to cart
			displayType={"text"}
			thousandSeparator={true}
			prefix={"$"}
		/>

		<button>Proceed to Checkout</button>
	</div>
	
}

export default Subtotal
