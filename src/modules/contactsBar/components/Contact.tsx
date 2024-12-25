import { IContact } from '../types/types'

type Props = {
    contact: IContact
}

export default function Contact({ contact }: Props) {
    return (
        <div className='w-full flex justify-between items-center px-[16px] py-[12px]'>
            <div className='flex items-center'>
                <img src={contact.src} alt="" className='rounded-full w-[42px] h-[52px]' />
                <div className='ml-[14px] flex flex-col'>
                    <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>{contact.name}</p>
                    <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>{contact.last}</p>
                </div>
            </div>
        </div>
    )
}