'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md'
import { Button } from './button'

export function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const changeTheme = () => {
    theme === 'light'
      ? setTheme('dark')
      : setTheme('light')
  }

  if (!mounted) return null

  return (
    <Button onClick={changeTheme} types='rotating' position='absolute top-4 right-4' className='p-2'>
      <MdLightMode className='text-2xl' />
    </Button>
  )
}
