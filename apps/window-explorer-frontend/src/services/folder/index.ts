import type { ApiResponse } from '@/types/api'
import type { IFolder } from '@/types/folder'
import api from '@/services/api'

async function getFolders() {
  const response = await api.get<ApiResponse<IFolder[]>>('/folders')

  return response.data.data
}

export default {
  getFolders,
}
