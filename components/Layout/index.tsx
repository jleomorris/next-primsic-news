// Images and icons
import { AiOutlineBell, AiOutlineUser } from 'react-icons/ai';
import { GiAstronautHelmet } from 'react-icons/gi';
import { FiSearch } from 'react-icons/fi';
// Components
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Header/Footer';

interface IProps {
  children: React.ReactElement;
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className='layout'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
