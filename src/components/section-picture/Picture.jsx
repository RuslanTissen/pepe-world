import React from "react"
import './Picture.scss'
import home from "../../images/exr-2.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
import { BsArrowDownCircleFill } from "react-icons/bs"
import LazyLoad from 'react-lazy-load';

export default function Pictuer() {
	return (
		<div id="foto" className="picture">

			<div className='greetings'><h1>Welcome to <mark>Pipi</mark> health world.</h1></div>

			<div className="picture-container">
				<LazyLoad>
					<img src={home} alt="baner" className="onscroll-image-fade-in" />
				</LazyLoad>
			</div>

			<div className="moto">
				<div className="text-container">
					<p> Take <mark>control</mark> of your body.</p>
				</div>
				<div className="button-container">
					<AnchorLink href="#philosophie"><BsArrowDownCircleFill /></AnchorLink>
				</div>

			</div>

		</div>
	)
}