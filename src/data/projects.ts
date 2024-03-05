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
    title: "Customer Support using Discord",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "/",
    isComingSoon: true,
  },
  {
    title: "Portfolio ",
    techs: ["Astro"],
    link: "/",
    
  },
];

export default projects;
