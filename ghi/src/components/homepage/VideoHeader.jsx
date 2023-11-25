import React from 'react';
import video from '../../assets/video/hurricaneVideo.mp4';
import BBB from '../../assets/image/BBB-logo-1.png';
import FAPIA from '../../assets/image/fapia.png';

const VideoHeader = () => {
  // You can adjust the height by changing the h-* value
  const videoHeaderHeight = 'h-96'; // This sets the height to 24rem (96/4 = 24)

  return (
    <div className={`relative ${videoHeaderHeight} w-full overflow-hidden`}>
      {/* Video container */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
      />

      {/* Text container */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center pl-10 bg-black bg-opacity-50">
        {/* Adjust padding and background opacity as needed */}
        <div>
          <h1 className="text-white text-6xl font-bold mb-2">PALM PARTNERS</h1>
          <p className="text-white text-2xl mb-2">Public Adjusting Loss Management</p>
          {/* Placeholder for logos */}
          <div className="flex mt-8">
            {/* Placeholder for BBB logo */}
            <div className="w-36 h-auto bg-gray-200 mr-4 rounded-xl"><img src={BBB} alt="BBB" /></div>
            {/* Placeholder for FAPIA logo */}
            <div className="w-36 h-auto bg-gray-200 rounded-xl"><img src={FAPIA} alt="FAPIA" /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
