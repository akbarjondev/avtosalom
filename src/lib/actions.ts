'use server'

import { signIn } from '../../auth'
import { AuthError } from 'next-auth'

export const authenticate = async (
  prevState: string | undefined,
  formData: FormData
) => {
  try {
    const res = await signIn('credentials', formData)
    console.log('signIn:', res)
  } catch (error) {
    if (error instanceof AuthError) {
      console.log('AuthError:', error)

      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.'
        default:
          return 'Something went wrong.'
      }
    }
    throw error
  }
}
