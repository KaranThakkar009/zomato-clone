import React, { useState } from "react";
import Footer from "../../components/common/footer/Footer";
import Header from "../../components/common/header/Header";
import TabOptions from "../../components/common/tabOptions/TabOptions";
import Delivery from "../../components/delivery/Delivery";
import DiningOut from "../../components/diningOut/DiningOut";
import NightLife from "../../components/nightLife/NightLife";

const getCorrectScreen = (activeTab) => {
  switch (activeTab) {
    case "Delivery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "Night Life":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

const HomePage = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <div>
      <Header />
      <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <Footer />
    </div>
  );
};

export default HomePage;
