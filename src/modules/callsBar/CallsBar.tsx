import { useState } from 'react'
import Call from './components/Call'
import { ICall, MediaType } from './types/types'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
type Props = {}

export default function CallsBar({ }: Props) {

    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const data: ICall[] = [
        {
            id: 1,
            name: 'John Doe',
            date: 'Sep, 18, 18:28',
            src: '/image/1.jpg',
            type: MediaType.Call,
        },
        {
            id: 2,
            name: 'John Doe',
            date: 'Sep, 18, 18:28',
            src: '/image/1.jpg',
            type: MediaType.Video,
        },
        {
            id: 3,
            name: 'John Doe',
            date: 'Sep, 18, 18:28',
            src: '/image/1.jpg',
            type: MediaType.Video,
        },
    ]

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
                    <p className='text-[20px] font-medium text-[var(--callsBarTextColor)]'>Calls</p>
                    <div className='flex'>
                        <button onClick={handleClick} className={`flex justify-center items-center w-[46px] h-[46px] ${anchorEl ? 'bg-[var(--storiesBarMenuButtonBgColor)] rounded-[20px]' : ''}`}>
                            <img src="/icons/callsRepost.svg" alt="" />
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
    )
}