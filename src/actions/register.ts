'use server'

import type * as z from 'zod'
import bcrypt from 'bcrypt'

import { db } from '@/lib/db'
import { RegisterSchema } from '@/schemas'
import { getUserByUsername } from '@/data/user'

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values)

  if (!validatedFields.success) return { error: 'Invalid fields!' }

  const { email, password, name } = validatedFields.data
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await getUserByUsername(name)

  if (existingUser) return { error: 'Email already in use!' }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  // TODO: Send verification token email

  return { success: 'User created!' }
}
