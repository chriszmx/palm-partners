import React from "react";
import VideoHeader from "./VideoHeader";
import ChoosePalmPartners from "./components/ChoosePalmPartners";
import PalmPartnersIntro from "./components/PalmPartnersIntro";
import TypesOfClaims from "./components/TypesOfClaims";
import RecoveriesMap from "./components/RecoveriesMap";
import FAQ from "./components/FAQ";
import ContactToday from "./components/ContactToday";
import Reviews from "./components/Reviews";

const Home = () => {
    return (
        <div>
            <VideoHeader />
            <ChoosePalmPartners />
            <PalmPartnersIntro />
            <TypesOfClaims />
            <Reviews />
            <RecoveriesMap />
            <FAQ />
            <ContactToday />
        </div>
    );
};

export default Home;
