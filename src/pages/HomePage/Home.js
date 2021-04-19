import React from "react";
import {
  portfolioSection,
  dietTrackerSection,
  aboutMeSection,
  intercity,
  dataVisualizer,
  countdownClone,
} from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  return (
    <>
      <InfoSection {...portfolioSection} />
      <InfoSection {...aboutMeSection} />
      <InfoSection {...dietTrackerSection} />
      <InfoSection {...countdownClone} />
      <InfoSection {...intercity} />
      <InfoSection {...dataVisualizer} />
    </>
  );
};

export default Home;
