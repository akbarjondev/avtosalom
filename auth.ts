import NextAuth from 'next-auth'
import { authConfig } from './auth.config'
import Credentials from 'next-auth/providers/credentials'
import z from 'zod'

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log('Authorizing credentials')

        const parsedCredentials = z
          .object({
            email: z.string().email(),
            password: z.string().min(6),
          })
          .safeParse(credentials)

        if (parsedCredentials.success) {
          console.log('Parsed credentials: success')

          const { email, password } = parsedCredentials.data
          const user = await getUser(email)
          if (!user) return null

          if (user.password === password) {
            console.log('Valid credentials:', user)
            return user
          }
        }

        console.log('Invalid credentials:')
        return null
      },
    }),
  ],
})

async function getUser(email: string): Promise<User | undefined> {
  try {
    const user = await Promise.resolve({
      email: 'test@avtosalom.uz',
      password: 'pass123',
    })

    if (user.email === email) {
      return user
    } else {
      throw new Error('User not found')
    }
  } catch (error) {
    console.error('Failed to fetch user:', error)
    throw new Error('Failed to fetch user.')
  }
}

type User = {
  email: string
  password: string
}
