<template>
  <ul>
    <li v-for="folder in folders" :key="folder.id" class="mb-1">
      <div class="flex items-center gap-x-2">
        <div class="w-4 h-4">
          <div
            v-if="folder.children.length"
            class="text-xs mr-1 cursor-pointer"
            @click="toggleExpandFolder(folder)"
          >
            {{ folder.isExpanded ? '⬇️' : '➡️' }}
          </div>
        </div>
        <div
          :class="['text-xs cursor-pointer', { 'font-bold': selectedFolder?.id === folder.id }]"
          @click="onClickSelectFolder(folder)"
        >
          {{ folder.name }}
        </div>
      </div>
      <ul v-if="folder.isExpanded" class="ml-2 mt-1">
        <FolderTree :folders="folder.children" />
      </ul>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useFoldersStore } from '@/stores/folders'
import type { IFolderMapped } from '@/types/folder'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

defineProps({
  folders: {
    type: Array<IFolderMapped>,
  },
})

const router = useRouter()
const foldersStore = useFoldersStore()
const { selectedFolder } = storeToRefs(foldersStore)
const { toggleExpandFolder, selectFolder } = foldersStore

const onClickSelectFolder = (folder: IFolderMapped) => {
  router.push({ name: 'folder', params: { folderId: folder.id } })
  selectFolder(folder)
}
</script>
