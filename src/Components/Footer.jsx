import React from 'react'
import {FaInstagram} from 'react-icons/fa'
//import Logo from '../asset/logo/logowhite.png'
import '../Style/Footer.scss'
const Footer = () => {
    const Logo ="asset/logo/logowhite.png"
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__body">
                    <img className="footer__body-logo" src={Logo} alt="" />
                    <a href=" https://www.instagram.com/wavedoctors/"
                    target="blank" 
                    style={{color:"white" , fontSize: 24 , paddingBottom: 10}}><FaInstagram /></a>
                    <p>©2022 by WaveMedics Technologies. All rights reserved</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
