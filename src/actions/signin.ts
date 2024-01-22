'use client'

import type * as z from 'zod'
import { LoginSchema } from '@/schemas'

export const signin = async (values: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  const validatedFields = LoginSchema.safeParse(values)

  if (!validatedFields.success) return { error: 'Invalid fields!' }

  return { succes: 'Email sent!' }
}
