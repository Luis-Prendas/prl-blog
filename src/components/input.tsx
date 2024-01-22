import { type Control, Controller, type Path } from 'react-hook-form'

type FormValues = Record<string, any>

interface InputProps<T extends FormValues> {
  controlMessage?: string | undefined
  control: Control<T>
  name: Path<T> // Use keyof to ensure the name is a key of the form values
  isPending?: boolean | undefined
  className?: string | undefined
  type: 'text' | 'password' | 'email'
  placeholder?: string | undefined
}

export function Input<T extends FormValues> ({ controlMessage, control, name, isPending, className, type, placeholder }: InputProps<T>) {
  return (
    <div className='relative'>
      {controlMessage && <span className='absolute -top-[17px] right-0 text-red-400 font-extralight text-xs'>{controlMessage}</span>}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            className={`${className} border rounded-md border-double border-slate-800 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(to_right,#334454,#334454 bg-origin-border] transition-all duration-500 [background-clip:padding-box,_border-box] placeholder:text-slate-500 focus:bg-[linear-gradient(#000,#000),linear-gradient(to_right,#c7d2fe,#8678f9)] focus:outline-none`}
            type={type}
            placeholder={placeholder}
            disabled={isPending}
            {...field}
          />
        )}
      />
    </div>
  )
}
