import { Elysia } from "elysia";
import { folderRoutes } from "./infrastructure/routes/FolderRoutes";
import { cors } from "@elysiajs/cors";
import "dotenv/config";

const APP_PORT = process.env.APP_PORT ? Number(process.env.APP_PORT) : 3000;

const app = new Elysia();

app.use(cors());
app.use(folderRoutes);

app.listen(APP_PORT);
console.log(`Server running on http://localhost:${APP_PORT}`);
