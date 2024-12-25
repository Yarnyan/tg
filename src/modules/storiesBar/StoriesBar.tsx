import { useState } from 'react';
import Call from './components/Stories';
import { IStories } from './types/types';
import AddIcon from '@mui/icons-material/Add';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

type Props = {}

export default function StoriesBar({ }: Props) {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const data: IStories[] = [
        {
            id: 1,
            name: 'Работа',
            src: '/image/1.jpg',
            quantity: 0,
        },
        {
            id: 2,
            name: 'Увлечения',
            src: '/image/1.jpg',
            quantity: 1,
        },
        {
            id: 3,
            name: 'Моя семья',
            src: '/image/1.jpg',
            quantity: 2,
        },
    ];

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='min-w-[400px] h-[100dvh] bg-[var(--chatsBarColor)]'>
            <div className='w-full h-full pt-[16px]'>
                <div className='px-[16px] flex justify-between items-center'>
                    <p className='text-[20px] font-medium text-[var(--callsBarTextColor)]'>Stories</p>
                    <div className='flex'>
                        <button onClick={handleClick} className={`flex justify-center items-center w-[46px] h-[46px] ${anchorEl ? 'bg-[var(--storiesBarMenuButtonBgColor)] rounded-[20px]' : ''}`}>
                            <AddIcon sx={{ color: 'var(--chatsBarTextColor)' }} />
                        </button>
                        <button className='ml-[24px]'>
                            <img src="/icons/callsOptions.svg" alt="" />
                        </button>
                    </div>
                </div>
                <div className='px-[16px] flex mt-[16px]'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-full h-[46px] rounded-l-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)]'
                    />
                    <div className='h-[46px] flex justify-center items-center p-4 rounded-r-[20px] bg-[var(--chatsBarItemColor)]'>
                        <img src="/icons/SearchIcon.svg" alt="" />
                    </div>
                </div>
                <div className='mt-[20px] overflow-y-scroll scrollbar-hidden' style={{ maxHeight: 'calc(100vh - 140px)' }}>
                    {data.map(call => <Call key={call.id} call={call} />)}
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            width: '250px',
                            backgroundColor: 'var(--callsCalendarCallColor)',
                            marginTop: '10px',
                            borderRadius: '20px',
                        },
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to='/new' className='text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium py-[4px]'>Photo & Video</Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <Link to='/new' className='text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium py-[4px]'>Text story</Link>
                    </MenuItem>
                </Menu>
            </div>
        </div>
    );
}