import type { IFolderRepository } from "../../interfaces/FolderRepository";
import type { IFolder } from "../entities/Folder";

export class GetFolders {
  constructor(private folderRepository: IFolderRepository) {}

  async execute(): Promise<IFolder[]> {
    const folders = await this.folderRepository.getAllFolders();
    return this.buildFolderTree(folders);
  }

  private buildFolderTree(folders: IFolder[], parentId: number | null = null): IFolder[] {
    return folders
      .filter(folder => folder.parentId === parentId)
      .map(folder => ({
        ...folder,
        children: this.buildFolderTree(folders, folder.id),
      }));
  }
}