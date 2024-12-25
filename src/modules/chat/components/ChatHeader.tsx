import { useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../../hooks/redux';
import { Menu } from '@mui/material';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import { selectTab, toggleMoreTab } from '../../../store/reducers/chatSlice';

type Props = {
    onOpen: () => void;
    activeTab: 'search' | 'call' | 'options' | 'more' | null;
    setActiveTab: (tab: 'search' | 'call' | 'options' | 'more' | null) => void;
};

export default function ChatHeader({ onOpen, activeTab, setActiveTab }: Props) {
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const activeChat = useAppSelector((state) => state.chat.activeChat);
    const activeTabChat = useAppSelector((state) => state.chat.activeTabChat);
    const activeMoreTab = useAppSelector((state) => state.chat.activeMoreTab); 

    const formatLastSeen = (lastMessageTime: string) => {
        const lastSeenDate = new Date(lastMessageTime);
        const now = new Date();

        const isToday = lastSeenDate.toDateString() === now.toDateString();
        const isYesterday = lastSeenDate.getDate() === now.getDate() - 1 && lastSeenDate.getMonth() === now.getMonth() && lastSeenDate.getFullYear() === now.getFullYear();

        const options: any = { hour: '2-digit', minute: '2-digit' };
        const timeString = lastSeenDate.toLocaleTimeString([], options);

        if (isToday) {
            return `Last seen today at ${timeString}`;
        } else if (isYesterday) {
            return `Last seen yesterday at ${timeString}`;
        } else {
            return `Last seen on ${lastSeenDate.toLocaleDateString()} at ${timeString}`;
        }
    };

    const handleOptionsClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        setActiveTab('options');
    };

    const handleClose = () => {
        setAnchorEl(null);
        setActiveTab(null);
    };

    const handleSearchClick = () => {
        const newTab: any = activeTabChat === 'search' ? 'users' : 'search';
        dispatch(selectTab(newTab));
        setActiveTab(newTab);
    };

    const handleMoreClick = () => {
        dispatch(toggleMoreTab()); 
        setActiveTab('more'); 
    };

    return (
        <div className='bg-[var(--activeTab)]'>
            <div className='flex items-center justify-between w-full px-[20px] py-[16px]'>
                <div>
                    <p className='text-[16px] font-medium text-[var(--storiesBarMenuTextColor)]'>{activeChat?.name}</p>
                    <p className='text-[14px] font-normal text-[var(--iconsColor)] mt-[6px]'>
                        {activeChat?.lastMessageTime ? formatLastSeen(activeChat.lastMessageTime) : 'Last seen not available'}
                    </p>
                </div>
                <div className='flex items-center gap-2'>
                    <button onClick={handleSearchClick} className={`flex justify-center items-center w-[46px] h-[46px] ${activeTab === 'search' ? 'bg-[var(--storiesBarMenuButtonBgColor)] rounded-[20px]' : ''}`}>
                        <img src="/icons/SearchIcon.svg" alt="" />
                    </button>
                    <button onClick={() => {setActiveTab('call'), onOpen()}} className={`flex justify-center items-center w-[46px] h-[46px] ${activeTab === 'call' ? 'bg-[var(--storiesBarMenuButtonBgColor)] rounded-[20px]' : ''}`}>
                        <img src="/icons/Calls.svg" alt="" />
                    </button>
                    <button onClick={handleMoreClick} className={`flex justify-center items-center w-[46px] h-[46px] ${activeMoreTab ? 'bg-[var(--storiesBarMenuButtonBgColor)] rounded-[20px]' : ''}`}>
                        <img src="/icons/HeaderIcon3.svg" alt="" />
                    </button>
                    <button onClick={handleOptionsClick} className={`flex justify-center items-center w-[46px] h-[46px] ${activeTab === 'options' ? 'bg-[var(--storiesBarMenuButtonBgColor)] rounded-[20px]' : ''}`}>
                        <img src="/icons/callsOptions.svg" alt="" />
                    </button>
                </div>
            </div>
            <div className='bg-[var(--pinnedMessage)] h-[62px] w-full px-[20px] py-[16px] flex items-center justify-between cursor-pointer'>
                <div>
                    <p className='text-[var(--pinnedMessageTextColor)] text-[14px] font-semibold'>Pinned Message</p>
                    <p className='text-[12px] font-normal text-[var(--iconsColor)] mt-[6px]'>Text</p>
                </div>
                <div>
                    <img src="/icons/PinnedIcon.svg" alt="" />
                </div>
            </div>
            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                sx={{
                    marginTop: '60px',
                    padding: 0,
                }}
                PaperProps={{
                    style: {
                        width: '250px',
                        backgroundColor: 'var(--activeTab)',
                        borderRadius: '20px',
                        padding: 0,
                    },
                }}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <div className='flex items-center bg-[var(--optionsTab)] py-[12px] px-[16px] rounded-[20px]'>
                    <VolumeOffIcon className='text-[var(--iconsColor)]' />
                    <p className='text-[14px] font-medium text-[var(--storiesBarMenuTextColor)] ml-[14px]'>Mute notifications</p>
                </div>
                <div className='mt-[12px] flex flex-col rounded-[20px] bg-[var(--optionsTab)]'>
                    <div className='flex items-center py-[12px] px-[16px]'>
                        <img src="/icons/HeaderClear.svg" alt="" />
                        <p className='text-[14px] font-medium text-[var(--storiesBarMenuTextColor)] ml-[14px]'>Clear history</p>
                    </div>
                    <div className='flex items-center bg-[var(--optionsTab)] py-[12px] px-[16px]'>
                        <VolumeOffIcon className='text-[#F8717C]' />
                        <p className='text-[14px] font-medium text-[#F8717C] ml-[14px]'>Delete chat</p>
                    </div>
                </div>
            </Menu>
        </div>
    );
}