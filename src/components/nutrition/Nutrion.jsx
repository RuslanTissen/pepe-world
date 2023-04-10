import React from 'react'
import "./Nutrion.scss"
import picture from "../../images/nutrition.jpg"

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

			<div className="nutrition__tips--container">
				<div className="images">
					<div className="img1 img"></div>
					<div className="tips__container tips__container1">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text1'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque sequi aut repellat, laudantium nobis illum placeat repudiandae adipisci molestiae sint, id natus necessitatibus asperiores omnis nemo vero, fugiat dolorem! Incidunt!</p>
					</div>
				</div>

				<div className="images"><div className="img2 img"></div>
					<div className="tips__container tips__container2">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, dolore in expedita inventore sequi eaque, unde est odio ullam ratione libero omnis perferendis aspernatur quas magni incidunt quae. Veritatis, libero?</p>
					</div>
				</div>

				<div className="images"><div className="img3 img"></div>
					<div className="tips__container tips__container3">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias obcaecati repellendus asperiores culpa aliquam dolore ipsum, aperiam repellat, nostrum ipsa tenetur tempore doloremque autem? Hic voluptatum quis quod. Culpa, voluptates?</p>
					</div>
				</div>

				<div className="images"><div className="img4 img"></div>
					<div className="tips__container tips__container4">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam quidem, vel iusto commodi error laboriosam! Harum saepe nemo quo. Obcaecati veniam nesciunt maiores. Vero, sit ducimus fugit rem ut illum!</p>
					</div>
				</div>

				<div className="images"><div className="img5 img"></div>
					<div className="tips__container tips__container5">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam fugit sit totam ipsa quasi! Beatae deleniti pariatur aperiam quasi, nostrum nobis cupiditate quidem consequuntur cumque autem doloribus exercitationem ducimus eligendi.</p>
					</div>
				</div>

				<div className="images"><div className="img6 img"></div>
					<div className="tips__container tips__container6">
						<h2>Lorem, ipsum.</h2>
						<p className='tips__text6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consectetur nesciunt exercitationem sit maxime eum consequuntur vel illum veniam eius expedita, vero iste laboriosam impedit repudiandae minima, dicta asperiores saepe?</p>
					</div>
				</div>
			</div>

		</div>
	)
}

export default Nutrion


{/* <Carousel>
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
			</Carousel> */}