'use client'

import { authenticate } from '@/lib/actions'
import { useFormState, useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { ArrowRightIcon } from 'lucide-react'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'

interface LoginProps {
  className?: string
}

export const Login = ({ className }: LoginProps) => {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined)
  return (
    <form
      className={cn('flex w-full flex-col gap-6', className)}
      action={dispatch}
    >
      <Input type='email' name='email' />
      <Input type='password' name='password' />
      <LoginButton />
      {errorMessage && <p className='text-red-500'>{errorMessage}</p>}
    </form>
  )
}

const LoginButton = () => {
  const { pending } = useFormStatus()

  return (
    <Button disabled={pending} aria-disabled={pending}>
      Login in <ArrowRightIcon />
    </Button>
  )
}
