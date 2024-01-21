import { Pulse } from '@/components/pulse'

export default function SingInPage () {
  return (
    <section className='w-full flex justify-center'>
      <div className='w-full flex justify-center -z-10 absolute top-28'>
        <Pulse />
      </div>
      <main className='w-full max-w-screen-lg flex flex-col items-center gap-6 mt-40'>
        <section className='relative'>
          <div className='absolute top-0 flex w-full justify-center'>
            <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
          </div>
          <div className='flex flex-col gap-8 h-full items-center justify-center rounded-md border border-slate-800 bg-black p-8'>
            <h1 className='text-4xl inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>
              PRL Works
            </h1>
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
              <button className='px-8 py-2 text-xl font-light inline-flex animate-background-shine items-center justify-center rounded-md border border-[#E2CBFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors'>
                SingIn
              </button>
            </form>
          </div>
        </section>
      </main>
    </section>
  )
};
