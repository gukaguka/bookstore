import React from 'react';
import './buy.css'
 
 const OpenWindow = (props) => {
 return (props.trigger) ?(
 	<div className='grey-area'>
		 <div className='newWindow'>
		 <button className='buy-close' onClick={()=>{props.setTrigger(false);}}>X</button>
		 {props.children}
  		</div>
  	</div>
  		 ) : '';
 }

 export default OpenWindow;