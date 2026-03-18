import express, { Application, Request, Response } from "express";
import path from "path";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app: Application = express();
const PORT: number = parseInt(<string>process.env.PORT, 10) || 3000;

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "/public")));
app.use("/", routes);

app.get("/", (req: Request, res: Response): void => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server draait op http://localhost:${PORT}`);
});
