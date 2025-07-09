import React from "react";
import GiftHero from "../components/Gift/GiftHero";
import GiftForm from "../components/Gift/GiftForm";
import GiftIdeas from "../components/Gift/GiftIdeas";
import Footer from "../components/Footer";

const GiftPage = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto py-12 lgm:px-12">
        <GiftHero />
        <GiftForm />
        <GiftIdeas />
      </div>
    </>
  );
};

export default GiftPage;
