'use client'

import type * as z from 'zod'
import { useForm } from 'react-hook-form'
import React, { useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { FormError } from './ui/form-error'
import { Input } from '@/components/input'
import { SignInSchema } from '@/schemas'
import { signInAction } from '@/actions/signin'

export function SignInComponent () {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const [error, setError] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      name: '',
      password: ''
    }
  })

  const onSubmit = (values: z.infer<typeof SignInSchema>) => {
    setError('')

    startTransition(() => {
      signInAction(values, callbackUrl)
        .then((data) => {
          if (data.error) {
            form.reset()
            setError(data.error)
          }

          if (data.seccsess) {
            form.reset()
          }
        })
        .catch(() => setError('Something went wrong'))
    })
  }

  return (
    <Box flashing='flashing' className='relative flex flex-col gap-8 justify-center items-center p-8 bg-black'>
      <span className='text-7xl rounded-md font-extrabold bg-gradient-to-tl from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] text-white px-4 py-2'>P</span>
      <div className={`absolute z-10 top-2/4 ${!isPending ? 'hidden' : 'block'}`}>Cargando...</div>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`${isPending && 'opacity-40 cursor-not-allowed'} flex flex-col items-center justify-center gap-4`}>
        <Input
          name='name'
          type='text'
          isPending={isPending}
          className='px-4 py-3'
          control={form.control}
          placeholder='Enter your username'
          controlMessage={form.formState.errors.name?.message}
        />
        <Input
          name='password'
          type='password'
          isPending={isPending}
          className='px-4 py-3'
          control={form.control}
          placeholder='Enter your password'
          controlMessage={form.formState.errors.password?.message}
        />
        {error && !isPending && <FormError message={error} />}
        <Button type='submit' className='py-2 px-8 text-xl'>Sign in</Button>
      </form>
    </Box>
  )
}
