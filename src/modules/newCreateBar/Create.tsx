import { useState } from "react";
import { IContact } from "./types/types";
import Contact from "./components/Contact";

type Props = {
    onOpen: () => void
    onChannelOpen: () => void
    onTeamOpen: () => void
}

export default function CreateBar({onOpen, onChannelOpen, onTeamOpen}: Props) {

    const [activeTab, setActiveTab] = useState<'Team' | 'Channels' | 'Groups' | null>(null)

    const items: IContact[] = [
        {
            id: 1,
            name: 'Mary',
            src: '/image/1.jpg',
        },
        {
            id: 2,
            name: 'Sofia Morgan',
            src: '/image/1.jpg',
        },
        {
            id: 3,
            name: 'Daniel',
            src: '/image/1.jpg',
        },
    ]

    return (
        <div className='min-w-[400px] h-[100dvh] bg-[var(--chatsBarColor)]'>
            <div className='w-full h-full pt-[16px]'>
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
                <div className="flex flex-col w-full mt-[16px]">
                    <button onClick={() => {setActiveTab('Groups'), onOpen()}} className={`px-[16px] cursor-pointer h-[48px] flex items-center ${activeTab === "Groups" ? 'bg-[var(--callsCalendarActiveDayColor)]' : ''}`}>
                        <img src="/icons/CreateFirstIcon.svg" alt="" />
                        <p className={`text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium ml-[14px] font-medium`}>New group</p>
                    </button>
                    <button onClick={() => {setActiveTab('Channels'), onChannelOpen()}} className={`px-[16px] cursor-pointer h-[48px] flex items-center ${activeTab === "Channels" ? 'bg-[var(--callsCalendarActiveDayColor)]' : ''}`}>
                        <img src="/icons/CreateSecondIcon.svg" alt="" />
                        <p className={`text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium ml-[14px] font-medium`}>New channel</p>
                    </button>
                    <button onClick={() => {setActiveTab('Team'), onTeamOpen()}} className={`px-[16px] cursor-pointer h-[48px] flex items-center ${activeTab === "Team" ? 'bg-[var(--callsCalendarActiveDayColor)]' : ''}`}>
                        <img src="/icons/CreateThirdIcon.svg" alt="" />
                        <p className={`text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium ml-[14px] font-medium`}>Team</p>
                    </button>
                </div>
                <div className="bg-[var(--callsCalendarActiveDayColor)] w-full h-[38px] flex items-center mt-[8px]">
                    <p className={`text-[var(--storiesBarMenuTextColor)] text-[14px] font-medium ml-[14px] font-medium`}>Contacts</p>
                </div>
                <div className="flex items-center overflow-x-auto scrollbar-hidden mt-[8px] pl-[28px] max-w-[400px]">
                    {items.map((item: IContact) => <Contact contact={item} key={item.id} />)}
                </div>
            </div>
        </div>
    );
}