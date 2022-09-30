import React from 'react'
import '../Style/Hero.scss'

const Hero = () => {

    const PhotoHero =

    {
        "photoId": "2",
        "photoName": "name 2",
        "path": "asset/events/hero-foto.jpg"
    }
//    const bg = "asset/logo/background.jpg"

    return (
        <section className='hero__container' id="hero-section" style={{backgroundImage:"url(asset/logo/background.jpg)"}}>
            <div className="hero__text">
                <h1 className='hero__text-header'>WaveDoctors</h1>
                <h2>Réunissons nos passions communes, la médecine et les sports en plein air et rendons-les plus sûrs.
                </h2>
                <div className="hero__footer">

                </div>
            </div>
            <img className='hero__photo' src={PhotoHero.path} alt="wavedoctor hero" />
        </section>
    )
}

export default Hero
