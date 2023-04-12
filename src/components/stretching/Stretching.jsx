import React from "react"
import './Stretching.scss'
import str from "../../images/str.jpg"

function MidSection(props) {

	return (
		<div className="stretching" id="stretching">

			<div className="stretching__text-box">
				<h1>A Program as Unique as You Are.</h1>
			</div>

			<div className="stretching__image-box">
				<div className="stretching__image">
					<img src={str} alt="" />
				</div>

				<div className="stretching__text">
					<div className="stretching__text--container">
						<h2>Lorem, ipsum.</h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem quisquam ratione hic possimus blanditiis. Eaque, architecto consectetur laudantium recusandae dolorem neque? Nihil animi explicabo dolores corrupti ab laborum fugit nesciunt.</p>
					</div>
					<div className="link-container">
						<a href='mailto:priscylatosti@gmail.com' className="btn">learn more</a>
					</div>
				</div>
			</div>

		</div>
	)
}

export default MidSection








// let { price, title, text, image, a } = props

{/* <div className="section">
			<img className="img" src={image} alt="image" />
			<div className="section-text">
				<div className="price">{price}</div>
				<div className="email">{a}</div>
				<div className="title">{title} </div>
				<div className="text">{text}</div>
				{/* <a className="whatsapp">{a}</a> */}
			// </div>
		// </div> */}