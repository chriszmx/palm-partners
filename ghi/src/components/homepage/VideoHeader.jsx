import React from 'react';

const VideoHeader = () => {
  // You can adjust the height by changing the h-* value
  const videoHeaderHeight = 'h-96'; // This sets the height to 24rem (96/4 = 24)

  return (
    <div className={`relative ${videoHeaderHeight} w-full overflow-hidden`}>
      {/* Video container */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="path_to_your_video.mp4" // Replace with the path to your video file
        autoPlay
        loop
        muted
      />

      {/* Text container */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center pl-10 bg-black bg-opacity-50">
        {/* Adjust padding and background opacity as needed */}
        <div>
          <h1 className="text-white text-4xl font-bold">PALM PARTNERS</h1>
          <p className="text-white text-xl">Public Adjusting Loss Management</p>
          {/* Placeholder for logos */}
          <div className="flex mt-4">
            {/* Placeholder for BBB logo */}
            <div className="w-24 h-24 bg-gray-200 mr-4">BBB Logo</div>
            {/* Placeholder for FAPIA logo */}
            <div className="w-24 h-24 bg-gray-200">FAPIA Logo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHeader;
