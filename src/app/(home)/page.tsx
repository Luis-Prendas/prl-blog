import { Pulse } from '@/components/pulse'
import Link from 'next/link'

export default function Home () {
  return (
    <section className='w-full flex justify-center'>
      <div className='w-full flex justify-center -z-10 absolute top-28'>
        <Pulse />
      </div>
      <main className='w-full max-w-screen-lg flex flex-col items-center gap-6 mt-40'>
        <h1 className='bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-transparent pb-2 text-center text-7xl'>
          A unique and modern way to manage your work.
        </h1>
        <p className='text-xl font-light'>
          <span className='text-slate-500'>Crafted with</span> Next and Tailwind CSS.
        </p>
        <Link href='/singin' className='px-8 py-2 text-xl mt-8 font-light inline-flex animate-background-shine items-center justify-center rounded-md border border-[#E2CBFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors'>
          Start now
        </Link>
      </main>
    </section>
  )
}
