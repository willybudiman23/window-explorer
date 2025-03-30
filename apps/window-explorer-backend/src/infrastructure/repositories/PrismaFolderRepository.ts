import { PrismaClient } from "@prisma/client";
import type { IFolderRepository } from "../../interfaces/FolderRepository";
import type { IFolder } from "../../core/entities/Folder";

const prisma = new PrismaClient();

export class PrismaFolderRepository implements IFolderRepository {
  async getAllFolders(): Promise<IFolder[]> {
    const folders = await prisma.folder.findMany({
      include: { files: true },
      orderBy: { parentId: "asc" },
    });
    return folders;
  }
}
