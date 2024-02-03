import { getCars } from './getCars'

export const getModels = async () => {
  const cars = await getCars({
    params: {
      fuel_type: 'gas',
      year: '2020',
    },
  })

  const uniqueModels = Array.from(new Set(cars.map((link) => link.model)))

  return uniqueModels.map((model) => ({
    href: `/${model}`,
    label: `${model}`,
  }))
}
