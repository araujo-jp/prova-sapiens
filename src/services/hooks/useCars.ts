import { useQuery } from 'react-query'
import { api } from '../api'

interface Car {
  id: string;
  model_name: string;
  description: string;
  license_plate: string;
  brand: string;
  year_manufactory: string;
  year_model: string;
  sale_price: string;
  created_at: Date;
  updated_at: Date;
}

export async function getCars(): Promise<Car[]> {
  const { data } = await api.get('cars') 
    
  return data
}

export function useCars() {
  return useQuery('cars', getCars, {
    staleTime: 1000 * 60 * 5,  // 5 min
  })
}
