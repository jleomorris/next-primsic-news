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

const Home: NextPage = ({ homepages }) => {
  useEffect(() => {
    console.log('Homepages.props.homepages', homepages);
  }, []);

  return (
    <div>
      <Head>
        <title>Latest | Official Playstation Store</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <>
          <div className='h-20 w-full bg-gray-200'></div>
          {homepages.results.map((homepage) => (
            <div key={homepage.uid}>
              <div className='relative w-full border border-red-900 h-112'>
                <Image
                  src={homepage.data.promoimage1[0].text}
                  layout='fill'
                  objectFit='cover'
                  alt='header'
                />
              </div>
              <div className='flex justify-between px-20 py-10'>
                <h1 className='text-3xl text-black cursor-pointer font-extralight'>
                  {RichText.render(homepage.data.promoheading1)}
                </h1>
                <button className='px-4 py-2 text-xl text-white rounded-full bg-playstation-primary hover:bg-playstation-hover'>
                  See more
                </button>
              </div>
              <div className='relative w-full border border-red-900 h-120'>
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
          ))}
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
      homepages: homepages,
    },
  };
}

export default Home;
