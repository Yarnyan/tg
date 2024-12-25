import ChatHeader from './components/ChatHeader';
import ChatFooter from './components/ChatFooter';
import { ITextMessage } from './types/types';
import TextMessage from './components/messages/TextMessage';
import { useAppSelector } from '../../hooks/redux';
import MoreLayout from './components/MoreLayout';

type Props = {
  onOpen: () => void;
  onOpenImages: () => void;
  activeTab: 'search' | 'call' | 'options' | 'more' | null;
  setActiveTab: (tab: 'search' | 'call' | 'options' | 'more' | null) => void;
};

export default function Chat({ onOpen, activeTab, setActiveTab, onOpenImages }: Props) {
  const activeMoreTab = useAppSelector((state) => state.chat.activeMoreTab);

  const messages: ITextMessage[] = [
    {
      id: 1,
      text: 'Hello, how are you?',
      senderId: 1,
      senderName: 'John Doe',
      senderSrc: '/image/1.jpg',
      time: '09:00',
      isRead: true,
    },
    {
      id: 2,
      text: 'I am fine, thanks for asking. How about you?',
      senderId: 2,
      senderName: 'Jane Smith',
      senderSrc: '/image/1.jpg',
      time: '09:15',
      isRead: false,
    },
    {
      id: 3,
      text: 'I’ve also spoken with the client, and they’re happy with how the interface looks visually. There are still a few minor tweaks needed based on their latest comments, but nothing too major. Overall, the project is moving along smoothly.',
      senderId: 2,
      senderName: 'Jane Smith',
      senderSrc: '/image/1.jpg',
      time: '09:15',
      isRead: false,
    },
  ];

  return (
    <div className='w-full h-[100dvh] flex'>
      <div className='flex flex-col justify-between w-full'>
        <div className="w-full">
          <ChatHeader onOpen={onOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className='flex-1 p-[16px]'>
          {messages.map((item) => <TextMessage key={item.id} message={item} />)}
        </div>
        <div className="w-full">
          <ChatFooter />
        </div>
      </div>
      {activeMoreTab && (
        <div className='w-[350px]'>
          <MoreLayout onOpenImages={onOpenImages}/>
        </div>
      )}
    </div>
  );
}