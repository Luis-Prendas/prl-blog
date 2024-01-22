'use server'

import type * as z from 'zod'
import { AuthError } from 'next-auth'

import { signIn } from '@/auth'
import { SignInSchema } from '@/schemas'
import { getUserByUsername } from '@/data/user'
import { DEFAULT_LOGIN_REDIRECT } from '@/routes'

export const signInAction = async (
  values: z.infer<typeof SignInSchema>,
  callbackUrl?: string | null
) => {
  const validatedFields = SignInSchema.safeParse(values)

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' }
  }

  const { name, password } = validatedFields.data

  const existingUser = await getUserByUsername(name)

  if (!existingUser?.name || !existingUser.password) {
    return { error: 'Name or password wrong!' }
  }

  try {
    await signIn('credentials', {
      name,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT
    })

    return { seccsess: 'Bien' }
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials!' }
        default:
          return { error: 'Something went wrong!' }
      }
    }

    throw error
  }
}
