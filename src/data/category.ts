export interface Props {
  title: string;
  slug: string;
  color: "green" | "blue" | "orange" | "purple" | "pink" | "yellow";
  description: string;
}
export type Category = Props;

export const categories: Props[] = [
  {
    title: "Power Automate",
    slug: "power-automate",
    color: "blue",
    description:
      "Keep up with the latest tech trends and learn about the latest innovations in software development, hardware design, cybersecurity, and more.",
  },
  {
    title: "Pro code",
    slug: "pro-code",
    color: "orange",
    description:
      "Explore the latest trends and ideas in fashion, food, home design, and more, and get inspiration for living your best life.",
  },
  {
    title: "Dataverse",
    slug: "dataverse",
    color: "green",
    description:
      "Discover tips and strategies for self-improvement, personal development, and achieving your goals, and find resources to help you grow as a person.",
  },
  {
    title: "Power Platform",
    slug: "power-platform",
    color: "pink",
    description:
      "Plan your next adventure and get travel tips and inspiration from experienced travelers, with articles covering destinations, cultures, and more.",
  },
  {
    title: "Power Apps",
    slug: "power-apps",
    color: "purple",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
  {
    title: "Power Pages",
    slug: "power-pages",
    color: "yellow",
    description:
      "Get insights and inspiration from the world of design, with articles covering graphic design, product design, interior design, and more.",
  },
];
