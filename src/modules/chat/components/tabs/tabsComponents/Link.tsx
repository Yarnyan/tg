type Props = {}

export default function Link({ }: Props) {
    const sliceLink = (link: string) => {
        return link.slice(0, link.lastIndexOf('/'));
    }
    return (
        <div className='w-full flex items-center cursor-pointer'>
            <div>
                <img src="/image/2.jpg" alt="" className='min-w-[60px] h-[60px] rounded-[20px] max-w-[60px]'/>
            </div>
            <div className='ml-[12px]'>
                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>Document.pdf</p>
                <a className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]' target="_blank" href="https://www.figma.com/design/VIcRHDixCkDB3UDpLxYimJ/Messenger--TeleClone-app?node-id=1-3&p=f&t=OqkfPUzZsbpQC2yJ-0">{sliceLink('https://www.figma.com/design/VIcRHDixCkDB3UDpLxYimJ/Messenger--TeleClone-app?node-id=1-3&p=f&t=OqkfPUzZsbpQC2yJ-0')}</a>
            </div>
        </div>
    )
}