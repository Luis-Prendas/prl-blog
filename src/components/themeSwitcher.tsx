'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeSwitcher () {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (theme === 'dark') return <button className='py-2 px-4 rounded-lg bg-slate-400 dark:bg-slate-800 absolute top-4 right-4' onClick={() => setTheme('light')}>Light Mode</button>
  if (theme === 'light') return <button className='py-2 px-4 rounded-lg bg-slate-400 dark:bg-slate-800 absolute top-4 right-4' onClick={() => setTheme('dark')}>Dark Mode</button>
};
