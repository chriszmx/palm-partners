import React from 'react'
import VideoHeader from './VideoHeader';
import ChoosePalmPartners from './components/ChoosePalmPartners';
import PalmPartnersIntro from './components/PalmPartnersIntro';
import OurServices from './components/OurServices';
// import LandingPage from './components/LandingPage';

const Home = () => {
  return (
    <div>
        <VideoHeader />
        <ChoosePalmPartners />
        <PalmPartnersIntro />
        <OurServices />
        {/* <LandingPage /> */}
    </div>
  )
}

export default Home
