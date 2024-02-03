import { PageTop } from '@/components/PageTop/PageTop'
import { Recommendations } from '@/components/Recommendations/Recommendations'
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
    <div className='container pb-52'>
      <PageTop className='mb-10' carModels={uniqueMakers} />
      <Recommendations cars={cars} />
    </div>
  )
}
