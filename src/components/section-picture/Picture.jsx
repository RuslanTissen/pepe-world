import React from "react"
import './Picture.scss'
import home from "../../images/photo-1.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { BsArrowDownCircleFill } from "react-icons/bs"

export default function Pictuer() {
	return (
		<div id="foto" className="picture">

			<div className='greetings'><h1>Welcome to <mark>Pipi</mark> health world.</h1></div>

			<div className="picture-container">
				<img src={home} alt="baner" className="onscroll-image-fade-in" />
			</div>

			<div className="moto">
				<div className="text-container">
					<p> Take <mark>control</mark> of your body</p>
				</div>
				<div className="button-container">
					<AnchorLink href="#philosophie"><BsArrowDownCircleFill /></AnchorLink>
				</div>

				{/* <p>Control your diet, sleep well, exercise regularly, live long.</p> */}
				{/* <a href="#">read more</a> */}
			</div>

		</div>
	)
}