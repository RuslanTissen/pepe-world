import React from 'react'
import './Footer.scss'
import { GrFacebookOption } from 'react-icons/gr'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { FaLinkedinIn, FaTelegram } from 'react-icons/fa'

export default function Footer() {
	return (
		<div id="footer" className="footer">
			<div className="footer-links">
				<a href="https://www.instagram.com/pipitosti/"><BsInstagram /></a>
				<a href="#"><GrFacebookOption /></a>
				<a href='#'><BsTwitter /></a>
				<a href="#"><FaLinkedinIn /></a>
				<a href="#"><FaTelegram /></a>
			</div>
			<div className="studio">
				<a href="https://tissenstudio.com/">Created by <mark>Tissen</mark> studio </a>
			</div>
		</div>
	)
}