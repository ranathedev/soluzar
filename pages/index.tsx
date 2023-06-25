// import Button from "components/button";
// import FeatureCard from "components/feature-card";
import Header from "components/header";
import HeroSection from "components/hero-section";
// import Intro from "components/intro-section";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Soluzar | Agency</title>
        <meta name="description" content="Agency Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {/* <Intro /> */}
        {/* <Button /> */}
        {/* <h1>Soluzar</h1> */}
        {/* <FeatureCard /> */}
        <HeroSection />
      </main>
    </>
  );
}
