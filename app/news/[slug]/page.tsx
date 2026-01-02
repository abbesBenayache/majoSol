import { getArticleBySlug, getPublishedArticles, getSiteConfig } from "@/lib/data";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

const config = getSiteConfig();
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://majosol.fr";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !article.published) {
    return {
      title: "Article non trouvé",
    };
  }

  return {
    title: article.title,
    description: article.excerpt,
    keywords: [
      "Majosol",
      "association Meyzieu",
      "actualités",
      "événements",
      article.title,
    ],
    openGraph: {
      title: `${article.title} | ${config.site.name}`,
      description: article.excerpt,
      url: `${siteUrl}/news/${article.slug}`,
      siteName: config.site.name,
      images: article.coverImage
        ? [
            {
              url: `${siteUrl}${article.coverImage}`,
              width: 1200,
              height: 630,
              alt: article.title,
            },
          ]
        : [],
      locale: "fr_FR",
      type: "article",
      publishedTime: article.publishedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.coverImage ? [`${siteUrl}${article.coverImage}`] : [],
    },
    alternates: {
      canonical: `${siteUrl}/news/${article.slug}`,
    },
  };
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article || !article.published) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <section className="gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button asChild variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Link href="/news">← Retour aux actualités</Link>
            </Button>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="text-sm text-white/80 mb-4 font-medium">
              {new Date(article.publishedAt).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">{article.title}</h1>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {article.coverImage && (
          <div className="relative w-full h-64 md:h-96 mb-12 rounded-2xl overflow-hidden shadow-primary bg-muted">
            <Image
              src={article.coverImage}
              alt={article.title}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}

        <div
          className="prose prose-lg prose-red max-w-none
            prose-headings:text-foreground prose-headings:font-bold
            prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:text-lg
            prose-strong:text-foreground prose-strong:font-semibold
            prose-ul:text-muted-foreground prose-ul:leading-relaxed
            prose-li:text-muted-foreground
            prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline
            prose-img:rounded-lg prose-img:shadow-soft"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  const articles = getPublishedArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
