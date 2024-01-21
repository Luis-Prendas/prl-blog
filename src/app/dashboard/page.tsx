import { Box } from '@/components/box'

export default function DashBoardPage () {
  return (
    <main className='w-full h-full flex justify-center items-center'>
      <section className="w-full grid auto-rows-[250px] grid-cols-3 gap-4 max-w-screen-lg">
        <Box className="row-span-1 col-span-1 flex flex-col backdrop-blur-3xl bg-stone-950/40">
          <span className='p-4 text-sm font-light'>Personal monthly activities</span>
          <div className='h-full flex justify-center items-center flex-col pb-4'>
            <span className='text-5xl font-bold'>2510</span>
            <span className='font-light text-slate-400'>+7% - Was 2334 last week</span>
          </div>
        </Box>
        <Box className="row-span-1 col-span-2 backdrop-blur-3xl bg-stone-950/40"> 2 </Box>
        <Box className="row-span-1 col-span-1 backdrop-blur-3xl bg-stone-950/40"> 3 </Box>
        <Box className="row-span-1 col-span-1 backdrop-blur-3xl bg-stone-950/40"> 4 </Box>
        <Box className="row-span-1 col-span-1 backdrop-blur-3xl bg-stone-950/40"> 5 </Box>
        <Box className='row-span-1 col-span-3 backdrop-blur-3xl bg-stone-950/40'> 6 </Box>
      </section>
    </main>
  )
};
