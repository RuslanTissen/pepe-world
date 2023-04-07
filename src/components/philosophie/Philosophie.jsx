import "./Philosophie.scss"
import img1 from "../../images/img1.jpg"
import img2 from "../../images/img2.jpg"
import img3 from "../../images/img3.jpg"

export default function Philosophie(){


	return(
		<div className="philosophie">
			<div className="moto-container">
				<h1>MY PHILOSOPHY
				HOLISTICALLY HEALTHY.
				STRONG IN LIFE.</h1>
			</div>

			<div className="tex-container">
				<p>It is an interplay that is as fascinating as it is complex: muscles, joints and the spine keep us flexible and do everything we want to. Almost as if by itself. But if something gets "messed up" in this system, it can have painful and even chronic effects on the entire body. Often also on our entire life. As a physiotherapist, it is my job to minimize these effects or, at best, to prevent them entirely through targeted prevention.</p>
			</div>

			<div className="image-container">
				<img className="img1 foto" src={img1} alt="image 1" />
				<img className="img2 foto" src={img2} alt="image 2" />
				<img className="img3 foto" src={img3} alt="image 3" />
			</div>
		</div>
	)
}