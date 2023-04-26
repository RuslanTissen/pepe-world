import React from 'react'
import "./Nutrion.scss"
import AnchorLink from "react-anchor-link-smooth-scroll-v2"
import { BsArrowDownCircleFill } from "react-icons/bs"

function Nutrion() {
	return (
		<div className='nutrition' id='nutrition'>
			<div className="nutrition-container">
				<div className="nutrition__text--container">
					<h1>WE BECOME WHAT WE EAT.</h1>
					<p>A Mediterranean diet remains one of the gold standards for living longer and more healthfully. This pattern is characterized by a high intake of fruits and vegetables, whole grains, pulses, healthful fats from nuts, olive oil, avocado, herbs and spices. It includes seafood a few times a week.</p>
				</div>

				<div className="link-container">
					<a href='mailto:priscylatosti@gmail.com' className="btn">learn more</a>
				</div>

			</div>

			<div className="nutrition__tips--container">
				<div className="images">
					<div className="img1 images-img"></div>
					<div className="tips__container tips__container1">
						<h2>LIVING HEALTHY.</h2>
						<p className='tips__text1'>This philosophy focuses on nutrition and body goals equally. It seeks an optimal balance between fit, lean and muscle. It is an approach to finding the best version of yourself and your desired lifestyle. This type of program encourages people to listen to their body and only eat when they really feel the need to.</p>
					</div>
				</div>

				<div className="images">
					<div className="img2 images-img"></div>
					<div className="tips__container tips__container2">
						<h2>MAKING MUSCLE.</h2>
						<p className='tips__text2'>This is for builders! Are you in the process of building muscle? Then this is the perfect program for you. I will introduce you to the perfect protein diet and best exercises to help you achieve your fitness goals.</p>
					</div>
				</div>

				<div className="images">
					<div className="img3 images-img"></div>
					<div className="tips__container tips__container3">
						<h2>VEGAN-LAND.</h2>
						<p className='tips__text3'>This plan is for those animal lovers, those who want to change the nutritional rules and standards for muscle building and strength training.</p>
						<AnchorLink href="#stretching"><BsArrowDownCircleFill /></AnchorLink>
					</div>
				</div>

				{/* <div className="images"><div className="img4 img"></div>
					<div className="tips__container tips__container4">
						<h2>Vegetarian Diet.</h2>
						<p className='tips__text4'>Vegetarian Diet exist since all the times but it wasn´t really supported by doctors for the lack of knowledge about nutirents and effects, nowadays there are people allergic to meat and even more animal lovers so the medicine had to improve and diets focused on plants, grains and cereals can bring all the nutrients humans needs with the correct match.</p>
					</div>
				</div> */}

				{/* <div className="images"><div className="img5 img"></div>
					<div className="tips__container tips__container5">
						<h2>Fasting.</h2>
						<p className='tips__text5'>Fasting may provide several health benefits, including weight loss, improved blood sugar control, and decreased inflammation. It might also offer protection against certain conditions like cancer and neurodegenerative disorders. For many people, somewhere between 14 and 18 hours of fasting per day is the ideal range, providing more significant weight loss benefits than a 12-hour fast.</p>
					</div>
				</div> */}

				{/* <div className="images"><div className="img6 img"></div>
					<div className="tips__container tips__container6">
						<h2>Autophagy.</h2>
						<p className='tips__text6'>Japanese cell biologist Yoshinori Ohsumi won the Nobel Prize in Medicine in 2016 for his research on how cells recycle and renew their content, a process called autophagy. Fasting activates autophagy, which helps slow down the aging process and has a positive impact on cell renewal.</p>
						<AnchorLink href="#stretching"><BsArrowDownCircleFill /></AnchorLink>
					</div> */}
				{/* </div> */}
			</div>
		</div>
	)
}

export default Nutrion


