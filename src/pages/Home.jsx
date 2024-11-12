import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import BMI from '../components/BMI'
import Services from '../components/Services'
import Banner from '../components/Banner'
import Trainer from '../components/Trainer'
import Exercises from '../components/Exercises'
import Price from '../components/Price'
import Info from '../components/Info'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='  max-w-[1250px] mx-auto min-h-screen '>
      <Hero/>
      <About/>
      <BMI/>
      <Services/>
      <Banner/>
      <Trainer/>
      <Exercises/>
      <Price/>
      <Info/>
      <Footer/>
    </div>
  )
}

export default Home
