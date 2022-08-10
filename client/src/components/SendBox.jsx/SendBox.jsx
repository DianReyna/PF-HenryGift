import React from 'react'
import { useSelector } from 'react-redux';

const SendBox = () => {

	const cart = useSelector(state => state.cart);
	console.log(cart)


  return (
    <div>
			{cart.cartTotalQuantity === 1 ? (
				<div className="send-left">
					<div className="send-title">
						<h2>Regalo 1/{cart.cartTotalQuantity}</h2>
						<div className="card-send">
							<div className="card-send-title">
								{cart.cartItems[0].name}
							</div>
							<div className="parchase-details">
								

							</div>

						</div>
					</div>
				</div>
			) : (null) } 
		</div>
  )
}

export default SendBox