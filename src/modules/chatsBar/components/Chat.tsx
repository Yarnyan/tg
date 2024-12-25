import { IChat } from '../types/types'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux'
import { setActiveChat } from '../../../store/reducers/chatSlice'

type Props = {
  chat: IChat
}

export default function Chat({ chat }: Props) {
  const activeChat = useAppSelector((state) => state.chat.activeChat)

  function extractTime(isoString: string): string {
    const date = new Date(isoString);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  const dispatch = useAppDispatch()

  return (
    <Link 
      className={`w-full flex justify-between items-center px-[16px] py-[12px] hover:bg-[var(--callsCalendarActiveDayColor)] duration-500 ${chat.id === activeChat?.id ? 'bg-[var(--createModalHoverColorButton)]' : ''}`} 
      to={`/chat/${chat.id}`} 
      onClick={() => {dispatch(setActiveChat(chat)), localStorage.setItem('activeChat', JSON.stringify(chat))}}
    >
      <div className='flex items-center w-full'>
        <img src={chat.src} alt="" className='rounded-full w-[50px] h-[50px]' />
        <div className='ml-[14px] flex flex-col w-full justify-between'>
          <div className='flex items-center justify-between w-full'>
            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>{chat.name}</p>
            <p className='text-[12px] font-medium text-[var(--asideTextColor)]'>{extractTime(chat.lastMessageTime)}</p>
          </div>
          <div className='flex items-center justify-between w-full mt-[6px]'>
            <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)]'>{chat.lastMessage}</p>
            {chat.unreadMessages > 0 && (
              <p className='text-[12px] font-medium text-[var(--chatsMessageUnread)] bg-[var(--chatsBarActiveButtonTextColor)] w-[20px] h-[20px] flex justify-center items-center rounded-full'>
                {chat.unreadMessages}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  )
}