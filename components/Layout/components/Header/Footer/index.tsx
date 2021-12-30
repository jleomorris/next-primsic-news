import { useState } from 'react';
// Images and Icons
import PlaystationMainLogo from '../../../../Icons/PlaystationMainLogo';
import { BsGlobe2 } from 'react-icons/bs';
import { MdChevronRight } from 'react-icons/md';

// Components
import Link from 'next/link';

const footerData = [
  { name: 'Support' },
  { name: 'PSN Terms of Service' },
  { name: 'Facebook' },
  { name: 'Privacy and Cookies' },
  { name: 'Software Usage Terms' },
  { name: 'Twitter' },
  { name: 'Website Terms of Use' },
  { name: 'PS Store Cancellation Policy' },
  { name: 'Youtube' },
  { name: 'Sitemap' },
  { name: 'Health Warnings' },
  { name: 'Instragram' },
  { name: 'PlayStation Studios' },
  { name: 'About Ratings' },
  { name: 'Android App' },
  { name: 'Legal' },
  { name: 'Modern Slavery Transparency Act Statement' },
  { name: 'iOS App' },
  { name: 'About SIE' },
];

const Footer = () => {
  const [country, setCountry] = useState<string>('United Kingdom');

  return (
    <div className='w-full px-64 py-16 bg-playstation-main'>
      <div className='flex items-center border'>
        <div className='w-16 h-16'>
          <PlaystationMainLogo fillColor='#ffffff' />
        </div>
        <button className='flex text-white'>
          <BsGlobe2 className='ml-16 mr-4 text-2xl text-white' />
          <p>{`Country/Region: ${country}`}</p>
          <MdChevronRight className='ml-2 text-2xl text-white' />
        </button>
      </div>
      <div className='flex flex-wrap mt-20 border border-black'>
        {footerData.map((footerItem) => (
          <Link href='/' key={footerItem.name}>
            <a className='w-1/3 mb-2 text-lg text-white hover:text-opacity-75'>
              {footerItem.name}
            </a>
          </Link>
        ))}
      </div>
      <div className='w-full mt-10 text-xl text-center text-white'>
        © 2021 Sony Interactive Entertainment Europe Ltd. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
