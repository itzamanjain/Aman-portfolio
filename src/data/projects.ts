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
    title: "AI DIARY",
    techs: ["NextJS", "TypeScript","React Native","mongoDb"],
    link: "https://buildspace-s5.vercel.app",
    
  },
  {
    title: "AnonChat Backend ",
    techs: "MERN",
    link: "https://github.com/itzamanjain/anonchat-backend",
    
  },
];

export default projects;
