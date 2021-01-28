import React from "react";
import {
  portfolioSection,
  dietTrackerSection,
  aboutMeSection,
  planStudyOptionsSection,
  vueApp,
  tuckbox,
  intercity,
} from "./Data";
import { InfoSection } from "../../components";

function Home() {
  return (
    <>
      <InfoSection {...portfolioSection} />
      <InfoSection {...aboutMeSection} />
      <InfoSection {...dietTrackerSection} />
      <InfoSection {...intercity} />
      <InfoSection {...planStudyOptionsSection} />
      <InfoSection {...tuckbox} />
      <InfoSection {...vueApp} />
    </>
  );
}

export default Home;
