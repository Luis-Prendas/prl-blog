'use client'

import type * as z from 'zod'
import { useForm } from 'react-hook-form'
import React, { useState, useTransition } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { RegisterSchema } from '@/schemas'
import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { FormError } from './ui/form-error'
import { Input } from '@/components/input'
import { FormSuccess } from './ui/form-seccess'
import { register } from '@/actions/register'

export function RegisterForm () {
  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      register(values)
        .then((data) => {
          if (data.error) {
            form.reset()
            setError(data.error)
          }

          if (data.success) {
            form.reset()
            setSuccess(data.success)
          }
        })
        .catch(() => setError('Something went wrong'))
    })
  }

  return (
    <Box flashing='flashing' className='flex flex-col gap-8 justify-center items-center p-8 bg-black'>
      <span className='text-7xl rounded-md font-extrabold bg-gradient-to-tl from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] text-white px-4 py-2'>P</span>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col items-center justify-center gap-4'>
        <Input
          name='name'
          type='text'
          isPending={isPending}
          className='px-4 py-3'
          control={form.control}
          placeholder='Enter username'
          controlMessage={form.formState.errors.name?.message}
        />
        <Input
          name='email'
          type='email'
          isPending={isPending}
          className='px-4 py-3'
          control={form.control}
          placeholder='Enter email'
          controlMessage={form.formState.errors.email?.message}
        />
        <Input
          name='password'
          type='password'
          isPending={isPending}
          className='px-4 py-3'
          control={form.control}
          placeholder='Enter password'
          controlMessage={form.formState.errors.password?.message}
        />
        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
        <Button type='submit' className='py-2 px-8 text-xl'>Sign in</Button>
      </form>
    </Box>
  )
}
