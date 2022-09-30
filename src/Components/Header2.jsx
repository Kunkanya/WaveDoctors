import React, { useEffect, useState } from 'react'
import Logo from '../../src/asset/logo/wavedoctorLogoSGV.svg'
import Button from './Button'
import '../Style/Header.scss'

const Header = () => {

    const [navBar, setNavbar] = useState(false)

    const changeBackgroundColor = () => {
        if (window.scrollY >= 70) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

   useEffect(() => {
        window.addEventListener("scroll", changeBackgroundColor)
    })

    return (
        <header className={navBar ? "header active" : "header "}>
            <div className="header__section" >
                <img className="header__logo " src={Logo} alt="wavedoctors logo" />
                    <ul >
                        <li>L'association</li>
                        <li>Évènements</li>
                        <li>Qui sommes nous?</li>
                        <li>Contact</li>
                    </ul>
                    <div className="header__member">
                    <Button text="Devenir Member" />
                    <Button text="Don" />
                    </div>



            </div>

        </header>

    )
}

export default Header
