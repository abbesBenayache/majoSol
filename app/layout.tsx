import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { getSiteConfig } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

const config = getSiteConfig();

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${config.site.name} - ${config.site.tagline}`,
    template: `%s | ${config.site.name}`,
  },
  description: config.site.description,
  keywords: [
    "association",
    "échange de services",
    "Meyzieu",
    "entraide",
    "solidarité",
    "voisinage",
    "services gratuits",
    "bénévolat",
    "communauté",
    "Rhône",
    "69330",
    "Majosol",
    "association loi 1901",
    "échange heures",
    "services entre voisins",
  ],
  authors: [{ name: config.site.name }],
  creator: config.site.name,
  publisher: config.site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: siteUrl,
    siteName: config.site.name,
    title: `${config.site.name} - ${config.site.tagline}`,
    description: config.site.description,
    images: [
      {
        url: `${siteUrl}${config.site.logo}`,
        width: 1200,
        height: 630,
        alt: config.site.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${config.site.name} - ${config.site.tagline}`,
    description: config.site.description,
    images: [`${siteUrl}${config.site.logo}`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: config.site.name,
    description: config.site.description,
    url: siteUrl,
    logo: `${siteUrl}${config.site.logo}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: config.site.city,
      addressRegion: config.site.department,
      postalCode: config.site.postalCode,
      addressCountry: "FR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: config.contact.email,
      telephone: config.contact.phoneFormatted,
      contactType: "customer service",
    },
    foundingDate: `${config.site.foundedYear}-01-01`,
    areaServed: {
      "@type": "City",
      name: config.site.city,
    },
    sameAs: [],
  };

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3 group">
                <Image
                  src={config.site.logo}
                  alt={`Logo ${config.site.name}`}
                  width={55}
                  height={55}
                  className="rounded-lg shadow-soft group-hover:shadow-primary transition-shadow duration-300"
                  unoptimized
                />
                <span className="text-xl md:text-2xl font-bold text-primary">{config.site.name}</span>
              </Link>
              <div className="hidden md:flex gap-8 items-center">
                {config.navigation.links.map((link) => (
                  <Link key={link.href} href={link.href} className="text-foreground hover:text-primary font-medium transition-colors">
                    {link.text}
                  </Link>
                ))}
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link href={config.navigation.joinButton.href}>{config.navigation.joinButton.text}</Link>
                </Button>
              </div>
              <div className="md:hidden">
                <Button asChild size="sm" className="bg-primary hover:bg-primary/90 text-white">
                  <Link href={config.navigation.joinButton.href}>{config.navigation.joinButton.text}</Link>
                </Button>
              </div>
            </div>
            <div className="md:hidden mt-4 pt-4 border-t flex flex-wrap gap-4">
              {config.navigation.links.map((link) => (
                <Link key={link.href} href={link.href} className="text-foreground hover:text-primary font-medium transition-colors text-sm">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </nav>
        <main>{children}</main>
        <footer className="border-t bg-gradient-to-b from-white to-secondary/20 mt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">{config.site.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {config.footer.description}
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">{config.footer.quickLinksTitle}</h3>
                <ul className="space-y-2 text-sm">
                  {config.navigation.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                        {link.text}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-foreground">{config.footer.contactTitle}</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>
                    <a href={`mailto:${config.contact.email}`} className="hover:text-primary transition-colors">
                      {config.contact.email}
                    </a>
                  </li>
                  <li>
                    <a href={`tel:${config.contact.phoneFormatted}`} className="hover:text-primary transition-colors">
                      {config.contact.phone}
                    </a>
                  </li>
                  <li>{config.contact.address}</li>
                </ul>
              </div>
            </div>
            <div className="border-t pt-8 text-center text-sm text-muted-foreground">
              <p>{config.footer.copyright}</p>
              <p className="mt-2">{config.footer.legal}</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
