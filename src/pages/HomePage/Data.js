import { AiOutlineFileZip } from "react-icons/ai";
import { SiAzuredevops } from "react-icons/si";

import { FaGithub, FaFilePdf, FaYoutube, FaChartPie } from "react-icons/fa";

export const portfolioSection = {
  id: "portfolio",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  logoName: "Github",
  topLine: "Created with React",
  headline: "My Portfolio Website",
  description: "A showcase of my projects",
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
  logoName: "Resume",
  AboutMeHeader: "ABOUT ME",
  headline: "Full-stack .NET developer",
  description:
    "A software engineering graduate of UCOL, with a passion for developing exciting software.",
  description2:
    "A fast learner with strong time management and problem solving skills. I've successfully worked on multiple team projects during my degree, where communication skills and teamwork is essential. ",
  buttonLabel: "View Resume",
  btnLink1: require("../../images/hashim-cv.pdf").default,
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
      imgUrl: require("../../images/jquery.svg").default,
      tipText: "jQuery",
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
      imgUrl: require("../../images/javascript.svg").default,
      tipText: "JavaScript",
    },
    {
      imgUrl: require("../../images/typescript.svg").default,
      tipText: "TypeScript",
    },
    {
      imgUrl: require("../../images/azure.svg").default,
      tipText: "Azure",
    },
    {
      imgUrl: require("../../images/firebase.svg").default,
      tipText: "Firebase",
    },
    {
      imgUrl: require("../../images/vue.svg").default,
      tipText: "Vue Js",
    },
    {
      imgUrl: require("../../images/kotlin.svg").default,
      tipText: "Kotlin",
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
      imgUrl: require("../../images/java.svg").default,
      tipText: "Java",
    },

    {
      imgUrl: require("../../images/dapper.svg").default,
      tipText: "Dapper",
    },

    {
      imgUrl: require("../../images/efcore.svg").default,
      tipText: "Entity Framework Core",
    },
    {
      imgUrl: require("../../images/git-icon.svg").default,
      tipText: "Git",
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
  logoName: "Github",
  logoName2: "Youtube",
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
};

export const planStudyOptionsSection = {
  id: "planStudyOptions",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  techsUsed: true,
  logoName: "Github",
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
  img: require("../../images/books.svg").default,

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
      imgUrl: require("../../images/caliburnmicro.svg").default,
      tipText: "Caliburn Micro",
    },
    {
      imgUrl: require("../../images/dapper.svg").default,
      tipText: "Dapper",
    },
    {
      imgUrl: require("../../images/materialdesignxaml.svg").default,
      tipText: "Material Design XAML",
    },
  ],
  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
};

export const vueApp = {
  id: "vueApp",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  techsUsed: true,
  logoName: "Azure",
  logoName2: "Youtube",
  youtubeVideo: true,
  youtubeUrl: "lmg2hHx8lVA",
  topLine: "VueJs | Vuetify",
  headline: "Single Page Application",
  description:
    "A responsive SPA created with Vue, styled with Vuetify.  " +
    "It uses firebase google authentication to allow users to sign in with their google account.",
  description2:
    "It has an inventory that contains Vue components, allowing the users to perform CRUD operations, using the browsers local storage. ",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Demo",
  btnLink1: "https://dev.azure.com/hashimkhanzada/VueJs",
  imgStart: "",
  img: require("../../images/onboard.svg").default,

  logoInfo: [
    {
      imgUrl: require("../../images/vue.svg").default,
      tipText: "Vue Js",
    },
    {
      imgUrl: require("../../images/vuetify.svg").default,
      tipText: "Vuetify",
    },
    {
      imgUrl: require("../../images/firebase.svg").default,
      tipText: "Firebase",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <SiAzuredevops />,
};

export const tuckbox = {
  id: "tuckbox",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  techsUsed: true,
  download: true,
  logoName: "Zip",
  logoName2: "Youtube",
  youtubeVideo: true,
  youtubeUrl: "8MQ8BU053t8",
  topLine: "JAVA | KOTLIN",
  headline: "TUCKBOX",
  description:
    "An android application for placing/managing lunch delivery orders. Uses firebase firestore as its remote database, and ROOM as its ORM.",
  description2:
    "Allows users to register/login, place/manage delivery orders, and manage their profiles.",
  description3: "Technologies used:",
  buttonLabel: "Download ZIP",
  buttonLabel2: "Demo",
  btnLink1: require("../../images/TuckBox.zip").default,
  imgStart: "",
  img: require("../../images/phonelogo.svg").default,

  logoInfo: [
    {
      imgUrl: require("../../images/java.svg").default,
      tipText: "Java",
    },
    {
      imgUrl: require("../../images/kotlin.svg").default,
      tipText: "Kotlin",
    },
    {
      imgUrl: require("../../images/firebase.svg").default,
      tipText: "Firebase",
    },
    {
      imgUrl: require("../../images/android.svg").default,
      tipText: "Android",
    },
    {
      imgUrl: require("../../images/materialui.svg").default,
      tipText: "Material UI",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <AiOutlineFileZip />,
};

export const intercity = {
  id: "intercity",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  techsUsed: true,
  logoName: "Github",
  youtubeVideo: true,
  youtubeUrl: "h4NJGhGGyrI",
  // logoName2: "Youtube",
  // extraBtn: true,
  topLine: ".NET Web API | React",
  headline: "InterCity Clone",
  description:
    "An InterCity clone web application built with React and .NET 5 Web API. Users are able to search for trips and book them accordingly. They can also manage their bookings using a unique reference number provided to them.",

  description3: "Technologies used:",
  buttonLabel: "Source Code",
  btnLink1: "https://github.com/hashimkhanzada/InterCityClone",
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
      imgUrl: require("../../images/javascript.svg").default,
      tipText: "JavaScript",
    },
    {
      imgUrl: require("../../images/typescript.svg").default,
      tipText: "TypeScript",
    },
    {
      imgUrl: require("../../images/sql.svg").default,
      tipText: "SQL Server",
    },
    {
      imgUrl: require("../../images/efcore.svg").default,
      tipText: "Entity Framework",
    },
  ],

  alt: "Skills",
  start: "",
  Icon: <FaGithub />,
};

export const dataVisualizer = {
  id: "dataVisualizer",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  techsUsed: true,
  logoName: "Github",
  youtubeVideo: true,
  youtubeUrl: "LqohZKeawQo",
  topLine: "React | MatterJs",
  headline: "Data Visualizer",
  description:
    "A data visualizer that converts data from a .CSV file and displays them as movable objects. Uses a physics engine to render objects, representing the uploaded data.",
  logoName2: "Data",
  extraBtn: true,
  btnLink2: "/DataViz",
  buttonLabel2: "Data Visualizer",
  description3: "Technologies used:",
  buttonLabel: "Source Code",
  buttonLabel2: "Live Demo",
  btnLink1:
    "https://github.com/hashimkhanzada/react-portfolio-website/tree/master/src/pages/DataVisualizerPage",
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
