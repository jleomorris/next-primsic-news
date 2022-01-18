// Components
import { RichText } from 'prismic-reactjs';
import SectionWrapper from '../SectionWrapper';

interface IProps {
  homepage: any;
}

const PromoHeading1: React.FC<IProps> = ({ homepage }): React.ReactElement => {
  return (
    <SectionWrapper>
      <div className='flex justify-between'>
        <h1 className='text-3xl text-black cursor-pointer font-extralight'>
          {RichText.render(homepage.data.promoheading1)}
        </h1>
        <button className='px-4 py-2 text-xl text-white rounded-full bg-playstation-primary hover:bg-playstation-hover'>
          See more
        </button>
      </div>
    </SectionWrapper>
  );
};

export default PromoHeading1;
