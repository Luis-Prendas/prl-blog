import Link from 'next/link'
import { type HTMLAttributes } from 'react'

interface BaseButton extends HTMLAttributes<HTMLButtonElement> {
  link?: boolean
  href?: string
  position?: string
  type?: 'button' | 'submit' | 'reset' | undefined
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

function RotatingButton ({ ...baseProps }: BaseButton) {
  return (
    <button type={baseProps.type} onClick={baseProps.onClick} className={`${baseProps.position ? baseProps.position : 'relative'} inline-flex overflow-hidden rounded-md p-[1px]`}>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className={`${baseProps.className} font-light inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 text-white backdrop-blur-3xl`}>
        {baseProps.children}
      </span>
    </button>
  )
}

function RotatingLink ({ ...baseProps }: ButtonWithLink) {
  return (
    <Link href={baseProps.href} className={`${baseProps.position ? baseProps.position : 'relative'} inline-flex overflow-hidden rounded-md p-[1px]`}>
      <span className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]' />
      <span className={`${baseProps.className} font-light inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 text-white backdrop-blur-3xl`}>
        {baseProps.children}
      </span>
    </Link>
  )
}

function DefaultButton ({ ...baseProps }: BaseButton) {
  return (
    <button type={baseProps.type} onClick={baseProps.onClick} className={`${baseProps.className} ${baseProps.position ? baseProps.position : 'relative'} font-light inline-flex animate-background-shine items-center justify-center rounded-md border border-[#E2CBFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors`}>
      {baseProps.children}
    </button>
  )
}

function DefaultLink ({ ...baseProps }: ButtonWithLink) {
  return (
    <Link href={baseProps.href} className={`${baseProps.className} ${baseProps.position ? baseProps.position : 'relative'} font-light inline-flex animate-background-shine items-center justify-center rounded-md border border-[#E2CBFF] bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors`}>
      {baseProps.children}
    </Link>
  )
}
