import express, { Request, Response } from "express";
import path from "path";
import news from "./data/news.json";
import { getAllNews } from "./services/newsService";

const router = express.Router();

// index
router.get("/", async (req: Request, res: Response) => {
  const news = await getAllNews();
  res.render("index", { news });
});

// detail
router.get("/news/:slug", async (req: Request, res: Response) => {
  const slug = req.params.slug;

  const article = news.find((n) => n.slug === slug);

  if (!article) {
    return res.status(404).render("404");
  }

  res.render("details", { article });
});

// add pagina
router.get("/add", (req: Request, res: Response) => {
  res.render("add");
});

// POST artikel toevoegen
router.post("/add", (req: Request, res: Response) => {
  const { title, slug, content } = req.body;

  const newArticle = {
    title,
    slug,
    content,
    date: new Date().toISOString().split("T")[0],
  };

  news.push(newArticle);

  res.redirect("/");
});

// 404
router.use((req: Request, res: Response) => {
  res.status(404).render("404");
});

export default router;
