import React from "react";

import Navbar from "../../component/Navbar";
import LandingP from "../../component/LandingP";
import KitchenSection from "../../component/About";
import StatsSection from "../../component/Stats";
import ChoiceSection from "../../component/WhyChoose";
import AppDownloadSection from "../../component/AppDownload";
import Footer from "../../component/Footer";

import CustomerHome from "../../customer/Home";

import { useAuth } from "../../context/AuthContext";

const Home = () => {
  const { customer } = useAuth();

  return (
    <div>
      <Navbar />

      {!customer ? (
        <>
          <LandingP />
          <KitchenSection />
          <StatsSection />
          <ChoiceSection />
          <AppDownloadSection />
        </>
      ) : (
        <CustomerHome />
      )}

      <Footer />
    </div>
  );
};

export default Home;