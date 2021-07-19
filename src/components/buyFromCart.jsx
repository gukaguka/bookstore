import React from 'react';
import './buy.css'


function BuyFromCart(props){
	return(props.trigger) ? (
		<div className='popup'>
			<div className='inner'>
				<button className='buy-close' onClick={()=>{props.setTrigger(false);}}>X</button>
				{ props.children }
			</div>
		</div>
		) : '';
}


export default BuyFromCart;