import { useState, useEffect } from 'react'
import { useForm, Controller } from 'react-hook-form'
import Chat from './components/Chat'
import { IChat } from './types/types'
import { useGetChatsQuery } from '../../store/api/Chat'
import { useGetUserByPhoneQuery, useGetUserByUsernameQuery } from '../../store/api/User'

type Props = {}

export default function ChatsBar({ }: Props) {
    const [activeTab, setActiveTab] = useState<'All' | 'Secrets' | 'Groups'>('All')
    const { data: chats, refetch: refetchChats } = useGetChatsQuery(null)
    const { control, watch } = useForm();
    const searchValue = watch('search', '');
    const [searchResults, setSearchResults] = useState<any>(null);

    const isPhoneSearch = /^[\d+]/.test(searchValue);

    const { data: userByPhone } = useGetUserByPhoneQuery(searchValue, { skip: !isPhoneSearch || searchValue.trim() === '' });
    const { data: userByUsername } = useGetUserByUsernameQuery(searchValue, { skip: isPhoneSearch || searchValue.trim() === '' });

    useEffect(() => {
        if (searchValue.trim() === '') {
            setSearchResults(null);
            return;
        }

        if (isPhoneSearch) {
            if (userByPhone?.data) {
                setSearchResults(userByPhone.data);
            } else {
                setSearchResults(null);
            }
        } else {
            if (userByUsername?.data) {
                setSearchResults(userByUsername.data);
            } else {
                setSearchResults(null);
            }
        }
    }, [searchValue, userByPhone, userByUsername, isPhoneSearch]);

    useEffect(() => {
        refetchChats();
    }, []);

    const displayData = searchValue.length === 0 ? chats?.data : searchResults;

    return (
        <div className='min-w-[400px] h-[100dvh] bg-[var(--chatsBarColor)]'>
            <div className='w-full h-full pt-[16px]'>
                <div className='px-[16px] flex'>
                    <Controller
                        name="search"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <input
                                type="text"
                                placeholder='Search...'
                                {...field}
                                className='w-full h-[46px] rounded-l-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)]'
                            />
                        )}
                    />
                    <div className='h-[46px] flex justify-center items-center p-4 rounded-r-[20px] bg-[var(--chatsBarItemColor)]'>
                        <img src="/icons/SearchIcon.svg" alt="" />
                    </div>
                </div>

                {searchValue.length === 0 && (
                    <div className='pl-[16px] mt-[16px] flex gap-2 overflow-x-auto pb-4 scrollbar-hidden'>
                        <button onClick={() => setActiveTab('All')} className={`flex rounded-[20px] px-[16px] py-[12px] ${activeTab === 'All' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                            <p className={`text-[14px] font-medium ${activeTab === 'All' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>All</p>
                            <span className={`ml-[8px] ${activeTab === 'All' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[7px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[7px] rounded-[30px]'}`}>10</span>
                        </button>
                        <button onClick={() => setActiveTab('Secrets')} className={`flex rounded-[20px] px-[16px] py-[12px] ${activeTab === 'Secrets' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                            <p className={`text-[14px] font-medium ${activeTab === 'Secrets' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>Secrets</p>
                            <span className={`ml-[8px] ${activeTab === 'Secrets' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[7px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[7px] rounded-[30px]'}`}>10</span>
                        </button>
                        {/* <button onClick={() => setActiveTab('Groups')} className={`flex items-center rounded-[20px] px-[16px] py-[12px] ${activeTab === 'Groups' ? 'bg-[var(--chatsBarActiveButtonColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
                            <p className={`text-[14px] font-medium ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)]' : 'text-[var(--chatsBarButtonTextColor)]'}`}>Groups</p>
                            <span className={`ml-[8px] ${activeTab === 'Groups' ? 'text-[var(--chatsBarActiveButtonTextColor)] bg-[var(--chatsBarActiveContainerMessageColor)] px-[7px] rounded-[30px]' : 'text-[var(--chatsBarButtonTextColor)] bg-[var(--chatsBarContainerMessageColor)] px-[7px] rounded-[30px]'}`}>10</span>
                        </button> */}
                    </div>
                )}

                <div className='mt-[20px] overflow-y-scroll scrollbar-hidden' style={{ maxHeight: 'calc(100vh - 140px)' }}>
                    {displayData && displayData.length === 0 ? (
                        <p className="text-center text-gray-500">Нет результатов</p>
                    ) : (
                        Array.isArray(displayData) ? (
                            displayData.map((result: any) => <Chat key={result.id} chat={result} />)
                        ) : (
                            <Chat key={displayData?.id} chat={displayData} />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
