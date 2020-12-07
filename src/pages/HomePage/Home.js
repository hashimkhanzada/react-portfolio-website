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
      <InfoSection {...planStudyOptionsSection} />
      <InfoSection {...vueApp} />
      <InfoSection {...tuckbox} />
      <InfoSection {...intercity} />
    </>
  );
}

export default Home;
