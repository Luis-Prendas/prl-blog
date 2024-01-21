'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { MdLightMode } from 'react-icons/md'

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
    <button onClick={changeTheme} className='absolute top-4 right-4 inline-flex overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className='inline-flex h-full p-2 w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl'>
        <MdLightMode className='text-2xl' />
      </span>
    </button>
  )
};
