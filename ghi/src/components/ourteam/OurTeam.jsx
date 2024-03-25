import React from "react";
import EmployeeStaff from "./components/EmployeeStaff";
import OfficeStaff from "./components/OfficeStaff";
import { Helmet } from "react-helmet";

const OurTeam = () => {
    return (
        <div>
            <Helmet>
                <title>Our Team | Palm Partners Public Adjusting</title>
                <meta
                    name="description"
                    content="Meet the Palm Partners Public Adjusting team of dedicated professionals. Our staff is committed to securing the best settlement for your insurance claim."
                />
                <link rel="canonical" href="https://palmpts.com/our-team" />
            </Helmet>
            <EmployeeStaff />
            <OfficeStaff />
        </div>
    );
};

export default OurTeam;
