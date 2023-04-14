import React from 'react'
import "./Nutrion.scss"
import AnchorLink from "react-anchor-link-smooth-scroll-v2"
import { BsArrowDownCircleFill } from "react-icons/bs"

function Nutrion() {
	return (
		<div className='nutrition' id='nutrition'>
			<div className="nutrition-container">
				<div className="nutrition__text--container">
					<h1>WE ARE WHAT WE EAT.</h1>
					<p>A Mediterranean diet remains one of the gold standards for living longer and more healthfully. This pattern is characterized by a high intake of fruits and vegetables, whole grains, pulses, healthful fats from nuts, olive oil, avocado, herbs and spices. It includes seafood a few times a week.</p>
				</div>

				<div className="link-container">
					<a href='mailto:priscylatosti@gmail.com' className="btn">learn more</a>
				</div>

			</div>

			<div className="nutrition__tips--container">
				<div className="images">
					<div className="img1 img"></div>
					<div className="tips__container tips__container1">
						<h2>Natural Diet.</h2>
						<p className='tips__text1'>Natural Diet has an integrative way to see food, what we look foward here is to beeing healthy with out restrictions just adding nutrients on each meal so as the main goal is gaining health this type of diet encourage people to listen to theirs bodys and eat when they really feels so, what is more, to eat what they need.</p>
					</div>
				</div>

				<div className="images"><div className="img2 img"></div>
					<div className="tips__container tips__container2">
						<h2>Keto Diet.</h2>
						<p className='tips__text2'>Keto Diet was a boom since it promised to make people lose weight but the really meaning of cutting off all the carbohidrates is to give a body rest of all artificial products but as carbs seems to be the same as sugar once they arrive to the body sistem this diet go a Little beyond and cut natural carbohidrates as rice, potatoes, fruits… So the body can focus on fat.</p>
					</div>
				</div>

				<div className="images"><div className="img3 img"></div>
					<div className="tips__container tips__container3">
						<h2>Low Carb Diet.</h2>
						<p className='tips__text3'>Low Carb Diet manage pretty similar to Keto diet but allows lots of food with diferents amounts of carbs, prioritizing real food instead baked goods or processed foods. This kind of diet suggest an easy going way to eat just looking foward nutrients on carbs and focusing on protein and fats. </p>
					</div>
				</div>

				<div className="images"><div className="img4 img"></div>
					<div className="tips__container tips__container4">
						<h2>Vegetarian Diet.</h2>
						<p className='tips__text4'>Vegetarian Diet exist since all the times but it wasn´t really supported by doctors for the lack of knowledge about nutirents and effects, nowadays there are people allergic to meat and even more animal lovers so the medicine had to improve and diets focused on plants, grains and cereals can bring all the nutrients humans needs with the correct match.</p>
					</div>
				</div>

				<div className="images"><div className="img5 img"></div>
					<div className="tips__container tips__container5">
						<h2>Fasting.</h2>
						<p className='tips__text5'>Fasting may provide several health benefits, including weight loss, improved blood sugar control, and decreased inflammation. It might also offer protection against certain conditions like cancer and neurodegenerative disorders. For many people, somewhere between 14 and 18 hours of fasting per day is the ideal range, providing more significant weight loss benefits than a 12-hour fast.</p>
					</div>
				</div>

				<div className="images"><div className="img6 img"></div>
					<div className="tips__container tips__container6">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur nesciunt exercitationem sit maxime eum consequuntur vel illum veniam eius expedita, vero iste laboriosam impedit repudiandae minima, dicta asperiores saepe?</p>
						<AnchorLink href="#stretching"><BsArrowDownCircleFill /></AnchorLink>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Nutrion


