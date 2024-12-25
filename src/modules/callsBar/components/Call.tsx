import { ICall } from '../types/types'

type Props = {
    call: ICall
}

export default function Call({ call }: Props) {
    return (
        <div className='w-full flex justify-between items-center px-[16px] py-[12px]'>
            <div className='flex items-center'>
                <img src={call.src} alt="" className='rounded-full w-[50px] h-[50px]' />
                <div className='ml-[14px] flex flex-col'>
                    <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>{call.name}</p>
                    <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>{call.date}</p>
                </div>
            </div>
            <div>
                <button>
                    <img src={call.type === 1 ? '/icons/call.svg' : '/icons/video.svg'} alt="" width={24} height={24} />
                </button>
            </div>
        </div>
    )
}