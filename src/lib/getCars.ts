import { cache } from 'react'
import { CarParams } from '@/types'
import axios from 'axios'

interface GetCarsProps {
  params: CarParams
}

export const getCars = cache(async ({ params }: GetCarsProps) => {
  try {
    const response = await axios.get<CarParams[]>(
      'https://api.api-ninjas.com/v1/cars',
      {
        headers: {
          'X-Api-Key': process.env.API_KEY,
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
})
