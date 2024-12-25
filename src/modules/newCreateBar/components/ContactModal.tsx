import { useState } from 'react'
import { IContact } from '../types/types'
import CheckIcon from '@mui/icons-material/Check';
type Props = {
    contact: IContact,
}

export default function ContactModal({ contact }: Props) {

    const [select, setSelect] = useState<boolean>(false)

    return (
        <div className={`flex p-[12px] items-center cursor-pointer ${select ? 'bg-[var(--chatsBarItemColor)]' : ''}`} onClick={() => setSelect(!select)}>
            <img src={contact.src} alt="" className='w-[50px] h-[50px] rounded-full' />
            <div className='flex items-center justify-between w-full'>
                <div className="ml-[12px] flex flex-col justify-between">
                    <p className='text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium'>{contact.name}</p>
                    <p className='text-[var(--iconsColor)] text-[14px] font-normal'>{contact.last}</p>
                </div>
                {select && <CheckIcon className='text-[var(--iconsColor)]'/>}
            </div>
        </div>
    )
}