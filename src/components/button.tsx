import Link from 'next/link'

interface BaseButton {
  children: React.ReactNode
  link?: boolean
  className?: string
  href?: string
}

interface ButtonProps extends BaseButton {
  types?: 'rotating' | 'default'
}

interface ButtonWithLink extends BaseButton {
  href: string
}

export function Button ({ types, ...baseProps }: ButtonProps) {
  const buttonTypes = {
    default: 'default',
    rotating: 'rotating'
  }

  const buttonType = types ? buttonTypes[types] : buttonTypes.default

  switch (buttonType) {
    case 'rotating':
      return baseProps.link ? <RotatingLink {...baseProps} href={baseProps.href!}>{baseProps.children}</RotatingLink> : <RotatingButton {...baseProps}>{baseProps.children}</RotatingButton>
    default:
      return baseProps.link ? <DefaultLink {...baseProps} href={baseProps.href!}>{baseProps.children}</DefaultLink> : <DefaultButton {...baseProps}>{baseProps.children}</DefaultButton>
  }
};

export function RotatingButton ({ ...baseProps }: BaseButton) {
  return (
    <button className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className={`${baseProps.className} font-light inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-white backdrop-blur-3xl`}>
        {baseProps.children}
      </span>
    </button>
  )
}

export function RotatingLink ({ ...baseProps }: ButtonWithLink) {
  return (
    <button className='relative inline-flex overflow-hidden rounded-full p-[1px]'>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <Link href={baseProps.href} className={`${baseProps.className} font-light inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 text-white backdrop-blur-3xl`}>
        {baseProps.children}
      </Link>
    </button>
  )
}

export function DefaultButton ({ ...baseProps }: BaseButton) {
  return (
    <button className={`${baseProps.className} font-light inline-flex animate-background-shine items-center justify-center rounded-md border border-[#E2CBFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors`}>
      {baseProps.children}
    </button>
  )
}

export function DefaultLink ({ ...baseProps }: ButtonWithLink) {
  return (
    <Link href={baseProps.href} className={`${baseProps.className} font-light inline-flex animate-background-shine items-center justify-center rounded-md border border-[#E2CBFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors`}>
      {baseProps.children}
    </Link>
  )
}