type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "jainaman0744@gmail.com",
  title: "Hi, I’m Aman 👋",
  // profile: "/profile.webp",
  description:
    "Namaste, i'm a *Full-Stack developer* with over *3 years* of web experience. I am currently working with *NextJS and Typescript*. Outside of work I completing my Bachelor of Technology in Computer Science and learning So Many Things.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/itsjainaman",
    },
    {
      label: "Linkedin",
      link: "https://www.linkedin.com/in/itzamanjain/",
    },
    {
      label: "Github",
      link: "https://github.com/itzamanjain",
    },
  ],
};

export default presentation;
