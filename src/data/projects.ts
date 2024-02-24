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
    title: "Portfolio / Lina BLIDI",
    techs: ["ReactJS (NextJS)", "TypeScript"],
    link: "https://www.linablidi.fr/",
  },
  {
    title: "Portfolio ",
    techs: ["Astro"],
    link: "/",
    isComingSoon: true,
  },
];

export default projects;
