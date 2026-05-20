import React from 'react'
import Navbar from '../../component/Navbar'
import LandingP from '../../component/LandingP'
import KitchenSection from '../../component/About'
import StatsSection from '../../component/Stats'
import ChoiceSection from '../../component/WhyChoose'
import AppDownloadSection from '../../component/AppDownload'
import Footer from '../../component/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
      <LandingP/>
      <KitchenSection/>
      <StatsSection/>
      <ChoiceSection/>
      <AppDownloadSection/>
      <Footer/>
    </div>
  )
}

export default Home
