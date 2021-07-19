import React from 'react';
import './buy.css'


function Buy(props){
	return(props.trigger) ? (
		<div className='popup'>
			<div className='inner1'>
				<button className='buy-close' onClick={()=>{props.setTrigger(false);}}>X</button>
				{ props.children }
			</div>
		</div>
		) : '';
}


export default Buy;