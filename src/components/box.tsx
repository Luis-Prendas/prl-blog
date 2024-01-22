import { SpotlightBox } from './spotlightBox'

interface BoxBaseProps {
  children: React.ReactNode
  className?: string
}

interface BoxProps extends BoxBaseProps {
  flashing?: 'default' | 'flashing' | 'spotlightBox'
}

export function Box ({ flashing, ...boxBaseProps }: BoxProps) {
  const boxTypes = {
    default: 'default',
    flashing: 'flashing',
    spotlightBox: 'spotlightBox'
  }

  const boxType = flashing ? boxTypes[flashing] : boxTypes.default

  switch (boxType) {
    case 'flashing': return <FlashingBox {...boxBaseProps} />
    case 'spotlightBox': return <SpotlightBox {...boxBaseProps} />
    default: return <DefaultBox {...boxBaseProps} />
  }
}

function FlashingBox ({ ...boxBaseProps }: BoxBaseProps) {
  return (
    <div className={`rounded-md relative border border-slate-800 ${boxBaseProps.className}`}>
      <div className='absolute top-0 flex justify-center'>
        <div className='left-0 h-[1px] animate-border-width rounded-full bg-gradient-to-r from-[rgba(17,17,17,0)] via-white to-[rgba(17,17,17,0)] transition-all duration-1000' />
      </div>
      {boxBaseProps.children}
    </div>
  )
}

function DefaultBox ({ ...boxBaseProps }: BoxBaseProps) {
  return (
    <div className={`rounded-md border border-slate-800/80 ${boxBaseProps.className}`}>
      {boxBaseProps.children}
    </div>
  )
}
