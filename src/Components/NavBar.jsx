import React, { useState } from 'react'
import '../Style/Header.scss'
import Logo from '../../src/asset/logo/wavedoctorLogoSGV.svg'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
    const [activeHam, setActiveHam] = useState(false);

    return (
        <div className="navbar-container">
            <nav>
                <div className="nav-container">
                    <NavLink to="/">
                        <img className="nav-brand " src={Logo} alt="wavedoctors logo" />
                    </NavLink>
                    <div className="menu">
                        <a href="#association-section">L'association</a>
                        <a href="#events-section">Évènement</a>
                        <a href="#teams-section">Qui sommes nous?</a>
                        <a href="#contact-section">Contact</a>
                    </div>
                    <button
                        className={activeHam ? "hamburger active-hamburger" : "hamburger"}
                        onClick={() => setActiveHam(!activeHam)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>
            {activeHam && <div className="nav-dropdown">
                <a href="#association-section">L'association</a>
                <a href="#events-section">Évènement</a>
                <a href="#teams-section">Qui sommes nous?</a>
                <a href="#contact-section">Contact</a>

            </div>}
        </div>
    )
}

export default NavBar
