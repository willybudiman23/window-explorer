<template>
  <div class="flex h-screen">
    <!-- Left Panel: Folder Tree -->
    <div class="min-w-[200px] w-1/4 max-w-xs bg-gray-100 border-r overflow-y-auto p-4">
      <h2 class="text-lg font-semibold mb-2">Folders</h2>
      <div v-if="status.folders.loading">Fetching data...</div>
      <FolderTree v-else-if="!status.folders.error" :folders="folders" />
    </div>

    <!-- Right Panel: Files & Subfolders -->
    <div class="w-3/4 p-4 overflow-auto">
      <div v-if="selectedFolder">
        <h2 class="text-lg font-semibold mb-2">{{ selectedFolder.name }}</h2>
        <hr />
        <table
          v-if="selectedFolder.children.length || selectedFolder.files.length"
          class="w-full border border-gray-100 rounded-lg shadow-md text-xs"
        >
          <thead class="bg-gray-100">
            <tr class="text-left">
              <th class="px-4 py-2 border-b">Name</th>
              <th class="px-4 py-2 border-b">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="folder in selectedFolder.children" :key="folder.id" class="hover:bg-gray-50">
              <td class="px-4 py-2 border-b">
                {{ folder.name }}
              </td>
              <td class="px-4 py-2 border-b">Directory</td>
            </tr>
            <tr v-for="file in selectedFolder.files" :key="file.id" class="hover:bg-gray-50">
              <td class="px-4 py-2 border-b">
                {{ file.name }}
              </td>
              <td class="px-4 py-2 border-b">File</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import FolderTree from '@/components/FolderTree.vue'
import { useFoldersStore } from '@/stores/folders'
import { storeToRefs } from 'pinia'
import { useRoute } from 'vue-router'

const route = useRoute()
const foldersStore = useFoldersStore()
const { selectFolderById } = foldersStore
const { folders, status, selectedFolder } = storeToRefs(foldersStore)

const initData = async () => {
  try {
    await foldersStore.fetchFolders()

    if (route.params.folderId) {
      selectFolderById(Number(route.params.folderId))
    }
  } catch {
    alert('Error fetching folders, please reload the page')
  }
}

onMounted(() => {
  initData()
})
</script>
