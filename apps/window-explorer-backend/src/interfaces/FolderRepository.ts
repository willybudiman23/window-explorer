import type { IFolder } from "../core/entities/Folder";

export interface IFolderRepository {
  getAllFolders(): Promise<IFolder[]>;
}
