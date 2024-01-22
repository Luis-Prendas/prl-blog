import { Button } from '@/components/button'
import { Modal, ModalTrigger } from '@/components/modal'

export default function SingInPage () {
  return (
    <main className='w-full flex flex-col items-center justify-center gap-8'>
      <section className='w-full max-w-screen-lg flex flex-col items-center gap-6 mt-40'>
        <section className='relative'>
          <div className='absolute top-0 flex w-full justify-center'>
            <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
          </div>
          <div className='flex flex-col gap-8 h-full items-center justify-center rounded-md border border-slate-800 bg-black p-8'>
            <span className='text-7xl rounded-md font-extrabold bg-gradient-to-tl from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] text-white px-4 py-2'>P</span>
            <form className='flex flex-col items-center justify-center gap-4'>
              <input
                className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454 bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
                type='text'
                placeholder='Enter your username'
                required
              />
              <input
                className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454 bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
                type='password'
                placeholder='Enter your password'
                required
              />
              <Button type='submit' className='py-2 px-8 text-xl'>Sign in</Button>
            </form>
          </div>
        </section>
      </section>
      <section>
        <p>
          To login as a guest click <ModalTrigger className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>aqui.</ModalTrigger>
        </p>
      </section>
      <Modal />
    </main>
  )
}