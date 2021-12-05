import { useQuery } from 'react-query'
import { api } from '../api'

interface Car {
  model_name: string;
  description: string;
  license_plate: string;
  brand: string;
  year_manufactory: number;
  year_model: number;
  sale_price: number;
}

export async function createCar({
  model_name,
  brand,
  description,
  license_plate,
  sale_price,
  year_manufactory,
  year_model
}: Car): Promise<number> {
  const response = await api.post(`cars`, {
    model_name,
    brand,
    description,
    license_plate,
    sale_price,
    year_manufactory,
    year_model
  })

  return response.data
}