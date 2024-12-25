import { IStories } from '../types/types'

type Props = {
    call: IStories
}

export default function Stories({ call }: Props) {
    return (
        <div className='w-full flex justify-between items-center px-[16px] py-[12px]'>
            <div className='flex items-center'>
                <img src={call.src} alt="" className='rounded-[10px] w-[40px] h-[50px]' />
                <div className='ml-[14px] flex flex-col'>
                    <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>{call.name}</p>
                    <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>{call.quantity} stories</p>
                </div>
            </div>
        </div>
    )
}