// Components
import Image from 'next/image';
import React from 'react';
import SectionWrapper from '../SectionWrapper';

interface IProps {
  homepage: any;
}

const PromoSection1: React.FC<IProps> = ({ homepage }): React.ReactElement => {
  return (
    <div className='bg-gray-200'>
      <SectionWrapper>
        <div className='promo-section-1 flex justify-center py-20'>
          {Object.entries(homepage.data.promoimages1[0]).map(
            (promoImage: any, index: number) => {
              const totalImages = Object.entries(
                homepage.data.promoimages1[0]
              ).length;
              return (
                <div
                  className={`relative w-1/4 border border-red-900 ${
                    index + 1 !== totalImages ? 'mr-5' : 'mr-0'
                  } rounded-xl overflow-hidden`}
                >
                  <div className='image-overlay z-10 hover:bg-black hover:bg-opacity-10 cursor-pointer absolute top-0 left-0 h-full w-full' />
                  <Image
                    src={promoImage[1][0].text}
                    objectFit='cover'
                    layout='responsive'
                    width='100%'
                    height='100%'
                    alt='promo'
                  />
                </div>
              );
            }
          )}
        </div>
      </SectionWrapper>
    </div>
  );
};

export default PromoSection1;
