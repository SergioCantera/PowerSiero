export interface Props {
  id: string;
  title: string;
  slug: string;
  image: string;
  href: string;
}
export type Certification = Props;

export const certifications: Props[] = [
  {
    id: "MB-901",
    title: "Dynamics 365 Fundamentals",
    slug: "mb-901",
    image:"https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    href: "#",
  },
  {
    id:"PL-900",
    title: "Power Platform Fundamentals",
    slug: "pl-900",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/9D9B97D6057B07D2?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"AZ-900",
    title: "Azure Fundamentals",
    slug: "az-900",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/1CED9976EED359B?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"AI-900",
    title: "Azure AI Fundamentals",
    slug: "ai-900",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/F493A0B20BCF1309?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"PL-100",
    title: "Power Platform App Maker Associate",
    slug: "pl-100",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/28C52CC443E0D4C6?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"PL-200",
    title: "Power Platform Functional Consultant Associate",
    slug: "pl-200",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/142AD6B60222A337?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"PL-300",
    title: "Power BI Data Analyst Associate",
    slug: "pl-300",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/40D5873153B5DA5C?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"PL-400",
    title: "Power Platform Developer Associate",
    slug: "pl-400",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-associate-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/4826635104F37F3E?sharingId=DBB92255EAA0AC4F",
  },
  {
    id:"PL-600",
    title: "Power Platform Solution Architect Expert",
    slug: "pl-600",
    image: "https://learn.microsoft.com/media/learn/certification/badges/microsoft-certified-expert-badge.svg",
    href: "https://learn.microsoft.com/api/credentials/share/en-us/SergioGarcaFonseca-6740/55639C96DAA740A5?sharingId=DBB92255EAA0AC4F",
  },
];
