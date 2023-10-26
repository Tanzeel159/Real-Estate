import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/header";
import Hero from "../components/hero";
import AreaContainer from "../components/area-container";
import FeatureContainer from "../components/feature-container";
import RentPropertiesCard from "../components/rent-properties-card";
import RentPropertiesContainer from "../components/rent-properties-container";
import Contact from "../components/contact";
import Footer from "../components/footer";

const LandingPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <meta name="description" content="Discover your perfect Home !!" />
      </Head>
      <div className="relative bg-gray-white w-full h-[5096px] flex flex-col items-center justify-start">
        <Header />
        <Hero />
        <AreaContainer />
        <FeatureContainer />
        <RentPropertiesCard />
        <RentPropertiesContainer />
        <Contact />
        <Footer propOverflow="unset" />
      </div>
    </>
  );
};

export default LandingPage;
