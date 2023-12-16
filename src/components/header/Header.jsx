import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxCross1 } from 'react-icons/rx';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

function Header() {
	const [show, setShow] = useState(false)
	const [active, setActive] = useState(true)

	function myFunction() {
		setActive(!active)
		setShow(!show)
	}

const scrollToTheTop = () => {
	window.scrollTo({top: 0, behavior: 'smooth'})
	}

	return (
		<div className="nav" >
			<ul className='ul-first'>
				<li className="logo"><AnchorLink onClick={scrollToTheTop} href="#foto">HOME</AnchorLink></li>
				<li className="alq"><AnchorLink href="#philosophie">ABOUT ME</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#exercise">STRENGTH</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#nutrition">NUTRITION</AnchorLink></li>
				<li className='personal'><AnchorLink href="#stretching">GET ON TOUCH</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second' onClick={() => myFunction()}>
				<li className="alq"><AnchorLink href="#philosophie">ABOUT ME</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#exercise">STRENGTH</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#nutrition">NUTRITION</AnchorLink></li>
				<li className="personal"><AnchorLink href="#stretching">GET ON TOUCH</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header