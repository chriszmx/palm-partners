import React, { useState, useEffect } from "react";
import video1 from "../../assets/video/hurricaneVideo.mp4";
import video2 from "../../assets/video/houseFire.mp4";
import video3 from "../../assets/video/palmTrees.mp4";
import video4 from "../../assets/video/collapse.mp4";
import video5 from "../../assets/video/fire.mp4";
import video6 from "../../assets/video/floridaDamage.mp4";
import video7 from "../../assets/video/hurricane.mp4";
import video8 from "../../assets/video/leak.mp4";
import video9 from "../../assets/video/mold.mp4";
import BBB from "../../assets/BBB-Logo-1.png";
import FAPIA from "../../assets/fapia.png";

const VideoHeader = () => {
    // Define the video sources here
    const videos = [
        video7,
        video6,
        video5,
        video4,
        video8,
        video9,
        video1,
        video2,
        video3,
    ];
    const [fade, setFade] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    // State to keep track of the current video index
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    // Effect to cycle through videos
    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(true); // Start fading out the current video
            setShowOverlay(true); // Show the overlay
            setTimeout(() => {
                setCurrentVideoIndex(
                    (prevIndex) => (prevIndex + 1) % videos.length
                );
                setFade(false); // Fade in the new video
                setTimeout(() => {
                    setShowOverlay(false); // Hide the overlay after the new video fades in
                }, 300); // This should match the fade-in duration
            }, 200); // This should match the fade-out duration
        }, 25000); // Change video every 20 seconds

        return () => clearInterval(intervalId);
    }, [videos.length]);

    // Current video URL
    const currentVideo = videos[currentVideoIndex];

    return (
        <>
            <style>
                {`
          .overlay-in {
            animation: overlayIn 0.2s ease-in forwards;
          }
          .overlay-out {
            animation: overlayOut 0.2s ease-out forwards;
          }
          @keyframes overlayIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes overlayOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }
          .fade-in {
            animation: fadeIn 0.2s ease-in forwards;
          }
          .fade-out {
            animation: fadeOut 0.2s ease-out forwards;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes fadeOut {
            from { opacity: 1; }
            to { opacity: 0; }
          }

          .video-3d-shadow {
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
            transform: translateY(-10px);
          }

          @media (min-width: 768px) {
            .desktop-text-alignment {
              margin-left: 10%; /* Adjust as needed */
            }
          }

          @media (max-width: 767px) {
            .contact-us-mobile {
              display: block;
            }
          }

          @media (max-width: 767px) {
            .video-header-text {
              font-size: 5xl; /* Adjust as needed for mobile */
              line-height: 1.2;
              padding: 0 20px; /* Add padding on the sides */
            }

            .contact-us-mobile {
              display: block;
              color: white; /* Text color for button */
              padding: 10px 20px; /* Button padding */
              margin: 20px 0; /* Add some top and bottom margin */
            }

            .logo-mobile {
              width: 50px; /* Adjust width as necessary */
              height: auto;
              margin: 0 10px; /* Adds spacing between logos */
            }
          }
        `}
            </style>

            {/* For small screens */}
            <div className="relative h-120 w-full overflow-hidden video-3d-shadow sm:hidden">
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={currentVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-left bg-black bg-opacity-25">
                    <div className="text-center p-8">
                        <h1 className="text-white text-6xl font-bold mb-6">
                            PALM PARTNERS
                        </h1>
                        <p className="text-white text-3xl mb-8">
                            Public Adjusting Loss Management
                        </p>

                        <div className="contact-us-mobile hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-2xl leading-6 text-gray-100 ring-1 ring-white/40 hover:ring-white/80">
                                <a
                                    href="/contact-us"
                                    className="font-semibold text-white"
                                >
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    CONTACT US TODAY
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <img
                                src={BBB}
                                alt="BBB"
                                className="w-36 h-auto bg-gray-200 rounded-xl shadow-lg"
                            />
                            <img
                                src={FAPIA}
                                alt="FAPIA"
                                className="w-36 h-auto bg-gray-200 rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* For screens sm and above */}
            <div
                className="hidden sm:block sm:relative sm:w-full overflow-hidden video-3d-shadow"
                style={{ paddingTop: "56.25%" }}
            >
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src={currentVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Solid color overlay */}
                <div
                    className={`absolute top-0 left-0 w-full h-full ${
                        showOverlay ? "overlay-in" : "overlay-out"
                    } bg-slate-500`}
                />

                {/* Text container */}
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-left bg-black bg-opacity-25">
                    <div className="text-center p-8">
                        <h1 className="text-white text-6xl font-bold mb-6">
                            PALM PARTNERS
                        </h1>
                        <p className="text-white text-3xl mb-8">
                            Public Adjusting Loss Management
                        </p>

                        <div className="contact-us-mobile hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-2xl leading-6 text-gray-100 ring-1 ring-white/40 hover:ring-white/80">
                                <a
                                    href="/contact-us"
                                    className="font-semibold text-white"
                                >
                                    <span
                                        className="absolute inset-0"
                                        aria-hidden="true"
                                    />
                                    CONTACT US TODAY
                                </a>
                            </div>
                        </div>

                        <div className="flex justify-center items-center gap-4">
                            <img
                                src={BBB}
                                alt="BBB"
                                className="w-36 h-auto bg-gray-200 rounded-xl shadow-lg"
                            />
                            <img
                                src={FAPIA}
                                alt="FAPIA"
                                className="w-36 h-auto bg-gray-200 rounded-xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default VideoHeader;
