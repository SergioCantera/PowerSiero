export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Sergio García",
    slug: "sergio-garcia",
    image: "./src/assets/authors/sergio.webp",
    bio: "Soy Sergio García, Team Leader y Arquitecto en Power Platform especializado en Power Apps, Power Pages y Power Automate, además con conocimientos en programación con lenguajes como JS, TS, HTML, CSS, Python y .Net.",
  },
  /*{
    name: "Joshua Wood",
    slug: "joshua-wood",
    image: "./src/assets/authors/joshua.webp",
    bio: "Joshua is a Microsoft Azure Certified Cloud Professional and a Google Certified Associate Cloud Engineer. A Data Analytics at Acme, specializing in the use of cloud infrastructure for Machine Learning and Deep Learning operation at scale.",
  },
  {
    name: "Erika Oliver",
    slug: "erika-oliver",
    image: "./src/assets/authors/erika.webp",
    bio: "Erika Oliver is a successful entrepreuner. She is the founder of Acme Inc, a bootstrapped business that builds affordable SaaS tools for local news, indie publishers, and other small businesses.",
  },*/
];
