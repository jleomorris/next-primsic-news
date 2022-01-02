import { useEffect } from 'react';
// Types
import type { NextPage } from 'next';
// Third party
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import { Client } from '../prismic.config';
// Styling
import styles from '../styles/Home.module.css';
// Components
import Head from 'next/head';
import Layout from '../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import SectionWrapper from '../components/SectionWrapper';

interface IProps {
  homepage: any;
}

const Home: NextPage<IProps> = ({ homepage }) => {
  useEffect(() => {
    console.log('Homepages.props.homepage', homepage);
  }, []);

  // useEffect(() => {
  //   const homepages1 = homepages;
  //   debugger;
  // }, []);

  return (
    <div>
      <Head>
        <title>Latest | Official Playstation Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <>
          <div className='h-20 w-full bg-gray-200'></div>
          {/* {homepages.results.map((homepage: any) => ( */}
          <div key={homepage.uid}>
            <div className='relative w-full border border-red-900 h-112'>
              <Image
                src={homepage.data.promoimage1[0].text}
                layout='fill'
                objectFit='cover'
                alt='header'
              />
            </div>
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
                  {/* {Object.entries(promoImages1.data).map(
                      (promoImage: any, index: number) => {
                        const totalImages = Object.entries(
                          promoImages1.data
                        ).length;
                        return (
                          <div
                            className={`relative w-1/4 border border-red-900 ${
                              index + 1 !== totalImages ? 'mr-5' : 'mr-0'
                            } rounded-xl overflow-hidden`}
                          >
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
                    )} */}
                </div>
              </SectionWrapper>
            </div>
            <div className='relative w-full h-120'>
              <Image
                src={homepage.data.promoimage2[0].text}
                layout='fill'
                objectFit='cover'
                alt='promo'
              />
            </div>
            <Link href={`trending/${homepage.uid}`}>
              <h1 className='text-xl text-blue-600 cursor-pointer bold'>
                {RichText.render(homepage.data.title)}
              </h1>
            </Link>
            <hr className='mt-5' />
          </div>
          {/* ))} */}
        </>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const homepages = await Client().query(
    Prismic.Predicates.at('document.type', 'homepage')
  );

  return {
    props: {
      homepage: homepages.results[0],
    },
  };
}

export default Home;
