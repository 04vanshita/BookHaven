import React, { useEffect } from "react";
import Hero from "../components/Home/Hero";
import RecentlyAdded from "../components/Home/RecentlyAdded";
import BookCarousel from "../components/Home/BookCarousel";
import ServicesGrid from "../components/Home/ServicesGrid";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <BookCarousel/>
      <RecentlyAdded />
      <ServicesGrid/>
    </>
  );
};

export default Home;
