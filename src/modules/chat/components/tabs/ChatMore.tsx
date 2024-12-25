import StarBorderIcon from '@mui/icons-material/StarBorder';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Switch from '@mui/material/Switch';
import { useAppDispatch } from '../../../../hooks/redux';
import { setMoreTab } from '../../../../store/reducers/chatSlice';
type Props = {
    onOpenImages: () => void
}

export default function ChatMore({onOpenImages}: Props) {
    const dispatch = useAppDispatch();
    return (
        <div className='w-full h-full flex flex-col bg-[var(--callsCalendarActiveDayColor)] overflow-y-scroll'>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center justify-center bg-[var(--activeTab)]'>
                    <div className='flex flex-col items-center px-[16px] pt-[80px]'>
                        <img src="/image/1.jpg" alt="" className='w-[120px] h-[120px] rounded-full' />
                        <p className='text-[20px] font-semibold text-[var(--callsBarCallNameColor)] mt-[8px]'>Mary</p>
                        <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>last seen today at 17:00 </p>
                        <div className='flex items-center mt-[16px] gap-4'>
                            <button className='bg-[var(--createModalHoverColorButton)] w-[48px] h-[48px] rounded-full flex items-center justify-center'>
                                <img src="/icons/MoreIconsFirst.svg" alt="" />
                            </button>
                            <button className='bg-[var(--createModalHoverColorButton)] w-[48px] h-[48px] rounded-full flex items-center justify-center'>
                                <img src="/icons/MoreIconsSecond.svg" alt="" />
                            </button>
                            <button className='bg-[var(--createModalHoverColorButton)] w-[48px] h-[48px] rounded-full flex items-center justify-center'>
                                <StarBorderIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
                            </button>
                        </div>
                    </div>
                    <div className='mt-[24px] w-full justify-between flex items-center px-[16px] pb-[16px]'>
                        <div className='flex items-center'>
                            <NotificationsNoneOutlinedIcon sx={{ color: 'var(--iconsColor)', width: '24px', height: '24px' }} />
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Notifications</p>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                </div>
                <div className='mt-[8px] bg-[var(--activeTab)]'>
                    <div className='p-[16px] flex flex-col w-full'>
                        <div className='flex flex-col'>
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>+000 00  000 00 00</p>
                            <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Mobile</p>
                        </div>
                        <div className='mt-[8px] flex flex-col'>
                            <p className='text-[14px] font-medium text-[var(--pinnedMessageTextColor)]'>@mariua</p>
                            <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Username</p>
                        </div>
                        <div className='mt-[8px] flex flex-col'>
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>UI & Ux designer</p>
                            <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Bio</p>
                        </div>
                    </div>
                </div>
                <div className='mt-[8px] bg-[var(--activeTab)]'>
                    <div className='p-[16px] flex flex-col w-full'>
                        <div className='flex justify-between items-center'>
                            <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>Media (0)</p>
                            <button className='text-[12px] font-medium text-[var(--pinnedMessageTextColor)]' onClick={() => {onOpenImages()}}>
                                See all
                            </button>
                        </div>
                        <div className='flex gap-2 overflow-x-auto scrollbar-hidden mt-[8px]'>
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                            <img src="/image/2.jpg" alt="" className='min-w-[64px] h-[64px] rounded-[10px]' />
                        </div>
                    </div>
                </div>
                <div className='mt-[8px] bg-[var(--activeTab)]'>
                    <div className='p-[16px] flex flex-col w-full'>
                        <button className='flex items-center justify-between' onClick={() => {dispatch(setMoreTab(1))}}>
                            <div className='flex'>
                                <img src="/icons/more/icon.svg" alt="" />
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Voice message</p>
                            </div>
                            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>34</p>
                        </button>
                    </div>
                    <div className='p-[16px] flex flex-col w-full'>
                        <button className='flex items-center justify-between' onClick={() => {dispatch(setMoreTab(2))}}>
                            <div className='flex'>
                                <img src="/icons/more/icon-1.svg" alt="" />
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Audio files</p>
                            </div>
                            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>34</p>
                        </button>
                    </div>
                    <div className='p-[16px] flex flex-col w-full'>
                        <button className='flex items-center justify-between' onClick={() => {dispatch(setMoreTab(3))}}>
                            <div className='flex'>
                                <img src="/icons/more/icon-2.svg" alt="" />
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Videos</p>
                            </div>
                            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>34</p>
                        </button>
                    </div>
                    <div className='p-[16px] flex flex-col w-full'>
                        <button className='flex items-center justify-between' onClick={() => {dispatch(setMoreTab(4))}}>
                            <div className='flex'>
                                <img src="/icons/more/icon-3.svg" alt="" />
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Files</p>
                            </div>
                            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>34</p>
                        </button>
                    </div>
                    <div className='p-[16px] flex flex-col w-full'>
                        <button className='flex items-center justify-between' onClick={() => {dispatch(setMoreTab(5))}}>
                            <div className='flex'>
                                <img src="/icons/more/icon-4.svg" alt="" />
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Shared links</p>
                            </div>
                            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>34</p>
                        </button>
                    </div>
                    <div className='p-[16px] flex flex-col w-full'>
                        <button className='flex items-center justify-between' onClick={() => {dispatch(setMoreTab(6))}}>
                            <div className='flex'>
                                <img src="/icons/more/icon-5.svg" alt="" />
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>GIFS</p>
                            </div>
                            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>34</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}