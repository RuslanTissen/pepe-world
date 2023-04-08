import React from 'react'
import "./Nutrion.scss"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import picture from "../../images/nutrition.jpg"
import ntr1 from "../../images/ntr1.jpg"
import ntr2 from "../../images/ntr2.jpg"
import ntr3 from "../../images/ntr3.jpg"
import ntr4 from "../../images/ntr4.jpg"
import ntr5 from "../../images/ntr5.jpg"

function Nutrion() {
	return (
		<div className='nutrition'>
			<div className="nutrition-container">

				<div className='nutrition__picture--container'>
					<img src={picture} alt="" />
				</div>

				<div className='nutrition__text--container'>
					<h1>WE ARE WHAT WE EAT</h1>
				</div>

				<div className='nutrition__picture--container'>
					<img src={picture} alt="" />
				</div>
			</div>


			<Carousel>
				<div>
					<img src={ntr1} />
					<p className="legend">Legend 1</p>
				</div>
				<div>
					<img src={ntr2} />
					<p className="legend">Legend 2</p>
				</div>
				<div>
					<img src={ntr3} />
					<p className="legend">Legend 3</p>
				</div>
			</Carousel>

		</div>
	)
}

export default Nutrion