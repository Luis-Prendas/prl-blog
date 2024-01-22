'use client'

import type * as z from 'zod'
import { useForm } from 'react-hook-form'
import React, { useState, useTransition } from 'react'
import { useSearchParams } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginSchema } from '@/schemas'
import { signin } from '@/actions/signin'
import { Box } from '@/components/box'
import { Button } from '@/components/button'
import { FormError } from './ui/form-error'
import { Input } from '@/components/input'
import { FormSuccess } from './ui/form-seccess'

export function SignInComponent () {
  // const { getFieldState, formState } = useFormContext()

  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl')

  const [error, setError] = useState<string | undefined>('')
  const [success, setSuccess] = useState<string | undefined>('')
  const [isPending, startTransition] = useTransition()

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      name: '',
      password: ''
    }
  })

  console.log(form.formState.errors.name?.message) // TODO: Finaly find error mesaje... my god... i go to sleep

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('')
    setSuccess('')

    startTransition(() => {
      signin(values, callbackUrl)
        .then((data) => {
          console.log(data)

          if (data.error) {
            form.reset()
            setError(data.error)
          }

          if (data.succes) {
            form.reset()
            setSuccess(data.succes)
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
        {error && <FormError message={error} />}
        {success && <FormSuccess message={success} />}
        <Button type='submit' className='py-2 px-8 text-xl'>Sign in</Button>
      </form>
    </Box>
  )
}
