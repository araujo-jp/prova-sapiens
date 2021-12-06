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
}


export async function updateCar(car: Car) {
  const response = await api.post(`car/${car.id}`, {
    model_name: car.model_name,
    description: car.description,
    brand: car.brand,
    license_plate: car.license_plate,
    sale_price: car.sale_price,
    year_manufactory: car.year_manufactory,
    year_model: car.year_model
  })

  return response.data
}

