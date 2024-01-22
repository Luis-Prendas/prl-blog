import { Button } from '@/components/button'

export default function Home () {
  return (
    <main className='w-full h-full flex justify-center'>
      <section className='w-full max-w-screen-lg flex flex-col items-center p-4 h-full'>
        <article className='w-full max-w-screen-lg flex flex-col items-center gap-6 h-full mt-40'>
          <h1 className='bg-gradient-to-t from-[#6d6d6d] to-[#f4f4f4] bg-clip-text text-transparent pb-2 text-center text-7xl'>
            A unique and modern way to manage your work.
          </h1>
          <p className='text-xl font-light'>
            <span className='text-slate-500'>Crafted with</span> Next and Tailwind CSS.
          </p>
          <Button link href='/auth/signin' className='py-2 px-8 text-xl'>Start now</Button>
        </article>
        <article className='max-w-screen-sm text-sm font-light text-slate-300/20'>
          <p>
            This application has been developed for the sole purpose of practicing and applying knowledge in software development. At no time is it intended to obtain economic benefits through its use, and there are no current plans to monetize it in the near future. We want to emphasize that this project is completely open source and is shared with the community with the intention of collaborating and learning together. Any contributions, suggestions or comments are welcome and appreciated.
            Sincerely, <button className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd]/40 via-[#8678f9]/40 to-[#c7d2fe]/40 bg-[200%_auto] bg-clip-text text-transparent'>Daniel Prendas.</button>
          </p>
        </article>
      </section>
    </main>
  )
}
