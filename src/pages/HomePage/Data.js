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
  topLine: "Built with React",
  headline: "My Portfolio Website",
  description: "A showcase of my projects.",
  buttonLabel: "Source Code",
  btnLink1: "https://github.com/hashimkhanzada/react-portfolio-website",
  imgStart: "",
  img: require("../../images/react-logo.svg").default,
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
  headline: "Full-stack Developer",
  description:
    "Software engineering graduate of UCOL, with a passion for developing exciting software.",
  description2:
    "A fast learner with strong time management and problem solving skills. I've successfully worked on multiple team projects, using agile based methodologies and DevOps tools, where communication skills and teamwork is essential. ",
  buttonLabel: "View Resume",
  btnLink1: require("../../images/hashim_khanzada_cv.pdf").default,
  imgStart: "start",
  logoInfo: [
    {
      imgUrl: require("../../images/dotnet.svg").default,
      tipText: ".Net Core",
    },
    {
      imgUrl: require("../../images/csharp.svg").default,
      tipText: "C Sharp",
    },
    {
      imgUrl: require("../../images/react.svg").default,
      tipText: "React Js",
    },
    {
      imgUrl: require("../../images/redux.svg").default,
      tipText: "Redux",
    },
    {
      imgUrl: require("../../images/sql.svg").default,
      tipText: "SQL Server",
    },
    {
      imgUrl: require("../../images/nodejslogo.svg").default,
      tipText: "Node Js",
    },
    {
      imgUrl: require("../../images/javascript.svg").default,
      tipText: "JavaScript",
    },
    {
      imgUrl: require("../../images/typescript.svg").default,
      tipText: "TypeScript",
    },
    {
      imgUrl: require("../../images/jquery.svg").default,
      tipText: "jQuery",
    },
    {
      imgUrl: require("../../images/azure.svg").default,
      tipText: "Azure",
    },
    {
      imgUrl: require("../../images/dockerlogo.svg").default,
      tipText: "Docker",
    },
    {
      imgUrl: require("../../images/firebase.svg").default,
      tipText: "Firebase",
    },
    {
      imgUrl: require("../../images/git-icon.svg").default,
      tipText: "Git",
    },

    {
      imgUrl: require("../../images/materialui.svg").default,
      tipText: "Material UI",
    },
    {
      imgUrl: require("../../images/xamarin.svg").default,
      tipText: "Xamarin",
    },
    {
      imgUrl: require("../../images/angular.svg").default,
      tipText: "Angular 2+",
    },
    {
      imgUrl: require("../../images/mongodb-icon.svg").default,
      tipText: "Mongo DB",
    },
    {
      imgUrl: require("../../images/html.svg").default,
      tipText: "HTML",
    },
    {
      imgUrl: require("../../images/css.svg").default,
      tipText: "CSS",
    },
    {
      imgUrl: require("../../images/efcore.svg").default,
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
  extraBtn: true,
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
  buttonLabel2: "View Details",
  btnLink1: "https://github.com/hashimkhanzada/Nutritional_Software",
  btnLink2: require("../../images/poster_diet_tracker.pdf").default,
  imgStart: "",
  img: require("../../images/food.svg").default,
  logoInfo: [
    {
      imgUrl: require("../../images/dotnet.svg").default,
      tipText: ".Net Core",
    },
    {
      imgUrl: require("../../images/csharp.svg").default,
      tipText: "C Sharp",
    },
    {
      imgUrl: require("../../images/sql.svg").default,
      tipText: "SQL Server",
    },
    {
      imgUrl: require("../../images/jquery.svg").default,
      tipText: "jQuery",
    },
    {
      imgUrl: require("../../images/javascript.svg").default,
      tipText: "JavaScript",
    },
    {
      imgUrl: require("../../images/efcore.svg").default,
      tipText: "Entity Framework Core",
    },
    {
      imgUrl: require("../../images/azure.svg").default,
      tipText: "Azure",
    },
  ],
  start: "",
  Icon: <FaGithub />,
  Icon2: <FaFilePdf />,
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
  img: require("../../images/travel.svg").default,

  logoInfo: [
    {
      imgUrl: require("../../images/nodejslogo.svg").default,
      tipText: "Node Js",
    },
    {
      imgUrl: require("../../images/react.svg").default,
      tipText: "React",
    },
    {
      imgUrl: require("../../images/typescript.svg").default,
      tipText: "TypeScript",
    },
    {
      imgUrl: require("../../images/mongodb-icon.svg").default,
      tipText: "MongoDB",
    },
    {
      imgUrl: require("../../images/redux.svg").default,
      tipText: "Redux",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
  Icon2: <AiOutlineShopping />,
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
  img: require("../../images/travel.svg").default,

  logoInfo: [
    {
      imgUrl: require("../../images/dotnet.svg").default,
      tipText: ".Net Core",
    },
    {
      imgUrl: require("../../images/csharp.svg").default,
      tipText: "C Sharp",
    },
    {
      imgUrl: require("../../images/react.svg").default,
      tipText: "React",
    },
    {
      imgUrl: require("../../images/typescript.svg").default,
      tipText: "TypeScript",
    },
    {
      imgUrl: require("../../images/cloudsql.svg").default,
      tipText: "Google Cloud SQL",
    },
    {
      imgUrl: require("../../images/efcore.svg").default,
      tipText: "Entity Framework",
    },
    {
      imgUrl: require("../../images/dockerlogo.svg").default,
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
  internalLink: true,
  topLine: "React | MatterJs",
  headline: "Data Visualizer",
  description:
    "A data visualizer that converts data from a .CSV file and displays them as movable objects. Uses a physics engine to render objects, representing the uploaded data.",

  extraBtn: true,
  btnLink2: "/DataViz",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Live Demo",
  btnLink1:
    "https://github.com/hashimkhanzada/react-portfolio-website/tree/older-version/src/pages/DataVisualizerPage",

  imgStart: "",

  logoInfo: [
    {
      imgUrl: require("../../images/react.svg").default,
      tipText: "React Js",
    },
    {
      imgUrl: require("../../images/javascript.svg").default,
      tipText: "JavaScript",
    },
    {
      imgUrl: require("../../images/matterjs.svg").default,
      tipText: "Matter JS",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
  Icon2: <FaChartPie />,
};
