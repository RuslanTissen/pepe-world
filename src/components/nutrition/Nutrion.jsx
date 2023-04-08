import React from 'react'
import "./Nutrion.scss"
import picture from "../../images/nutrition.jpg"

function Nutrion() {
	return (
		<div className='nutrition'>
			<div className='nutrition__picture--container'>
				<img src={picture} alt="" />
			</div>

			<div className='nutrition__text--container'>

			</div>



		</div>
	)
}

export default Nutrion