import { getPublishedArticles } from "@/lib/data";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/data";

const config = getSiteConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export const metadata: Metadata = {
  title: "Actualités",
  description: "Découvrez les dernières actualités de Majosol : événements, moments de convivialité, et vie de l'association d'échange de services à Meyzieu.",
  keywords: [
    "actualités Majosol",
    "événements Meyzieu",
    "association Meyzieu",
    "actualités association",
    "événements convivialité",
  ],
  openGraph: {
    title: `Actualités | ${config.site.name}`,
    description: "Découvrez les dernières actualités de Majosol : événements, moments de convivialité, et vie de l'association.",
    url: `${siteUrl}/news`,
    siteName: config.site.name,
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/news`,
  },
};

export default function NewsPage() {
  const articles = getPublishedArticles();

  return (
    <div className="min-h-screen">
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Actualités</h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Restez informés de la vie de l&apos;association et de nos événements
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <Card key={article.id} className="hover:shadow-primary transition-all duration-300 border-0 shadow-soft overflow-hidden group">
              {article.coverImage && (
                <div className="relative w-full h-56 overflow-hidden">
                  <Image
                    src={article.coverImage}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                </div>
              )}
              <CardHeader className="pb-3">
                <CardDescription className="text-xs font-semibold text-primary uppercase tracking-wide">
                  {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
                <CardTitle className="line-clamp-2 text-xl group-hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {article.excerpt && (
                  <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                    {article.excerpt}
                  </p>
                )}
                <Button asChild variant="ghost" className="text-primary hover:text-primary hover:bg-primary/10 w-full">
                  <Link href={`/news/${article.slug}`}>Lire la suite →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {articles.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Aucun article pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
