import { useState } from 'react'
import Chat from './components/Chat'
type Props = {}

export default function ChatsBar({ }: Props) {
    const [activeTab, setActiveTab] = useState<'All' | 'Channels' | 'Groups' | null>('All')
    return (
        <div className='w-[400px] h-[100dvh] bg-[var(--chatsBarColor)]'>
            <div className='w-full h-full pt-[16px]'>
                <div className='px-[16px] flex'>
                    <input
                        type="text"
                        placeholder='Search...'
                        className='w-full h-[46px] rounded-l-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)]'
                    />
                    <div className='h-[46px] flex justify-center items-center p-4 rounded-r-[20px] bg-[var(--chatsBarItemColor)]'>
                        <img src="/icons/SearchIcon.svg" alt="" />
                    </div>
                </div>
                <div className='pl-[16px] mt-[16px] flex gap-2 overflow-x-auto pb-4 scrollbar-hidden'>
                    <button onClick={() => setActiveTab('All')} className={`flex rounded-[20px] px-[16px] py-[12px] ${activeTab === 'All' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                        <p className={`text-[14px] font-medium ${activeTab === 'All' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>All</p>
                        <span className={`ml-[8px] ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[6px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[6px] rounded-[30px]'}`}>10</span>
                    </button>
                    <button onClick={() => setActiveTab('Channels')} className={`flex rounded-[20px] px-[16px] py-[12px] ${activeTab === 'Channels' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                        <p className={`text-[14px] font-medium ${activeTab === 'Channels' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>Channels</p>
                        <span className={`ml-[8px] ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[6px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[6px] rounded-[30px]'}`}>10</span>
                    </button>
                    <button onClick={() => setActiveTab('Groups')} className={`flex items-center rounded-[20px] px-[16px] py-[12px] ${activeTab === 'Groups' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                        <p className={`text-[14px] font-medium ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>Groups</p>
                        <span className={`ml-[8px] ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[6px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[6px] rounded-[30px]'}`}>10</span>
                    </button>
                    <button onClick={() => setActiveTab('Groups')} className={`flex items-center rounded-[20px] px-[16px] py-[12px] ${activeTab === 'Groups' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                        <p className={`text-[14px] font-medium ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>Groups</p>
                        <span className={`ml-[8px] ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[6px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[6px] rounded-[30px]'}`}>10</span>
                    </button>
                </div>
            </div>
        </div>
    )
}