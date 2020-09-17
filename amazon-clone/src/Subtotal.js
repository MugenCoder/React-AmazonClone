import React from 'react'
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useHistory } from 'react-router-dom'

function Subtotal() {
		// include browser history from Router
		const history = useHistory();
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

		{/* use history.push to programmatically push the user to the payment page while holding our styling */}
		<button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
	</div>
	
}

export default Subtotal
