import React from 'react';
import video from '../../assets/video/hurricaneVideo.mp4';
import BBB from '../../assets/BBB-Logo-1.png';
import FAPIA from '../../assets/fapia.png';

const VideoHeader = () => {
  return (
    <>
      <style>
        {`
          .video-3d-shadow {
            box-shadow: 0 20px 30px rgba(0, 0, 0, 0.5);
            transform: translateY(-10px);
          }
        `}
      </style>

      <div className={`relative h-120 w-full overflow-hidden mb-10 video-3d-shadow`}>
        {/* Video container */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={video}
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Text container */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-left bg-black bg-opacity-25">
          <div className="text-center">
            <h1 className="text-white text-6xl font-bold mb-6">PALM PARTNERS</h1>
            <p className="text-white text-3xl mb-8">Public Adjusting Loss Management</p>

            {/* Logos section */}
            {/* <div className='flex justify-center items-center mb-6'>
          <Link to="/contact-us" className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Contact Us!
            </Link>
          </div> */}

            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-2xl leading-6 text-gray-100 ring-1 ring-white/40 hover:ring-white/80">
                <a href="/contact-us" className="font-semibold text-white">
                  <span className="absolute inset-0" aria-hidden="true" />
                  CONTACT US TODAY
                </a>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <img src={BBB} alt="BBB" className="w-36 h-auto bg-gray-200 rounded-xl shadow-lg" />
              <img src={FAPIA} alt="FAPIA" className="w-36 h-auto bg-gray-200 rounded-xl shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoHeader;
