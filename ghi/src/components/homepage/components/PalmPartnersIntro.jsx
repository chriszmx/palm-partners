import React from 'react';
import PalmTreeImage from '../../../assets/palm-tree.jpg'; // Replace with the path to your palm tree image

const PalmPartnersIntro = () => {
  return (
    <div className="bg-white py-24 px-6 sm:px-32">
      <div className="flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <img src={PalmTreeImage} alt="Palm Tree" className="rounded-xl shadow-lg" />
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0 lg:ml-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enter Palm Partners</h2>
          <p className="text-lg text-gray-600 mb-4">
            Our seasoned public adjusters are not only experts in interpreting policies but are also adept negotiators,
            ensuring you get the fairest settlement. Unlike the adjusters provided by your insurance company, who work in
            the best interest of the insurer, Palm Partners' adjusters work exclusively for you.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            Think of it this way: Would you enter a courtroom without a lawyer? Or navigate a health crisis without a
            doctor's advice? Similarly, confronting a property insurance claim without a dedicated public adjuster can
            leave you vulnerable, possibly resulting in a significant financial loss.
          </p>
          <p className="text-lg text-gray-600 mb-4">
            With Palm Partners by your side, you're not just getting an adjuster; you're gaining a partner. A partner
            who's committed to standing up to insurance companies, streamlining the claim process, and ensuring you're
            fully and fairly compensated.
          </p>
          <p className="text-lg font-semibold text-indigo-600">
            Choose smart. Choose Palm Partners. Because your peace of mind is worth it.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PalmPartnersIntro;
