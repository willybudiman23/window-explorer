import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { IFolderMapped } from '@/types/folder'
import { API } from '@/services'

export const useFoldersStore = defineStore('folder', () => {
  const folders = ref<IFolderMapped[]>([])
  const status = ref({
    folders: {
      loading: false,
      error: false,
    },
  })
  const selectedFolder = ref<IFolderMapped>()

  const fetchFolders = async () => {
    try {
      status.value.folders.loading = true
      status.value.folders.error = false
      const folderList = await API.folder.getFolders()
      folders.value = folderList
    } catch (error) {
      status.value.folders.error = true
      throw error
    } finally {
      status.value.folders.loading = false
    }
  }

  const toggleExpandFolder = async (folder: IFolderMapped) => {
    folder.isExpanded = !folder?.isExpanded
  }

  const selectFolder = async (folder: IFolderMapped) => {
    selectedFolder.value = selectedFolder.value?.id === folder.id ? undefined : folder
  }

  const findFolderById = (
    folderId: number,
    folderList: IFolderMapped[],
  ): IFolderMapped | undefined => {
    for (const folder of folderList) {
      if (folder.id === folderId) return folder
      const found = findFolderById(folderId, folder.children)
      if (found) return found
    }
    return undefined
  }

  const expandParents = (folderId: number) => {
    const path: IFolderMapped[] = []
    let currentFolder = findFolderById(folderId, folders.value)

    while (currentFolder) {
      path.unshift(currentFolder)
      currentFolder.isExpanded = true
      currentFolder = findFolderById(currentFolder.parentId || 0, folders.value)
    }

    return path
  }

  const selectFolderById = (folderId: number) => {
    selectedFolder.value = findFolderById(folderId, folders.value)
    expandParents(folderId)
  }

  return {
    folders,
    status,
    selectedFolder,
    toggleExpandFolder,
    fetchFolders,
    selectFolder,
    selectFolderById,
  }
})
