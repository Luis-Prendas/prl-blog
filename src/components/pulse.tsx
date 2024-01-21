interface Props {
  className?: string
}

export function Pulse ({ className }: Props) {
  return (
    <div className={`${className} h-[360px] w-[360px] max-w-full animate-pulse-slow rounded-full bg-[#8678F9] opacity-20 blur-[100px]`} />
  )
}
