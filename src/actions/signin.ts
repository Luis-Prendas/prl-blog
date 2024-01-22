'use client'

import type * as z from 'zod'
import { SignInSchema } from '@/schemas'

export const signin = async (values: z.infer<typeof SignInSchema>, callbackUrl?: string | null) => {
  const validatedFields = SignInSchema.safeParse(values)

  if (!validatedFields.success) return { error: 'Invalid fields!' }

  return { succes: 'Email sent!' }
}
