import React from "react"
import './exercise.scss'
import image1 from "../../images/mob1.jpg"
import image2 from "../../images/mob2.jpg"
import image3 from "../../images/mob3.jpg"
import image4 from "../../images/mob5.jpg"
import image5 from "../../images/mob4.jpg"
import AnchorLink from "react-anchor-link-smooth-scroll-v2"
import { BsArrowDownCircleFill } from "react-icons/bs"

function exercise() {
	return (
		<div className="exercise" id="exercise">
			<div className="exercise-text">
				<h1>STRENGTH.</h1>
				<p>Mobility.</p>
			</div>

			<div className="exercise-images">
				<div className="exercise-images-big">
					<img src={image1} alt="ups;)" />
				</div>
				<div className="exercise-images-small">
					<div className="box1">
						<img src={image2} alt="" className="image-2" />
						<img src={image3} alt="" className="image-3" />
					</div>
					<div className="box2">
						<img src={image5} alt="" className="image-4" />
						<img src={image4} alt="" className="image-5" />
						<AnchorLink href="#nutrition"><BsArrowDownCircleFill /></AnchorLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default exercise