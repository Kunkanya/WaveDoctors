import React from 'react'
import Team from './Team'
import Association from './Association'
import Event from './Event'
import Contact from './Contact'
import Footer from '../Components/Footer'
import Hero from './Hero'
import Header1 from '../Components/Header'
import Engagement from './Engagement'

const Home = () => {
  return (
    <>
      <Header1/>
      <Hero />
      <Association />
      <Engagement />
      <Event />
      <Team />
      <Contact />
      <Footer/>
    </>
  )
}

export default Home
