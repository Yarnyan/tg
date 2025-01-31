import { useEffect, useState } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatFooter from './components/ChatFooter';
import { ITextMessage } from './types/types';
import TextMessage from './components/messages/TextMessage';
import { useAppSelector } from '../../hooks/redux';
import MoreLayout from './components/MoreLayout';
import { useGetMessageQuery } from '../../store/api/Chat';
import { useLocation } from 'react-router-dom';

type Props = {
  onOpen: () => void;
  onOpenImages: () => void;
  activeTab: 'search' | 'call' | 'options' | 'more' | null;
  setActiveTab: (tab: 'search' | 'call' | 'options' | 'more' | null) => void;
};

export default function Chat({ onOpen, activeTab, setActiveTab, onOpenImages }: Props) {
  const activeMoreTab = useAppSelector((state) => state.chat.activeMoreTab);
  const activeChat = useAppSelector((state) => state.chat.activeChat);
  const [messages, setMessages] = useState<any[]>()
  const location = useLocation();
  const { data, refetch: refetchMessage } = useGetMessageQuery(activeChat && activeChat.id, {
    skip: !activeChat || !activeChat.messages,
  });



  useEffect(() => {
    setMessages([]);
  }, [location]);

  useEffect(() => {
    if (data) {
      setMessages(data.data);
    }
  }, [data]);

  useEffect(() => {
    if (activeChat && activeChat.messages) {
      refetchMessage();
    }
  }, [activeChat, refetchMessage]);

  return (
    <div className='w-full h-[100dvh] flex'>
      <div className='flex flex-col justify-between w-full'>
        <div className="w-full">
          <ChatHeader onOpen={onOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className='flex-1 p-[16px]'>
          {messages && messages.map((item: any) => <TextMessage key={item.id} message={item} />)}
        </div>
        <div className="w-full">
          <ChatFooter />
        </div>
      </div>
      {activeMoreTab && (
        <div className='w-[350px]'>
          <MoreLayout onOpenImages={onOpenImages} />
        </div>
      )}
    </div>
  );
}
