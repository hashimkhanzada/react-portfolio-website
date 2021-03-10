import React from "react";
import {
  portfolioSection,
  dietTrackerSection,
  aboutMeSection,
  planStudyOptionsSection,
  vueApp,
  tuckbox,
  intercity,
  dataVisualizer,
} from "./Data";
import { InfoSection } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...portfolioSection} />
      <InfoSection {...aboutMeSection} />
      <InfoSection {...dietTrackerSection} />
      <InfoSection {...intercity} />
      <InfoSection {...dataVisualizer} />
      <InfoSection {...planStudyOptionsSection} />
      <InfoSection {...vueApp} />
      <InfoSection {...tuckbox} />
    </>
  );
}

export default Home;
