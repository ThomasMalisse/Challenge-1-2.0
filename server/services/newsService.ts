// Importeer sql uit db.ts
import sql from "./db";

// Interface voor een nieuwsartikel
export interface News {
  id: number;
  slug: string;
  title: string;
  content?: string;
  image?: string;
  created_at?: string;
}

// Alle nieuwsartikelen ophalen
export async function getAllNews(): Promise<News[]> {
  const data: News[] = await sql`select * from news`;
  return data;
}

/**
 * Zoekt een nieuwsartikel op basis van de slug.
 */
// export const getNewsBySlug = (slug: string): News | undefined => {
//   const news = getNews();
//   return news.find((article) => article.slug === slug);
// };

// /**
//  * Voegt een nieuw nieuwsartikel toe aan het JSON-bestand.
//  */
// export const addNews = (newArticle: Omit<News, "slug">): News => {
//   const news = getNews();
//   const slug:string = newArticle.title.toLowerCase().replace(/\s/g, "-");
//   const articleWithSlug: News = { slug: slug, ...newArticle };

//   news.push(articleWithSlug);
//   fs.writeFileSync(filePath, JSON.stringify(news, null, 2), "utf-8");

//   return articleWithSlug;
// };
