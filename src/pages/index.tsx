import { type NextPage } from "next";
import Head from "next/head";
import CTA from "../components/CTA";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import Places from "../components/Places";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>dine</title>
        <meta name="description" content="Restaurant Booking App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Places />
        <Highlights />
        <Events />
        <CTA />
        <Footer />
      </main>
    </>
  );
};

export default Home;
