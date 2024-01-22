import { register } from '@/actions/register'
import { Box } from '@/components/box'
import { Button } from '@/components/button'
export default function SingInPage () {
  return (

    <main className='w-full pt-40 flex flex-col items-center justify-center gap-8'>
      <Box flashing='flashing' className='flex flex-col gap-8 justify-center items-center p-8 bg-black'>
        <span className='text-7xl rounded-md font-extrabold bg-gradient-to-tl from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] text-white px-4 py-2'>P</span>
        <form action={register} className='flex flex-col items-center justify-center gap-4'>
          <input
            className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454 bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
            type='text'
            placeholder='Enter name'
            name='name'
            minLength={3}
            required
          />
          <input
            className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454 bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
            type='text'
            placeholder='Enter username'
            name='email'
            minLength={5}
            required
          />
          <input
            className='border-1 block h-12 w-full rounded-md border border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454 bg-origin-border px-3 py-2 text-slate-200 transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none'
            type='password'
            placeholder='Enter password'
            name='password'
            minLength={6}
            required
          />
          <Button type='submit' className='py-2 px-8 text-xl'>Register</Button>
        </form>
      </Box>
    </main>
  )
}
