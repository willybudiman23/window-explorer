import { GetFolders } from "../../core/usecases/GetFolders";
import { ResponseFormatter } from "../../utils/ResponseFormatter";
import { PrismaFolderRepository } from "../repositories/PrismaFolderRepository";

const folderRepository = new PrismaFolderRepository();
const getFoldersUseCase = new GetFolders(folderRepository);

export class FolderController {
  static async getAllFolders() {
    const folders = await getFoldersUseCase.execute();

    return ResponseFormatter.success(folders);
  }
}
