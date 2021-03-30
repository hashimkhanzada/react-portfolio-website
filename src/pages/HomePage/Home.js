import React, { useState } from "react";
import {
  portfolioSection,
  dietTrackerSection,
  aboutMeSection,
  planStudyOptionsSection,
  vueApp,
  tuckbox,
  intercity,
  dataVisualizer,
  countdownClone,
} from "./Data";
import { InfoSection } from "../../components";

const Home = () => {
  const [moreProjects, setMoreProjects] = useState(false);

  return (
    <>
      <InfoSection {...portfolioSection} />
      <InfoSection {...aboutMeSection} />
      <InfoSection {...dietTrackerSection} />
      <InfoSection {...countdownClone} />
      <InfoSection {...intercity} />
      <InfoSection {...dataVisualizer} />

      {moreProjects ? (
        <>
          <InfoSection {...planStudyOptionsSection} />
          <InfoSection {...vueApp} />
          <InfoSection {...tuckbox} />
        </>
      ) : (
        <h3
          style={{
            cursor: "pointer",
            textAlign: "center",
            padding: "2vh 0",
            backgroundColor: "#101522",
            color: "#f7f8fa",
          }}
          onClick={() => setMoreProjects(true)}
        >
          Click to see more projects
        </h3>
      )}
    </>
  );
};

export default Home;
