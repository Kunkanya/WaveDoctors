import React from 'react'
//import Logo from '../asset/logo/logowhite.png'
import '../Style/Footer.scss'
const Footer = () => {
    const Logo ="asset/logo/logowhite.png"
    return (
        <footer className='footer'>
            <div className="footer__container">
                <div className="footer__body">
                    <img className="footer__body-logo" src={Logo} alt="" />
                    <p>©2022 by WaveMedics Technologies. All rights reserved</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer
