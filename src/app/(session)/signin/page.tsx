import { Modal, ModalTrigger } from '@/components/modal'
import { SignInComponent } from '../_components/signinForm'

export default function SingInPage () {
  return (
    <main className='w-full flex flex-col items-center justify-center gap-8 pt-40'>
      <SignInComponent />
      <section>
        <p>
          To login as a guest click <ModalTrigger className='inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#8678f9] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent'>aqui.</ModalTrigger>
        </p>
      </section>
      <Modal />
    </main>
  )
}
