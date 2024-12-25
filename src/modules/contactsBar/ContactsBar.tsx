import Call from './components/Contact';
import { IContact } from './types/types';

type Props = {}

export default function ContactsBar({ }: Props) {

    const data: IContact[] = [
        {
            id: 1,
            name: 'Mary',
            src: '/image/1.jpg',
            last: 'last seen today at 17:00'
        },
        {
            id: 2,
            name: 'Mila Corn',
            src: '/image/1.jpg',
            last: 'Online'
        },
        {
            id: 3,
            name: 'Alex Jensen',
            src: '/image/1.jpg',
            last: 'last seen yesterday at 11:30'
        },
    ];

    return (
        <div className='min-w-[400px] h-[100dvh] bg-[var(--chatsBarColor)]'>
            <div className='w-full h-full pt-[16px]'>
                <div className='px-[16px] flex justify-between items-center'>
                    <p className='text-[20px] font-medium text-[var(--callsBarTextColor)]'>Contacts</p>
                    <div className='flex'>
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
                    {data.map(call => <Call key={call.id} contact={call} />)}
                </div>
            </div>
        </div>
    );
}