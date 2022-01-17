import React from 'react';
import SectionWrapper from '../SectionWrapper';

const WelcomeTo: React.FC = (): React.ReactElement => {
  return (
    <SectionWrapper>
      <div className='welcome-to border flex justify-between items-start'>
        <div className='w-1/2'>
          <h2 className='text-3xl mb-10 text-playstation-gray-dark'>
            Welcome to PlayStation Plus
          </h2>
          <p className='text-sm text-playstation-gray-lightx2'>
            Enhance your Playstation experience with online multiplayer, monthly
            games, exclusive discounts and more.
          </p>
        </div>
        <button className='px-4 py-2 text-xl text-white rounded-full bg-playstation-primary hover:bg-playstation-hover'>
          Learn More
        </button>
      </div>
    </SectionWrapper>
  );
};

export default WelcomeTo;
