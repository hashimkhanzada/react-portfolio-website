import Head from "next/head";
import { InfoSection, Navbar } from "../components";

export default function Home() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta property="og:title" content="Hashim Khanzada | Portfolio" />
        <meta
          prefix="og: http:/ogp.me/ns#"
          property="og:image"
          content="/mainimage.png"
        />
        <meta name="author" content="Hashim Khanzada" />
        <meta property="og:description" content="My portfolio website" />
        <meta property="og:url" content="https://www.hashimkhanzada.com/" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="portfolio"
          content="Portfolio website created using react"
        />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />

        <title>Hashim Khanzada | Portfolio</title>
      </Head>

      <Navbar />

      <InfoSection {...portfolioSection} />
      <InfoSection {...aboutMeSection} />
      <InfoSection {...dietTrackerSection} />
      <InfoSection {...countdownClone} />
      <InfoSection {...intercity} />
      <InfoSection {...dataVisualizer} />
    </>
  );
}

import { AiOutlineFileZip, AiOutlineShopping } from "react-icons/ai";
import { SiAzuredevops } from "react-icons/si";
import { IoBusSharp } from "react-icons/io5";
import { FaGithub, FaFilePdf, FaChartPie } from "react-icons/fa";

export const portfolioSection = {
  id: "portfolio",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Created with React",
  headline: "My Portfolio Website",
  description: "A showcase of my projects",
  buttonLabel: "Source Code",
  btnLink1: "https://github.com/hashimkhanzada/react-portfolio-website",
  imgStart: "",
  img: "/react-logo.svg",
  alt: "React Logo",
  start: "",
  Icon: <FaGithub />,
};

export const aboutMeSection = {
  id: "aboutMe",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  skills: true,
  techsUsed: false,
  AboutMeHeader: "ABOUT ME",
  headline: "Full-stack .NET developer",
  description:
    "Software engineering graduate of UCOL, with a passion for developing exciting software.",
  description2:
    "A fast learner with strong time management and problem solving skills. I've successfully worked on multiple team projects during my degree, using agile based methodologies and DevOps tools, where communication skills and teamwork is essential. ",
  buttonLabel: "View Resume",
  btnLink1: "/hashim-khanzada-resume.pdf",
  imgStart: "start",
  logoInfo: [
    {
      imgUrl: "/dotnet.svg",
      tipText: ".Net Core",
    },
    {
      imgUrl: "/csharp.svg",
      tipText: "C Sharp",
    },
    {
      imgUrl: "/react.svg",
      tipText: "React Js",
    },
    {
      imgUrl: "/redux.svg",
      tipText: "Redux",
    },
    {
      imgUrl: "/sql.svg",
      tipText: "SQL Server",
    },
    {
      imgUrl: "/nodejslogo.svg",
      tipText: "Node Js",
    },
    {
      imgUrl: "/javascript.svg",
      tipText: "JavaScript",
    },
    {
      imgUrl: "/typescript.svg",
      tipText: "TypeScript",
    },
    {
      imgUrl: "/jquery.svg",
      tipText: "jQuery",
    },
    {
      imgUrl: "/azure.svg",
      tipText: "Azure",
    },
    {
      imgUrl: "/dockerlogo.svg",
      tipText: "Docker",
    },
    {
      imgUrl: "/firebase.svg",
      tipText: "Firebase",
    },
    {
      imgUrl: "/git-icon.svg",
      tipText: "Git",
    },

    {
      imgUrl: "/materialui.svg",
      tipText: "Material UI",
    },
    {
      imgUrl: "/xamarin.svg",
      tipText: "Xamarin",
    },
    {
      imgUrl: "/vue.svg",
      tipText: "Vue Js",
    },
    {
      imgUrl: "/mongodb-icon.svg",
      tipText: "Mongo DB",
    },
    {
      imgUrl: "/html.svg",
      tipText: "HTML",
    },
    {
      imgUrl: "/css.svg",
      tipText: "CSS",
    },
    {
      imgUrl: "/efcore.svg",
      tipText: "Entity Framework Core",
    },
  ],

  alt: "Skills",
  start: "true",
  Icon: <FaFilePdf />,
};

export const dietTrackerSection = {
  id: "dietTracker",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  techsUsed: true,
  youtubeVideo: true,
  youtubeUrl: "h5HO1Ii3xj8",
  topLine: "Industry Project - sponsored by UCOL",
  headline: "Diet Tracking Software",
  description:
    "A diet tracking web application that utilizes the NzFoodFiles database and FatSecret API. " +
    "Users can search these extensive databases for food items, to track their nutrition. ",
  description2:
    "Users can use the in-built nutrient calculator to set goals, view a daily/weekly summary of their intakes, and export summaries in a csv format.",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Demo",
  btnLink1: "https://github.com/hashimkhanzada/Nutritional_Software",
  imgStart: "",
  img: "/food.svg",
  logoInfo: [
    {
      imgUrl: "/dotnet.svg",
      tipText: ".Net Core",
    },
    {
      imgUrl: "/csharp.svg",
      tipText: "C Sharp",
    },
    {
      imgUrl: "/sql.svg",
      tipText: "SQL Server",
    },
    {
      imgUrl: "/jquery.svg",
      tipText: "jQuery",
    },
    {
      imgUrl: "/javascript.svg",
      tipText: "JavaScript",
    },
    {
      imgUrl: "/efcore.svg",
      tipText: "Entity Framework Core",
    },
    {
      imgUrl: "/azure.svg",
      tipText: "Azure",
    },
  ],
  start: "",
  Icon: <FaGithub />,
};

export const countdownClone = {
  id: "countdownClone",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  techsUsed: true,
  youtubeVideo: true,
  youtubeUrl: "DXltIa9UvBs",
  extraBtn: true,
  topLine: "React | NodeJs | MongoDB",
  headline: "Countdown shop Clone",
  description:
    "Clone of the online Countdown web application, built with the MERN stack.",
  description2:
    "Uses JWT for user auth, and redux for state management. Users can browse / purchase items from the store, and view their order history.",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Visit Site",
  btnLink1: "https://github.com/hashimkhanzada/countdown-clone",
  btnLink2: "https://countdown-clone.netlify.app/",
  imgStart: "",
  img: "/travel.svg",

  logoInfo: [
    {
      imgUrl: "/nodejslogo.svg",
      tipText: "Node Js",
    },
    {
      imgUrl: "/react.svg",
      tipText: "React",
    },
    {
      imgUrl: "/typescript.svg",
      tipText: "TypeScript",
    },
    {
      imgUrl: "/mongodb-icon.svg",
      tipText: "MongoDB",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
  Icon2: <AiOutlineShopping />,
};

export const planStudyOptionsSection = {
  id: "planStudyOptions",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  techsUsed: true,
  topLine: "WPF | Caliburn Micro",
  headline: "Plan Study Options",
  description:
    "A desktop application to aid UCOL BICT (Bachelor's in ICT) students in planning their study options. Gives students the available list of courses, calculates their credits, and shows them the courses they're eligible for based on the major they choose.",
  description2:
    "Uses Caliburn Micro as its MVVM framework, and Simple Container as its dependency injection system. Dapper is used as the ORM. Material Design XAML is used to style the UI components.",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  btnLink1: "https://github.com/hashimkhanzada/WPF.PlanStudyOptions",
  imgStart: "",
  img: "/books.svg",

  logoInfo: [
    {
      imgUrl: "/dotnet.svg",
      tipText: ".Net Core",
    },
    {
      imgUrl: "/csharp.svg",
      tipText: "C Sharp",
    },
    {
      imgUrl: "/sql.svg",
      tipText: "SQL Server",
    },
    {
      imgUrl: "/caliburnmicro.svg",
      tipText: "Caliburn Micro",
    },
    {
      imgUrl: "/dapper.svg",
      tipText: "Dapper",
    },
    {
      imgUrl: "/materialdesignxaml.svg",
      tipText: "Material Design XAML",
    },
  ],
  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
};

export const intercity = {
  id: "intercity",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  techsUsed: true,
  youtubeVideo: true,
  youtubeUrl: "h4NJGhGGyrI",
  extraBtn: true,
  topLine: ".NET Web API | React",
  headline: "InterCity Clone",
  description:
    "An InterCity clone web application built with React and .NET 5 Web API. Users are able to search for trips and book / manage them accordingly.",
  description2:
    "The app uses Google cloud SQL as its database. The API has been containerized using docker and deployed on Azure, with the front-end deployed on netlify.",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Visit Site",
  btnLink1: "https://github.com/hashimkhanzada/InterCityClone",
  btnLink2: "https://intercityclone.netlify.app/",
  imgStart: "",
  img: "/travel.svg",

  logoInfo: [
    {
      imgUrl: "/dotnet.svg",
      tipText: ".Net Core",
    },
    {
      imgUrl: "/csharp.svg",
      tipText: "C Sharp",
    },
    {
      imgUrl: "/react.svg",
      tipText: "React",
    },
    {
      imgUrl: "/typescript.svg",
      tipText: "TypeScript",
    },
    {
      imgUrl: "/cloudsql.svg",
      tipText: "Google Cloud SQL",
    },
    {
      imgUrl: "/efcore.svg",
      tipText: "Entity Framework",
    },
    {
      imgUrl: "/dockerlogo.svg",
      tipText: "Docker",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
  Icon2: <IoBusSharp />,
};

export const dataVisualizer = {
  id: "dataVisualizer",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  techsUsed: true,
  youtubeVideo: true,
  youtubeUrl: "LqohZKeawQo",
  topLine: "React | MatterJs",
  headline: "Data Visualizer",
  description:
    "A data visualizer that converts data from a .CSV file and displays them as movable objects. Uses a physics engine to render objects, representing the uploaded data.",

  extraBtn: true,
  btnLink2: "https://dataviz.netlify.app/",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Live Demo",
  btnLink1:
    "https:/github.com/hashimkhanzada/react-portfolio-website/tree/master/src/pages/DataVisualizerPage",

  imgStart: "",

  logoInfo: [
    {
      imgUrl: "/react.svg",
      tipText: "React Js",
    },
    {
      imgUrl: "/javascript.svg",
      tipText: "JavaScript",
    },
    {
      imgUrl: "/matterjs.svg",
      tipText: "Matter JS",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
  Icon2: <FaChartPie />,
};
