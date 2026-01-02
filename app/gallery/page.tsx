import { getPhotos, getCategories } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import type { Metadata } from "next";
import { getSiteConfig } from "@/lib/data";

const config = getSiteConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export const metadata: Metadata = {
  title: "Galerie photos",
  description: "Découvrez la galerie photos de Majosol : moments de convivialité, événements, et vie de l'association d'échange de services à Meyzieu.",
  keywords: [
    "galerie photos Majosol",
    "photos association Meyzieu",
    "événements photos",
    "convivialité photos",
  ],
  openGraph: {
    title: `Galerie photos | ${config.site.name}`,
    description: "Découvrez la galerie photos de Majosol : moments de convivialité et événements de l'association.",
    url: `${siteUrl}/gallery`,
    siteName: config.site.name,
    locale: "fr_FR",
    type: "website",
  },
  alternates: {
    canonical: `${siteUrl}/gallery`,
  },
};

export default function GalleryPage() {
  const allPhotos = getPhotos();
  const categories = getCategories();

  return (
    <div className="min-h-screen">
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Galerie photos</h1>
          <p className="text-xl text-white/95 max-w-2xl mx-auto">
            Découvrez les moments de convivialité et d&apos;entraide de notre association
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">

        {categories.length > 0 && (
          <div className="mb-10">
            <h2 className="text-2xl font-semibold mb-6 text-center">Filtrer par catégorie</h2>
            <div className="flex gap-3 flex-wrap justify-center">
              <button className="px-6 py-2 rounded-full border-2 border-primary bg-primary text-white font-medium hover:bg-primary/90 transition-colors">
                Toutes
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border-2 border-primary/30 text-foreground font-medium hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allPhotos.map((photo) => (
            <Card key={photo.id} className="overflow-hidden hover:shadow-primary transition-all duration-300 border-0 shadow-soft group">
              <CardContent className="p-0">
                <div className="relative aspect-square bg-muted overflow-hidden">
                  <Image
                    src={photo.url}
                    alt={photo.title || "Photo"}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                {photo.title && (
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {photo.title}
                    </h3>
                    {photo.description && (
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {photo.description}
                      </p>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {allPhotos.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">Aucune photo pour le moment.</p>
          </div>
        )}
      </div>
    </div>
  );
}
