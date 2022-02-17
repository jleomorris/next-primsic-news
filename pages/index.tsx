import { useEffect } from "react";
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

interface IProps {
  homepage: any;
}

const newGames = [
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
  "https://image.api.playstation.com/vulcan/ap/rnd/202201/2109/jx6KJhJn0NUTVdha0a1PA4KQ.png?w=440&thumb=false",
];

const Home: NextPage<IProps> = ({ homepage }) => {
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
            <div className="relative w-full border border-red-900 h-112">
              <Image
                src={homepage.data.promoimage1[0].text}
                layout="fill"
                objectFit="cover"
                alt="header"
              />
            </div>
            <PromoHeading1 homepage={homepage} />
            <PromoSection1 homepage={homepage} />
            <div className="relative w-full h-120">
              <Image
                src={homepage.data.promoimage2[0].text}
                layout="fill"
                objectFit="cover"
                alt="promo"
              />
            </div>
            <section className="flex flex-col my-20 px-20">
              <h2 className="text-3xl font-thin">New Games</h2>
              <EmblaCarousel>
                {newGames.map((game, index) => (
                  <div className="embla__slide" key={`${game}-${index}`}>
                    <div className="h-64 w-64 relative rounded-2xl overflow-hidden">
                      <Image
                        src={game}
                        layout="fill"
                        objectFit="contain"
                        alt="carousel"
                      />
                    </div>
                  </div>
                ))}
              </EmblaCarousel>
            </section>
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

  return {
    props: {
      homepage: homepages.results[0],
    },
  };
}

export default Home;
