import React from "react";
import VideoHeader from "./VideoHeader";
import ChoosePalmPartners from "./components/ChoosePalmPartners";
import PalmPartnersIntro from "./components/PalmPartnersIntro";
import TypesOfClaims from "./components/TypesOfClaims";
import RecoveriesMap from "./components/RecoveriesMap";

const Home = () => {
    return (
        <div>
            <VideoHeader />
            <ChoosePalmPartners />
            <PalmPartnersIntro />
            <TypesOfClaims />
            <RecoveriesMap />
        </div>
    );
};

export default Home;
