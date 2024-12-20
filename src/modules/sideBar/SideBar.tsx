import { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';

type Props = {}

export default function SideBar({ }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const [activeTab, setActiveTab] = useState<'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories' | null>('Chats');
    const [token, setToken] = useState<boolean | null>(null);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(!!token);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [sidebarRef]);

    if (token === null) {
        return null;
    }

    const handleTabClick = (tab: 'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories') => {
        setActiveTab(tab);
    };

    const getButtonClass = (tab: 'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories') => {
        return activeTab === tab ? 'bg-[var(--activeTab)]' : 'hover:bg-[var(--hoverColor)]';
    };

    return (
        <aside className='relative z-50 bg-[var(--asideColor)]'>
            <div className='w-full h-full flex'>
                <div ref={sidebarRef} className={`sm:h-[100dvh] fixed z-50 top-0 left-0 h-full transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[var(--sideBarColor)] shadow-lg z-20 border-r-[1px] border-[var(--borderColor)] px-4 pt-6`}>
                    <div className="flex justify-between items-center">
                        <Link to={'/'} className='text-xl font-normal text-[var(--textColor)] mt-2' onClick={toggleSidebar}>manager.ai</Link>
                        <button onClick={toggleSidebar} className={`rounded-full hover:bg-[var(--hoverColor)] p-1`} >
                            <ArrowBackIosIcon className='h-[28px] w-[28px] fill-[var(--iconColor)]' />
                        </button>
                    </div>
                    <h1 className='mt-4 text-m font-normal text-[var(--mutedTextColor)]'>Your chats</h1>
                </div>
                <div className='z-10'>
                    {token ? (
                        <div className='w-[76px] h-[100dvh]'>
                            <button
                                className={`w-full h-[78px] flex items-center justify-center ${getButtonClass('Menu')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Menu') }}
                            >
                                <MenuIcon className='h-[32px] w-[32px] -[var(--iconsColor)]' sx={{ color: 'var(--iconsColor)' }} />
                            </button>
                            <button
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('Stories')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Stories') }}
                            >
                                <img src="/icons/Phone.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>Stories</p>
                            </button>
                            <button
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('Chats')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Chats') }}
                            >
                                <img src="/icons/Chats.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>All chats</p>
                            </button>
                            <button
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('Calls')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Calls') }}
                            >
                                <img src="/icons/Calls.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>Calls</p>
                            </button>
                            <button
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('New')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('New') }}
                            >
                                <img src="/icons/Add.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>New</p>
                            </button>
                        </div>
                    ) : (
                        <Link className='text-xl font-normal text-[var(--textColor)] mt-2 ml-4 sm:ml-0' to={'/'} >Manager.ai</Link>
                    )}
                </div>
            </div>
        </aside>
    );
}