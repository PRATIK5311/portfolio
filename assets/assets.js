import user2_image from "./user2-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import html from "./html.png";
import css from "./css.png";
import javascript from "./javascript.png";
import react from "./react.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
// import figma from "./figma.png";
// import git from "./git.png";
// import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile1_img from "./profile1_img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import weeb_icon from "./weeb-icon.png";
import leetcode_icon from "./leetcode-icon.png";
import gitgithub_icon from "./gitgithub-icon.png";
import dsa_icon from "./dsa-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import linkedin from "./linkedin.png";
import github from "./github.png";
import twitter from "./twitter.png";
import leetCode from "./leetCode.png";
import PSIT_Logo from "./PSIT_Logo.png";
import drvsics from "./drvsics.jpg";
import alpha from "./alpha.png";
import link from "./link.png";
import work1 from "./work1.png"
import work2 from "./work2.png"
export const assets = {
  user2_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  html,
  css,
  javascript,
  react,
  vscode,
  firebase,
//   figma,
//   git,
//   mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  linkedin,
  github,
  twitter,
  leetCode,
  profile1_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  weeb_icon,
  leetcode_icon,
  gitgithub_icon,
  dsa_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  PSIT_Logo,
  drvsics,
  alpha,
  link,
  work1,
  work2
};

export const workData = [
  // {
  //   title: "Trend-Hive ",
  //   description: "GOOD CLOTHES ",
  //   bgImage: "/work-1.png",
  // },

  // {
  //   title: "Meal-Mate ",
  //   description: "DELICIOUS CHOICE",
  //   bgImage: "/work-2.png",
  // },
  // {
  //   title: "Photography site",
  //   description: "Web Design",
  //   bgImage: "/work-3.png",
  // },
  // {
  //   title: "UI/UX designing",
  //   description: "UI/UX Design",
  //   bgImage: "/work-4.png",
  // },

       {
          title: "TrendHive",

          dates: "Dec 2024 - Present",
          active: true,
          description:
            "Welcome to TrendHive- an ecommerce revolution that reflects the aspiration of the new generation. On TrendHive, you can become your own fashion designer.",
          technologies: [
            "React.js",
            "TypeScript",
            "Redux",
            "TailwindCSS",

            "JavaScript"

          ],
          bgImage: '/work1.png',

        },

        {
          title: "MealMate",

          dates: "July 2024 - Present",
          active: true,
          description:
            "MealMate is a smart food delivery app featuring real-time restaurant listings, customizable menus, and secure payments, enhanced with an AI help bot for personalized support. With location-based services and efficient cart management.",
          technologies: [
            "React.js",
            "Javascript",
            "Redux Toolkit",
            "Auth0",
            "SCSS",
            "OpenAI",
            "Razrorpay",
          ],

          bgImage: "/work-2.png",
        },

  {
    title: "TrendHive",
    href: "https://github.com/vardaan-bhatia/ByteWrite",
    dates: "Dec 2024 - Present",
    active: true,
    description:
      "Welcome to TrendHive- an ecommerce revolution that reflects the aspiration of the new generation. On TrendHive, you can become your own fashion designer.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux",
      "TailwindCSS",
      "Shadcn UI",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "Multer",
      "Cloudinary",
      "JWT",
      "JavaScript",
      "Axios",
    ],
    links: [
      {
        type: "Source",
        href: "https://github.com/vardaan-bhatia/ByteWrite",
        // icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/trend.png",
  },

  {
    title: "MealMate",
    // href: "https://mealmatebyvardaan.vercel.app/",
    dates: "July 2024 - Present",
    active: true,
    description:
      "MealMate is a smart food delivery app featuring real-time restaurant listings, customizable menus, and secure payments, enhanced with an AI help bot for personalized support. With location-based services and efficient cart management.",
    technologies: [
      "React.js",
      "Javascript",
      "Redux Toolkit",
      "Auth0",
      "SCSS",
      "OpenAI",
      "Razrorpay",
    ],
    links: [
      {
        type: "Live",
        href: "https://mealmatebyvardaan.vercel.app/",
        // icon: <Icons.globe className="size-3" />,
      },
      {
        type: "Source",
        href: "https://github.com/vardaan-bhatia/MealMate",
        // icon: <Icons.github className="size-3" />,
      },
    ],
    image: "/mealmate.jpg",
  },

];





export const serviceData = [
  {
    icon: assets.weeb_icon,
    title: "Web development",
    description: "Web development is the process of building, programming...",
    link: "https://developer.mozilla.org/en-US/docs/Learn_web_development",
  },
  {
    icon: assets.dsa_icon,
    title: "Data Structure & Algorithms",
    description: "DSA helps solve problems with algorithms....",
    link: "https://www.w3schools.com/dsa/",
  },
  {
    icon: assets.leetcode_icon,
    title: "Leet code",
    description:
      "LeetCode challenges enhance problem-solving and coding skills....",
    link: "https://leetcode.com/problemset/",
  },
  {
    icon: assets.gitgithub_icon,
    title: "Git-Github",
    description:
      "Git tracks changes; GitHub enables collaboration and sharing....",
    link: "",
  },
];







export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description: "HTML, CSS, JavaScript React Js, Next Js , DSA",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "MCA in Computer Applications",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built 2 projects",
  },
];

export const toolsData = [
    
  assets.html,
  assets.css,
  assets.javascript,
  assets.react,
  assets.vscode,
  assets.firebase,
//   assets.mongodb,
//   assets.figma,
//   assets.git
];


export const serviceeData = [
  {
    icon: assets.PSIT_Logo,
    title: "College",
    description: "COLLEGE-Pranveer Singh Institute of Technology",
    college:"DEGREE-Master's in Computer Applications (MCA)",
    link: "https://www.psit.ac.in/",
    start: "START-2023",
    end: "END-2025",
  },
  {
    icon: assets.drvsics,
    title: "College",
    description: "COLLEGE-Dr.Virendra Swarup Institute of Computer",
    college: "DEGREE-Bachelor's in Computer Applications (BCA)",
    link: "https://www.vsicskanpur.org/",
    start: "START-2018",
    end: "END-2021",
  },
  {
    icon: assets.alpha,
    title: "Certificates",
    description: "Apna College",
      college:"Full Stack Web Development.               &              DataStructure & Algorithms.",
    link: "https://drive.google.com/file/d/1crlEZjeaH-ZU5_bRSZaTwZrql9OYNKVh/view?usp=drive_link",
  },
  {
    icon: assets.link,
    title: "Certificates",
    description:"Linkedin Learning",
    college:"Introduction to Career Skills in DataAnalytics                                                   &                    What Is Generative AI?",
    link: "https://drive.google.com/file/d/1HIvkZorAyh2cy5_P2gsy9oPWdq6ZXS6Z/view?usp=drive_link",
  },
];
