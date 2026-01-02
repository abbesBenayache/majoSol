import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/data";

const config = getSiteConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contactez Majosol pour adhérer ou obtenir des informations. Email : ${config.contact.email}, Téléphone : ${config.contact.phone}. Association d'échange de services à Meyzieu.`,
  keywords: [
    "contact Majosol",
    "adhérer Majosol",
    "association Meyzieu",
    "contact association",
    "rejoindre Majosol",
    config.contact.email,
  ],
  openGraph: {
    title: `Contact | ${config.site.name}`,
    description: `Contactez Majosol pour adhérer ou obtenir des informations. Association d'échange de services à Meyzieu.`,
    url: `${siteUrl}/contact`,
    siteName: config.site.name,
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

