// Images and icons
import { IoChevronDown } from 'react-icons/io5';
// Components
import SonyWordLogo from '../../../Icons/SonyWordLogo';
import MagnifyingGlass from '../../../Icons/MagnifyingGlass';
import PlaystationMainLogo from '../../../Icons/PlaystationMainLogo';
import PlaystationStoreLogo from '../../../Icons/PlaystationStoreLogo';
import PlaystationStoreWordLogo from '../../../Icons/PlaystationStoreWordLogo';

const navPrimaryData = [
  { name: 'Games' },
  { name: 'Hardware' },
  { name: 'Services' },
  { name: 'News' },
  { name: 'Shop' },
  { name: 'Support' },
];

const navSecondaryData = [
  { name: 'Latest' },
  { name: 'Collections' },
  { name: 'Deals' },
  { name: 'PS5' },
  { name: 'Subscriptions' },
  { name: 'Browse' },
];

const Header: React.FC = (): React.ReactElement => {
  return (
    <>
      <div className='flex items-center justify-end w-full p-4 bg-black'>
        <SonyWordLogo />
      </div>
      <div className='flex justify-between px-8 py-4 bg-white border border-red-900'>
        <div className='flex border border-green-900'>
          <div className='w-10 h-10'>
            <PlaystationMainLogo />
          </div>
          <ul className='flex items-center text-gray-500 border border-red-900'>
            {navPrimaryData.map((navItem) => (
              <button>
                <li className='px-2 text-xs font-extrabold xl:px-8 xl:text-lg hover:text-blue-500'>
                  {navItem.name}
                  <IoChevronDown className='inline ml-1 text-md' />
                </li>
              </button>
            ))}
          </ul>
        </div>
        <div>
          <button className='px-4 py-1 mr-4 font-bold text-white bg-gray-700 rounded-full xl:mr-8'>
            Sign In
          </button>
          <div className='relative inline-block border border-gray-300 rounded-sm'>
            <input
              type='text'
              placeholder='Search'
              className='inline-block w-32 px-2 py-1'
            />
            <div className='inline-block w-10 h-10 py-2 align-middle'>
              <MagnifyingGlass />
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center w-full px-8 border-2 border-yellow-600'>
        <div className='w-12 h-12'>
          <PlaystationStoreLogo />
        </div>
        <div className='w-40 h-16 mr-10 border'>
          <PlaystationStoreWordLogo />
        </div>
        <ul className='flex items-center justify-center flex-1 text-gray-400 border border-red-900'>
          {navSecondaryData.map((navItem) => (
            <button>
              <li className='px-4 py-1 mr-4 text-sm font-bold text-black rounded-full hover:bg-gray-300 xl:mr-8 xl:text-lg'>
                {navItem.name}
              </li>
            </button>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Header;
