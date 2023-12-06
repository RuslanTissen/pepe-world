import React from "react"
import './Stretching.scss'
import str from "../../images/str.jpg"
import Button from '@mui/material/Button';

function MidSection(props) {

	return (
		<div className="stretching" id="stretching">

			<div className="stretching__text-box">
				<h1>All Programs as Unique as You Are.</h1>
			</div>

			<div className="stretching__image-box">
				<div className="stretching__image">
					<img src={str} alt="" />
				</div>

				<div className="stretching__text">
					<div className="stretching__text--container">
						<h2>Contact me if you want to change the way you train and start to connect with your body!</h2>
						{/* <p>During stretching, more oxygen and blood enters the muscle, and metabolism improves. As a result, the muscle recovers faster after a workout or injury.</p> */}
						{/* <p className="extra-text">Yes, you can lose weight from stretching, this is due to the fact that during stretching, muscle fibers receive more oxygen. As a result, blood circulation improves, nutrients are fully supplied to the tissue structures.</p> */}
					</div>
					<div className="link-container">
						<a href='mailto:priscylatosti@gmail.com' className="btn">Contact</a>
					</div>
				</div>
			</div>

			<div className="stretching__virtual-box">
				<h1>If you want to train with me virtual or as a personal trainer.</h1>
				<Button href='mailto:priscylatosti@gmail.com' variant="contained" color="info">Contact me</Button>
			</div>

		</div>
	)
}

export default MidSection