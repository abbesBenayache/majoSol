import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { getRecentArticles, getUpcomingEvents, getSiteConfig } from "@/lib/data";
import { Heart, Users, Clock, HandHeart } from "lucide-react";
import Image from "next/image";
import * as LucideIcons from "lucide-react";
import type { Metadata } from "next";

const config = getSiteConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export const metadata: Metadata = {
  title: config.homepage.hero.title,
  description: config.site.description,
  openGraph: {
    title: `${config.site.name} - ${config.homepage.hero.title}`,
    description: config.site.description,
    url: siteUrl,
    siteName: config.site.name,
    images: [
      {
        url: `${siteUrl}${config.homepage.hero.backgroundImage}`,
        width: 1200,
        height: 630,
        alt: config.homepage.hero.title,
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function HomePage() {
  const recentArticles = getRecentArticles(4);
  const upcomingEvents = getUpcomingEvents().slice(0, 3);
  const config = getSiteConfig();

  return (
    <div className="min-h-screen">
      {/* Hero Section avec photo en arrière-plan */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src={config.homepage.hero.backgroundImage}
            alt={`${config.site.name} - ${config.site.tagline}`}
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/75 to-primary/65"></div>
        </div>
        
        {/* Contenu */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight text-white drop-shadow-lg">
              {config.homepage.hero.title}
            </h1>
            <p className="text-2xl md:text-3xl font-semibold text-white/90 mb-6 leading-relaxed drop-shadow-md italic">
              {config.homepage.hero.tagline}
            </p>
            <p className="text-xl md:text-2xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-md">
              {config.homepage.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto shadow-xl">
                <Link href={config.homepage.hero.primaryButton.link}>{config.homepage.hero.primaryButton.text}</Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white/20 hover:text-white text-lg px-8 py-6 h-auto shadow-lg">
                <Link href={config.homepage.hero.secondaryButton.link}>{config.homepage.hero.secondaryButton.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {config.homepage.stats.map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-white shadow-soft hover:shadow-primary transition-shadow">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comment ça marche - Design simple avec cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              {config.homepage.howItWorks.title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {config.homepage.howItWorks.subtitle}
            </p>
          </div>
          
          {/* Steps en une ligne avec cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {config.homepage.howItWorks.steps.map((step, index) => {
                const IconComponent = (LucideIcons as any)[step.icon] || HandHeart;
                return (
                  <Card key={index} className="border border-primary/10 hover:border-primary/30 transition-colors shadow-soft">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4 text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Dernières actualités */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{config.homepage.news.title}</h2>
            <p className="text-xl text-muted-foreground">{config.homepage.news.subtitle}</p>
          </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-primary transition-all duration-300 border-0 shadow-soft overflow-hidden group">
              {article.coverImage && (
                <div className="relative w-full h-48 overflow-hidden">
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
                <p className="text-muted-foreground line-clamp-3 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <Button asChild variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">
                  <Link href={`/news/${article.slug}`}>Lire la suite →</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Link href="/news">{config.homepage.news.seeAllButton}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Prochains événements avec photos */}
      {upcomingEvents.length > 0 && (
        <section className="py-20 bg-gradient-to-b from-white to-secondary/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">{config.homepage.events.title}</h2>
              <p className="text-xl text-muted-foreground">{config.homepage.events.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {upcomingEvents.map((event, index) => {
                // Mapping des images par nom d'événement
                const eventImageMap: Record<string, string> = {
                  "Forum des associations 2026": "/images/gallery/forum-1.jpg",
                  "Apéritif de rentrée": "/images/articles/apretif_1.jpg",
                  "Soirée galette des rois 2023": "/images/articles/partager_les_succulentes_galettes_1.jpg",
                  "Journée festive à l'Iloz": "/images/articles/journee_festive_Iloz_1.jpg",
                  "Soirée cinéma": "/images/articles/soiree_cinema_1.jpg",
                  "Fête des Lumières": "/images/articles/fete_des_lumieres_1.jpg",
                  "Forum des associations 2022": "/images/articles/forum_associations.jpg",
                  "Apéritif convivial": "/images/articles/apretif_1.jpg",
                  "Pique-nique à la chèvrerie d'Eve": "/images/articles/pique_nique_.jpg"
                };
                
                const eventImage = eventImageMap[event.name] || "/images/gallery/photo-10-ans.jpg";
                
                return (
                  <Card key={event.id} className="border-2 hover:border-primary transition-all duration-300 shadow-soft hover:shadow-primary overflow-hidden group">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={eventImage}
                        alt={event.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        unoptimized
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <CardDescription className="text-xs font-semibold text-primary uppercase">
                          {new Date(event.date).toLocaleDateString("fr-FR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </CardDescription>
                      </div>
                      <CardTitle className="text-xl">{event.name}</CardTitle>
                      <CardDescription className="text-sm font-medium">
                        📍 {event.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">{event.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Adhésion */}
      <section className="py-20 gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <Heart className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {config.homepage.cta.title}
            </h2>
            <p className="text-xl text-white/95 mb-8 leading-relaxed">
              {config.homepage.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 h-auto">
                <Link href={config.homepage.cta.primaryButton.link}>{config.homepage.cta.primaryButton.text}</Link>
              </Button>
              <Button asChild size="lg" className="border-2 border-white text-white bg-transparent hover:bg-white/20 hover:text-white text-lg px-8 py-6 h-auto shadow-lg">
                <Link href={config.homepage.cta.secondaryButton.link}>{config.homepage.cta.secondaryButton.text}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
