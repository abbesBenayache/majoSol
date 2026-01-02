import articlesData from "@/data/articles.json";
import photosData from "@/data/photos.json";
import eventsData from "@/data/events.json";
import siteConfigData from "@/data/site-config.json";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage?: string;
  publishedAt: string;
  published: boolean;
}

export interface Photo {
  id: string;
  url: string;
  title?: string;
  description?: string;
  category?: string;
  eventName?: string;
}

export interface Event {
  id: string;
  name: string;
  date: string;
  description: string;
  location: string;
}

export function getArticles(): Article[] {
  return articlesData as Article[];
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((article) => article.slug === slug);
}

export function getPublishedArticles(): Article[] {
  return getArticles().filter((article) => article.published);
}

export function getRecentArticles(limit: number = 4): Article[] {
  return getPublishedArticles()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
}

export function getPhotos(): Photo[] {
  return photosData as Photo[];
}

export function getPhotosByCategory(category: string): Photo[] {
  return getPhotos().filter((photo) => photo.category === category);
}

export function getCategories(): string[] {
  const categories = getPhotos()
    .map((photo) => photo.category)
    .filter((cat): cat is string => Boolean(cat));
  return Array.from(new Set(categories));
}

export function getEvents(): Event[] {
  return eventsData as Event[];
}

export function getUpcomingEvents(): Event[] {
  const now = new Date();
  return getEvents()
    .filter((event) => new Date(event.date) >= now)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getSiteConfig() {
  return siteConfigData;
}

