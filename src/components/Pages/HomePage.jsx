import React from "react";
import CardSp from "../card/CardSp";
import Feeback from "../Feedback/Feeback";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
import NavBarHerderSlide from "../NavBar/NavBarHerderSlide";
import News from "../News/News";
import ProductCard from "../ProductCard/ProductCard";
import CarouselSlide from "../SlideShow/CarouselSlide";
import Takecontrol from "../TakeControl/Takecontrol";

export default function HomePage() {
  return (
    <>
      <NavBarHerderSlide />
      <CardSp />
      <Information />
      <Takecontrol />
      <ProductCard />
      <Feeback />
      <ProductCard />
      <News />
      <CarouselSlide />
      <Footer />
    </>
  );
}
