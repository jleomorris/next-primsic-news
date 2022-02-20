import { useState, useEffect } from "react";
// Types
import type { NextPage } from "next";
// Third party
import Prismic from "prismic-javascript";
import { RichText } from "prismic-reactjs";
import { Client } from "../prismic.config";
// Styling
import styles from "../styles/Home.module.css";
// Components
import Head from "next/head";
import Layout from "../components/Layout";
import Link from "next/link";
import Image from "next/image";
import SectionWrapper from "../components/SectionWrapper";
import SeeMore from "../components/SeeMore";
import WelcomeTo from "../components/WelcomeTo";
import PromoSection1 from "../components/PromoSection1";
import PromoHeading1 from "../components/PromoHeading1";
import EmblaCarousel from "../components/EmblaCarousel";
import EmblaSlide from "../components/EmblaCarousel/components/EmblaSlide";
import NewGames from "../components/NewGames";
import ComingSoon from "../components/ComingSoon";

interface IProps {
  homepage: any;
  newGames: any;
}

const Home: NextPage<IProps> = ({ homepage, newGames }) => {
  useEffect(() => {
    console.log("Homepage.props.homepage", homepage);
  }, []);

  return (
    <div>
      <Head>
        <title>Latest | Official Playstation Store</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <>
          <div className="h-20 w-full bg-gray-200" />
          <div key={homepage.uid}>
            <div className="relative w-full h-112">
              <Image
                src={homepage.data.promobanner1[0].text}
                layout="fill"
                objectFit="cover"
                alt="header"
              />
            </div>
            <PromoHeading1 homepage={homepage} />
            <PromoSection1 homepage={homepage} />
            <NewGames newGames={newGames} />
            <ComingSoon games={newGames} />
            <div className="relative w-full h-120">
              <Image
                src={homepage.data.promobanner2[0].text}
                layout="fill"
                objectFit="cover"
                alt="promo"
              />
            </div>
            <WelcomeTo />
            <SeeMore />
          </div>
        </>
      </Layout>
    </div>
  );
};

export async function getServerSideProps() {
  const homepages = await Client().query(
    Prismic.Predicates.at("document.type", "homepage")
  );

  const homepage = homepages.results[0];

  const newGames = homepage.data.body.filter(
    (slice) => slice.slice_type === "newgames"
  );

  return {
    props: {
      homepage: homepage,
      newGames: newGames[0].items,
    },
  };
}

export default Home;
