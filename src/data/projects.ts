export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Crowdfunding Platform",
    techs: ["ReactJS (NextJS)", "MongoDB", "zod"],
    link: "https://ekchaipilade.vercel.app",
  },
  {
    title: "Code Share",
    techs: ["NextJS", "TypeScript","zod","mongoDb"],
    link: "https://www.codeshare.tech",
    
  },
  {
    title: "AnonChat Backend ",
    techs: "MERN",
    link: "https://github.com/itzamanjain/anonchat-backend",
    
  },
];

export default projects;
