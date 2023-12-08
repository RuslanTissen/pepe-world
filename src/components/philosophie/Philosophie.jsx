import "./Philosophie.scss"
import React from 'react'
import img1 from "../../images/phs1.png"
import img2 from "../../images/phs3.png"
import img3 from "../../images/phs2.png"
import AnchorLink from "react-anchor-link-smooth-scroll-v2"
import { BsArrowDownCircleFill } from "react-icons/bs"
import LazyLoad from 'react-lazyload';

export default function Philosophie() {
	return (
		<div className="philosophie" id="philosophie">
			<div className="moto-container">
				<h1>MY PHILOSOPHY
					HOLISTICALLY HEALTHY.
					STRONG IN LIFE.</h1>
			</div>

			<div className="tex-container">
				<p>It is an interplay that is as fascinating as it is complex: muscles, joints and the spine keep us flexible and do everything we want to. Almost as if by itself. But if something gets "messed up" in this system, it can have painful and even chronic effects on the entire body. Often also on our entire life. As a coach, it is my job to minimize these effects or, at best, to prevent them entirely through targeted prevention.</p>
			</div>

			<div className="image-container">
				<div className="foto">
					<LazyLoad>
						<img className="img" src={img1} alt="ups, somthing gone" />
					</LazyLoad>
				</div>
				<div className="foto">
					<LazyLoad>
						<img className="img" src={img2} alt="ups, somthing gone" />
					</LazyLoad>
				</div>
				<div className="foto foto3">
					<LazyLoad>
						<img className="img" src={img3} alt="ups, somthing gone" />
					</LazyLoad>
					<AnchorLink href="#exercise"><BsArrowDownCircleFill /></AnchorLink>
				</div>

			</div>
		</div>
	)
}