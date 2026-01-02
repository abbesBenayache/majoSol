import { Heart, Users, HandHeart, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/data";

const config = getSiteConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export const metadata: Metadata = {
  title: "Qui sommes-nous ?",
  description: "Découvrez l'histoire de Majosol, association d'échange de services à Meyzieu depuis 2015. Comment ça fonctionne, quels services, moments de convivialité et adhésion.",
  keywords: [
    "Majosol",
    "association Meyzieu",
    "échange de services",
    "entraide",
    "solidarité",
    "comment ça marche",
    "adhésion",
    "Meyzieu 69330",
  ],
  openGraph: {
    title: `Qui sommes-nous ? | ${config.site.name}`,
    description: "Découvrez l'histoire de Majosol, association d'échange de services à Meyzieu depuis 2015.",
    url: `${siteUrl}/about`,
    siteName: config.site.name,
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Qui sommes-nous ?</h1>
          <p className="text-xl text-white/95 max-w-3xl mx-auto">
            Une association d&apos;échange de services créée par et pour les habitants de Meyzieu
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="space-y-8">
          <Card className="border border-primary/10 hover:border-primary/30 transition-colors shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Notre histoire</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Majosol a été créée en <strong className="text-foreground">2015</strong>, il y a maintenant 
                  <strong className="text-primary"> 10 ans</strong>. L&apos;association est née de l&apos;envie de créer 
                  du lien entre les habitants de Meyzieu et de favoriser l&apos;entraide de proximité.
                </p>
                <p>
                  Aujourd&apos;hui, Majosol compte de nombreux adhérents, 
                  ce qui représente beaucoup plus de personnes car l&apos;adhésion est familiale. L&apos;association 
                  continue de grandir et de renforcer les liens de solidarité dans notre ville.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 hover:border-primary/30 transition-colors shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <HandHeart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Comment ça fonctionne ?</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Le principe est simple : <strong className="text-foreground">les services rendus se comptent en heures</strong>.
                  Si vous rendez un service qui a duré 2 heures, vous pourrez alors demander à votre tour 
                  un coup de pouce d&apos;un autre adhérent de l&apos;association.
                </p>
                <p>
                  Nous souhaitons que les adhérents jouent le jeu et que chacun puisse rendre des services 
                  selon ses compétences et ses disponibilités. Le secrétariat tient à jour un registre avec 
                  tous les services demandés ainsi que les personnes qui y ont répondu favorablement.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 hover:border-primary/30 transition-colors shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Quels services ?</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Les demandes de service peuvent être très variées du moment qu&apos;elles ne sont pas récurrentes 
                et qu&apos;elles ne prennent pas le travail d&apos;un professionnel. Voici quelques exemples :
              </p>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  "Des trajets (aéroport, courses, etc.)",
                  "Des petits bricolages",
                  "Des dépannages informatiques",
                  "De la couture",
                  "Du jardinage",
                  "De la garde d'animaux",
                  "Des prêts de matériel",
                  "Des dons",
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Les demandes de service se font via un <strong className="text-foreground">Google Group</strong>, 
                accessible à tous les adhérents.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 hover:border-primary/30 transition-colors shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Moments de convivialité</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Afin que les adhérents puissent se rencontrer, il y a des moments festifs organisés 
                tout au long de l&apos;année :
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {["Apéritifs", "Pique-niques", "Soirée galette", "Soirée cinéma"].map((event, idx) => (
                  <Card key={idx} className="border-primary/20 bg-white">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <span className="text-primary font-bold">🎉</span>
                        </div>
                        <span className="font-semibold text-foreground">{event}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed">
                L&apos;association participe également chaque année au <strong className="text-foreground">forum des associations</strong> début septembre, à la <strong className="text-foreground">fête des lumières</strong> et aussi de temps en temps 
                à la <strong className="text-foreground">fête de la musique</strong>. Cela nous permet de nous faire connaître 
                auprès des Majolans.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-primary/10 hover:border-primary/30 transition-colors shadow-soft">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">Adhésion</h2>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  L&apos;adhésion est de <strong className="text-foreground text-2xl">8 € par an</strong> et est familiale. 
                  Pour adhérer ou obtenir plus d&apos;informations, n&apos;hésitez pas à nous contacter !
                </p>
                <div className="mt-6">
                  <Button asChild className="bg-primary text-white hover:bg-primary/90">
                    <Link href="/contact">Nous contacter</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
