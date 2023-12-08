import React from "react"
import './exercise.scss'
import image1 from "../../images/mob1.png"
import image3 from "../../images/mob3.png"
import image2 from "../../images/mob2.png"
import image4 from "../../images/mob5.png"
import image5 from "../../images/mob4.png"
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
						<div className="image-2" >
								<img src={image2} alt="ups;)" />
						</div>
							<img src={image3} alt="ups;)" className="image-3" />
					</div>
					<div className="box2">
						<div className="image-4">
							<img src={image5} alt="ups;)"  />
						</div>
						<div  className="image-5">
								<img src={image4} alt="ups;)" />
						</div>
						<AnchorLink className="box2__link-down" href="#nutrition"><BsArrowDownCircleFill /></AnchorLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default exercise