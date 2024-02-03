import { PageFilters } from '@/components/PageFilters/PageFilters'
import { getCars } from '@/lib/getCars'

export default async function Home() {
  const cars = await getCars({
    params: {
      limit: 50,
      cylinders: '4',
    },
  })

  const makers = cars.map((car) => car.make || '')
  const uniqueMakers = Array.from(new Set(makers))

  return (
    <div className='container'>
      <PageFilters carModels={uniqueMakers} />
    </div>
  )
}
