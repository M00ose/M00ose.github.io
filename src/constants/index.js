import {
  css3,
  express,
  figma,
  git,
  html5,
  javascript,
  materialui,
  mongoDB,
  nextjs,
  node,
  react,
  tailwindcss,
  threejs,
  typescript
} from '../assets';

export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
];

const technologies = [
    {
      name: "HTML 5",
      icon: html5,
      description: "HTML is the standard markup language used to create web pages; it ensures proper formatting of text and images (using tags) so that Internet browsers can display them in the ways they were intended to look."
    },
    {
      name: "CSS 3",
      icon: css3,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React.JS",
      icon: react,
    },
    {
      name: "Next.JS",
      icon: nextjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwindcss,
    },
    {
      name: "Material UI",
      icon: materialui,
    },
    {
      name: "Node.JS",
      icon: node,
    },
    {
      name: "Express",
      icon: express,
    },
    {
      name: "MongoDB",
      icon: mongoDB,
    },
    {
      name: "Three.JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,

    },
    {
      name: "figma",
      icon: figma,
    },
];

const projects = [
    {
      name: "",
      description:
        "",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: "",
      source_code_link: "",
    },
];

export { technologies, projects };
