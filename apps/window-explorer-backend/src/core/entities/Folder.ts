import type { IFile } from "./File";

export interface IFolder {
  id: number;
  name: string;
  parentId?: number | null;
  children?: IFolder[];
  files?: IFile[];
}
