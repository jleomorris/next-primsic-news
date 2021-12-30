import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Prismic from 'prismic-javascript';
import { RichText } from 'prismic-reactjs';
import Layout from '../components/Layout';
import Link from 'next/link';
import { Client } from '../prismic.config';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <p>Home</p>
      </Layout>
    </div>
  );
};

export default Home;
