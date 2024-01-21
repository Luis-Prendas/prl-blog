'use client'
import { useSearchParams, usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from './button'

interface PropsModalTrigger {
  children: React.ReactNode
  className?: string
}

export function Modal () {
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const pathname = usePathname()
  const router = useRouter()

  return (
    <>
      {modal &&
        <dialog
          className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center">
          <section className='relative max-w-96'>
            <div className='absolute top-0 flex w-full justify-center'>
              <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
            </div>
            <div className='flex flex-col font-light gap-4 h-full justify-center rounded-md border border-slate-800 bg-black p-6'>
              <h1 className='text-xl font-bold text-[#b2a8fd]'>
                Login as a guest
              </h1>
              <p>This account will only show rough details of the application. If you want to see more, the source code is available on <Link href='https://github.com/Luis-Prendas' target='_blank' className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>GitHub.</Link></p>
              <div className='w-full flex justify-end gap-4'>
                <Button className='p-2 text-sm' onClick={() => router.replace(pathname)}>Cancel</Button>
                <Button types='rotating' className='p-2 text-sm font-medium' onClick={() => router.push('/dashboard')}>Continue</Button>
              </div>
            </div>
          </section>
        </dialog>
      }
    </>
  )
}

export function ModalTrigger ({ children, className }: PropsModalTrigger) {
  const router = useRouter()

  return (
    <button onClick={() => router.replace('?modal=true')} className={className}>{children}</button>
  )
}
