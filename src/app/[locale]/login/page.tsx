import { Login } from '@/components/Login/Login'

const Page = () => {
  return (
    <div className='container'>
      <h2 className='my-4 text-center text-2xl font-bold'>Login form</h2>
      <Login className={'mx-auto max-w-64'} />
    </div>
  )
}

export default Page
