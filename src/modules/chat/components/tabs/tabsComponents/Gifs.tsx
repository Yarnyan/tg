type Props = {}

export default function Gifs({ }: Props) {
    return (
        <div className='w-full flex items-center cursor-pointer'>
            <div>
                <img src="/image/2.jpg" alt="" className='min-w-[60px] h-[60px] rounded-[20px] max-w-[60px]'/>
            </div>
            <div className='ml-[12px]'>
                <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>Oct 16, 322.1 KB</p>
                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>Document.pdf</p>
                <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>480 kb</p>
            </div>
        </div>
    )
}