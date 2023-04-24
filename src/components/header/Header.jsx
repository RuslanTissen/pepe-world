import React, { useState } from 'react'
import './Header.scss'
import { GiHamburgerMenu } from 'react-icons/gi';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';
// import {GiBodyBalance} from "react-icons/gi"

function Header() {
	const [show, setShow] = useState(false)

	return (
		<div className="nav">
			<ul className='ul-first'>
				{/* <AnchorLink href="#foto" className="logo" style={{fontSize:"1.5em"}}><AiOutlineHome /></AnchorLink> */}
				{/* <li className="logo"><AnchorLink href="#foto">PIPI <GiBodyBalance/> SPORT</AnchorLink></li> */}
				<li className="logo"><AnchorLink href="#foto">HOME</AnchorLink></li>
				<li className="alq"><AnchorLink href="#philosophie">ABOUT ME</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#exercise">STRENGTH</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#nutrition">NUTRITION</AnchorLink></li>
				<li className='personal'><AnchorLink href="#stretching">GET ON TOUCH</AnchorLink></li>
				<GiHamburgerMenu style={{ fontSize: "1.5em" }} onClick={() => setShow(!show)} />
			</ul >
			{show && <ul className='ul-second'>
				<li className="alq"><AnchorLink href="#philosophie">ABOUT ME</AnchorLink> </li>
				<li className="detalles"><AnchorLink href="#exercise">STRENGTH</AnchorLink></li>
				<li className="contacto"><AnchorLink href="#nutrition">NUTRITION</AnchorLink></li>
				<li className="personal"><AnchorLink href="#stretching">GET ON TOUCH</AnchorLink></li>
			</ul>}
		</div>
	)
}

export default Header