import React from "react"
import './Picture.scss'
import home from "../../images/photo-1.png"

export default function Pictuer() {
	return (
		<div id="foto" className="picture">

			<div className='greetings'><h1>Bienvenido a la Zona de Salud de Pepe!</h1></div>
			
			<div className="picture-container">
				<img src={home} alt="baner" className="onscroll-image-fade-in"/>
			</div>

			<div className="moto">
				<h2> Take control of your body</h2>
				<p>Control your diet, sleep well, exercise regularly, live long.</p>
				<a href="#">read more</a>
			</div>

		</div>
	)
}