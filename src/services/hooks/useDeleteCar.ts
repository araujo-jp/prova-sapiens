import { useQuery } from 'react-query'
import { api } from '../api'

export async function deleteCarbyId(id: string): Promise<number> {
  const response = await api.delete(`cars/${id}`)

  return response.status 
}