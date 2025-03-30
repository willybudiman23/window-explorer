export interface IFile {
  id: number
  folderId: number
  name: string
}

export interface IFolder {
  id: number
  parentId: null | number
  name: string
  children: IFolder[]
  files: IFile[]
}

export interface IFolderMapped extends IFolder {
  isExpanded?: boolean
}
