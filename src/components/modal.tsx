'use client'
import { useSearchParams, usePathname } from 'next/navigation'
import Link from 'next/link'

function Modal () {
  const searchParams = useSearchParams()
  const modal = searchParams.get('modal')
  const pathname = usePathname()

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
              <h1 className='text-xl font-bold inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
                Login as a guest
              </h1>
              <p>This account will only show rough details of the application. If you want to see more, the source code is available on <Link href='https://github.com/Luis-Prendas' target='_blank' className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>GitHub.</Link></p>
              <div className='w-full flex justify-end gap-4'>
                <Link href={pathname} className='outline outline-1 outline-slate-800 text-sm font-medium text-white p-2 rounded-md'>Cancel</Link>
                <Link href={pathname} className='relative inline-flex overflow-hidden rounded-md p-[1px]'>
                  <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
                  <span className='inline-flex h-full p-2 w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 text-sm font-medium text-white backdrop-blur-3xl'>
                    Continue
                  </span>
                </Link>
              </div>
            </div>
          </section>
        </dialog>
      }
    </>
  )
}

export default Modal
