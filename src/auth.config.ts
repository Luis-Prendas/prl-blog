import bcrypt from 'bcryptjs'
import type { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { SignInSchema } from '@/schemas'
import { getUserByUsername } from '@/data/user'

export default {
  providers: [
    Credentials({
      async authorize (credentials) {
        const validatedFields = SignInSchema.safeParse(credentials)

        if (validatedFields.success) {
          const { name, password } = validatedFields.data

          const user = await getUserByUsername(name)
          if (!user?.password) return null

          const passwordsMatch = await bcrypt.compare(
            password,
            user.password
          )

          if (passwordsMatch) return user
        }

        return null
      }
    })
  ]
} satisfies NextAuthConfig
