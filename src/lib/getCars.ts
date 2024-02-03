import { CarParams } from '@/types'
import axios from 'axios'

interface GetCarsProps {
  params: CarParams
}

export const getCars = async ({ params }: GetCarsProps) => {
  try {
    const response = await axios.get<CarParams[]>(
      'https://api.api-ninjas.com/v1/cars',
      {
        headers: {
          'X-Api-Key': 'UQIKFLsUE/Vy51y1gRQq9Q==VDWuXuryAzUPUMxA',
        },
        params: {
          limit: 15,
          ...params,
        },
      }
    )
    return response.data
  } catch (error) {
    console.log(error)

    return []
  }
}
