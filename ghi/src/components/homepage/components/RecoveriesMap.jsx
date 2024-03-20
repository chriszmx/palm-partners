import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import the images for Leaflet markers
import iconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

// Set the icon urls for Leaflet markers
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
});
//leaflet
const RecoveriesMap = () => {
    const [recoveries, setRecoveries] = useState([
        {
            id: 1,
            location: "Palm Beach",
            amount: 34000,
            latitude: 26.7056,
            longitude: -80.0364,
        },
        {
            id: 2,
            location: "Pensacola",
            amount: 29298,
            latitude: 30.4213,
            longitude: -87.2169,
        },
        {
            id: 3,
            location: "Port St. Joe",
            amount: 86105,
            latitude: 29.8119,
            longitude: -85.3029,
        },
        {
            id: 4,
            location: "Panama City",
            amount: 95360,
            latitude: 30.1588,
            longitude: -85.6602,
        },
        {
            id: 5,
            location: "Jacksonville",
            amount: 39672,
            latitude: 30.3322,
            longitude: -81.6557,
        },
        {
            id: 6,
            location: "Palm Coast",
            amount: 72937,
            latitude: 29.5845,
            longitude: -81.2079,
        },
        {
            id: 7,
            location: "New Smyrna Beach",
            amount: 107225,
            latitude: 29.0258,
            longitude: -80.927,
        },
        {
            id: 8,
            location: "Ocala",
            amount: 32000,
            latitude: 29.1872,
            longitude: -82.1401,
        },
        {
            id: 9,
            location: "Daytona Beach",
            amount: 258165,
            latitude: 29.2108,
            longitude: -81.0228,
        },
        {
            id: 10,
            location: "Orlando",
            amount: 89769,
            latitude: 28.5383,
            longitude: -81.3792,
        },
        {
            id: 11,
            location: "Clermont",
            amount: 66681,
            latitude: 28.5494,
            longitude: -81.7729,
        },
        {
            id: 12,
            location: "Tampa",
            amount: 21524,
            latitude: 27.9506,
            longitude: -82.4572,
        },
        {
            id: 13,
            location: "Kissimmee",
            amount: 79600,
            latitude: 28.2919,
            longitude: -81.4076,
        },
        {
            id: 14,
            location: "Melbourne",
            amount: 30000,
            latitude: 28.0836,
            longitude: -80.6081,
        },
        {
            id: 15,
            location: "Lakeland",
            amount: 107479,
            latitude: 28.0395,
            longitude: -81.9498,
        },
        {
            id: 16,
            location: "Sarasota",
            amount: 100000,
            latitude: 27.3364,
            longitude: -82.5307,
        },
        {
            id: 17,
            location: "Lake Wales",
            amount: 32947,
            latitude: 27.9014,
            longitude: -81.5859,
        },
        {
            id: 18,
            location: "Delray Beach",
            amount: 55000,
            latitude: 26.4615,
            longitude: -80.0728,
        },
        {
            id: 19,
            location: "Boca Raton",
            amount: 43949,
            latitude: 26.3683,
            longitude: -80.1289,
        },
        {
            id: 20,
            location: "Fort Lauderdale",
            amount: 162498,
            latitude: 26.1224,
            longitude: -80.1373,
        },
        {
            id: 21,
            location: "Naples",
            amount: 82500,
            latitude: 26.142,
            longitude: -81.7948,
        },
        {
            id: 22,
            location: "Miami",
            amount: 80058,
            latitude: 25.7617,
            longitude: -80.1918,
        },
        // ...other locations
    ]);

    // Define bounds for Florida
    const floridaBounds = [
        [30.00, -89.2],
        [25.75, -80.2],
    ];

    return (
        <div className="">
            <div className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                30,000+ Recoveries Made Across Florida
            </div>
            <MapContainer
                bounds={floridaBounds}
                style={{ height: "50vh", width: "100%" }}
                zoomControl={false}
            >
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                {recoveries.map((recovery) => (
                    <Marker
                        key={recovery.id}
                        position={[recovery.latitude, recovery.longitude]}
                    >
                        <Tooltip permanent>
                            {recovery.location} - $
                            {recovery.amount.toLocaleString()}
                        </Tooltip>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default RecoveriesMap;
