'use server'

// import type * as z from 'zod'
import bcrypt from 'bcrypt'
import { db } from '@/lib/db'
// import { RegisterSchema } from '@/schemas'

export const register = async (formData: FormData) => {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (name ?? email ?? password) return { error: 'Invalid fields!' }

  const hashedPassword = await bcrypt.hash(password, 10)

  const existingUser = await db.user.findUnique({
    where: {
      email
    }
  })

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
