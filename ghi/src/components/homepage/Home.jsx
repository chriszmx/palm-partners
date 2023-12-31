import React from "react";
import VideoHeader from "./VideoHeader";
import ChoosePalmPartners from "./components/ChoosePalmPartners";
import PalmPartnersIntro from "./components/PalmPartnersIntro";
import TypesOfClaims from "./components/TypesOfClaims";
import RecoveriesMap from "./components/RecoveriesMap";
import FAQ from "./components/FAQ";
import ContactToday from "./components/ContactToday";

const Home = () => {
    return (
        <div>
            <VideoHeader />
            <ChoosePalmPartners />
            <PalmPartnersIntro />
            <TypesOfClaims />
            <RecoveriesMap />
            <FAQ />
            <ContactToday />
        </div>
    );
};

export default Home;
