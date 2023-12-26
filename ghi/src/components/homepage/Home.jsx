import React from "react";
import VideoHeader from "./VideoHeader";
import ChoosePalmPartners from "./components/ChoosePalmPartners";
import PalmPartnersIntro from "./components/PalmPartnersIntro";
import OurServices from "./components/OurServices";
import RecoveriesMap from "./components/RecoveriesMap";

const Home = () => {
    return (
        <div>
            <VideoHeader />
            <ChoosePalmPartners />
            <PalmPartnersIntro />
            <OurServices />
            <RecoveriesMap />
        </div>
    );
};

export default Home;
