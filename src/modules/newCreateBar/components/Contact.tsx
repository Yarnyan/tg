import { IContact } from '../types/types'
type Props = {
  contact: IContact,
}

export default function Contact({ contact }: Props) {
  const f = (name: string) => {
    if (name.length > 4) {
      const newName = name.slice(0, 4)
      return newName + '...'
    } else{
      return name
    }
  }
  return (
    <div className="flex flex-col p-[12px] min-w-[74px]">
      <img src={contact.src} alt="" className='w-[50px] h-[50px] rounded-full' />
      <p className='text-center mt-[14px] text-[var(--storiesBarMenuTextColor)] text-[14px] font-normal'>{f(contact.name)}</p>
    </div>
  )
}