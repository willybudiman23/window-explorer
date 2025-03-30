import { Elysia } from "elysia";
import { FolderController } from "../controllers/FolderController";

export const folderRoutes = new Elysia();

folderRoutes.get("/folders", FolderController.getAllFolders);
