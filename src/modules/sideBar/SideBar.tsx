import { useState, useEffect, useRef } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { Switch } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useLocation } from 'react-router-dom';
import Wrapper from '../profile/Wrapper';
import { Modal } from '@mui/material'

type Props = {}

export default function SideBar({ }: Props) {
    const [isOpenPrifle, setIsOpenPrifle] = useState<boolean>(false);
    const [isOpen, setIsOpen] = useState(false);
    const sidebarRef = useRef<HTMLDivElement | null>(null);
    const [activeTab, setActiveTab] = useState<'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories' | null>(localStorage.getItem('activeTab') as 'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories' | null);
    const [token, setToken] = useState<boolean | null>(null);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const location = useLocation();
    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        setToken(!!token);
        const savedTheme = localStorage.getItem('theme') as 'dark' | 'light' | null;
        const storedTab = localStorage.getItem('activeTab') as 'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories' | null;
        setActiveTab(storedTab);
        if (savedTheme) {
            setTheme(savedTheme);
        } else {
            localStorage.setItem('theme', 'dark');
        }
    }, [location]);

    // useEffect(() => {
    //     const handleClickOutside = (event: MouseEvent) => {
    //         if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
    //             setIsOpen(false);
    //         }
    //     };

    //     document.addEventListener('mousedown', handleClickOutside);
    //     return () => {
    //         document.removeEventListener('mousedown', handleClickOutside);
    //     };
    // }, [sidebarRef]);

    if (token === null) {
        return null;
    }

    const handleTabClick = (tab: 'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories') => {
        setActiveTab(tab);
        localStorage.setItem('activeTab', tab);
    };

    const getButtonClass = (tab: 'Menu' | 'Chats' | 'Calls' | 'New' | 'Stories') => {
        return activeTab === tab ? 'bg-[var(--activeTab)]' : 'hover:bg-[var(--hoverColor)]';
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTheme = event.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.body.setAttribute('data-theme', newTheme);
    };

    const a = () => {
        setIsOpenPrifle(!isOpenPrifle);
    }

    return (
        <aside className='relative z-50 bg-[var(--asideColor)]'>
            <div className='w-full h-full flex'>
                <div ref={sidebarRef} className={`w-[380px] sm:h-[100dvh] fixed z-50 top-0 left-0 h-full transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64 bg-[var(--activeTab)] shadow-lg z-20 px-[20px] py-[16px]`}>
                    <div className='h-[102px] flex items-center bg-[var(--chatsBarButtonColor)] rounded-[20px] p-[16px]'>
                        <img src="/image/1.jpg" alt="" className='w-[70px] h-[70px] rounded-full' />
                        <div className='ml-[16px]'>
                            <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>Anna Forton</p>
                            <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>UI & UX designer</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[24px]'>
                        <div className='flex items-center justify-between h-[48px]'>
                            <div className='flex'>
                                <img src="/icons/sidebar/profile.svg" alt="" className='fill-[var(--iconsColor)]' />
                                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)] ml-[16px]'>Public profile</p>
                            </div>
                            <div className='text-[12px] font-normal text-[var(--callsBarCallDateColor)] bg-[var(--chatsBarButtonColor)] rounded-[20px] px-[10px] py-[4px]'>
                                Free
                            </div>
                        </div>
                        <div className='h-[48px] flex items-center'>
                            <Link to={''} className='flex' onClick={() => toggleSidebar()}>
                                <img src="/icons/sidebar/icon.svg" alt="" className='fill-[var(--iconsColor)]' />
                                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)] ml-[16px]'>Saved Message</p>
                            </Link>
                        </div>
                        <div className='h-[48px] flex items-center'>
                            <Link to={'/contacts'} className='flex' onClick={() => toggleSidebar()}>
                                <img src="/icons/sidebar/icon-1.svg" alt="" className='fill-[var(--iconsColor)]' />
                                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)] ml-[16px]'>Contacts</p>
                            </Link>
                        </div>
                        <div className='h-[48px] flex items-center'>
                            <button className='flex' onClick={() => a()}>
                                <img src="/icons/sidebar/icon-2.svg" alt="" className='fill-[var(--iconsColor)]' />
                                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)] ml-[16px]'>Settings & Privacy</p>
                            </button>
                        </div>
                        <div className='flex justify-between items-center h-[48px]'>
                            <div className='flex'>
                                <img src="/icons/sidebar/icon-3.svg" alt="" className='fill-[var(--iconsColor)]' />
                                <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)] ml-[16px]'>Night mode</p>
                            </div>
                            <div>
                                <Switch checked={theme === 'dark'} onChange={handleThemeChange} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-[16px]">
                        <button className='flex items-center justify-center rounded-[20px] bg-[var(--createModalHoverColorButton)] w-full h-[48px]'>
                            <AddIcon className='h-[32px] w-[32px] -[var(--iconsColor)]' sx={{ color: 'var(--iconsColor)' }} />
                            <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)] ml-[8px]'>Add accounts</p>
                        </button>
                    </div>
                </div>
                <div className='z-10'>
                    {token ? (
                        <div className='w-[76px] h-[100dvh]'>
                            <button
                                className={`w-full h-[78px] flex items-center justify-center ${getButtonClass('Menu')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Menu'), toggleSidebar() }}
                            >
                                <MenuIcon className='h-[32px] w-[32px] -[var(--iconsColor)]' sx={{ color: 'var(--iconsColor)' }} />
                            </button>
                            <Link to={'/stories'}
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('Stories')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Stories') }}
                            >
                                <img src="/icons/Phone.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>Stories</p>
                            </Link>
                            <Link to={'/'}
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('Chats')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Chats') }}
                            >
                                <img src="/icons/Chats.svg" alt="" className='w-[24px] h-[24px] fill-[var (--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>All chats</p>
                            </Link>
                            <Link
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('Calls')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('Calls') }}
                                to={'/calls'}
                            >
                                <img src="/icons/Calls.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>Calls</p>
                            </Link>
                            <Link
                                className={`w-full h-[78px] flex flex-col items-center justify-center ${getButtonClass('New')} ${isOpen ? 'hidden' : 'block'}`}
                                onClick={() => { handleTabClick('New') }}
                                to={'/create'}
                            >
                                <img src="/icons/Add.svg" alt="" className='w-[24px] h-[24px] fill-[var(--iconColor)]' />
                                <p className='text-[12px] font-normal text-[var(--asideTextColor)] mt-1'>New</p>
                            </Link>
                        </div>
                    ) : (
                        null
                    )}
                </div>
            </div>
            {isOpen && (
                <Modal open={isOpenPrifle} onClose={() => setIsOpenPrifle(false)}>
                    <Wrapper />
                </Modal>
            )}
        </aside>
    );
}