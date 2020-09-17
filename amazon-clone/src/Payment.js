import React, { useState } from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'; 	
import { Link } from "react-router-dom";
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { getBasketTotal } from './reducer';
import CurrencyFormat from "react-currency-format";

function Payment() {
	const [{ basket, user }, dispatch] = useStateValue();

	const stipe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceeded] = useState(false);
	const [processing, setProcessing] = useState("");
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);

	const handleSubmit = async (event) => {
		//prevent users from clicking the "buy" button more than once
		event.preventDefault(); 
		setProcessing(true);

		// const Payload = await stripe 
	}

	const handleChange = event => {
		// Listen for changes in the CardElement
		// Display any errors as the customer types their card details
		setDisabled(event.empty);
		// if there's an err, show it otherwise show nothing
		setError(event.error ? event.error.message: "")
	}

	return (
		<div className='payment'>
			<div className='payment__container'>
				<h1>
					Checkout (
					<Link to='/checkout'>{basket?.length} items</Link>
					)
				</h1>

				{/* Payment section - Delivery Address */}
				<div className='payment__section'> 
					<div className='payment__title'>
						<h3>Delivery Address</h3>
					</div>
					<div className='payment__address'>
						<p>{user?.email}</p>			
						<p>123 React Lane</p>
						<p>Los Angeles, CA</p>
					</div>
				</div>

				{/* Payment section - Review Items */}
				<div className='payment__section'> 
					<div className='payment__title'>
						<h3>Review items and delivery</h3>
					</div>
					<div className='payment__items'>
						{basket.map(item => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
							/>
						))}
					</div>
				</div>

				{/* Payment section - Payment method */}
				<div className='payment__section'> 
					<div className='payment__title'>
						<h3>Payment Method</h3>
					</div>
					<div className='payment__details'>
						{/* Stripe magic */}

						<form onSubmit={handleSubmit}>
							<CardElement onChange={handleChange} />
							<div className='payment__priceContainer'>
								<CurrencyFormat 
									renderText={(value) => (
										<h3>Order Total: {value}</h3>
									)}
									decimalScale={2}
									value={getBasketTotal(basket)} 
									displayType={"text"}
									thousandSeparator={true}
									prefix={"$"}
								/>
								<button disabled={processing || disabled || succeeded}>
									<span>{processing? <p>Processing</p> : 
									"Buy Now"}</span>
								</button>
							</div>
								{/* Errors */}
									{error && <div>{error}</div>}
						</form>
					</div>
				</div>

			</div>
		</div>
	)
}

export default Payment
