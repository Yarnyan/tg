import { useEffect, useState, useRef } from 'react';
import ChatHeader from './components/ChatHeader';
import ChatFooter from './components/ChatFooter';
import { ITextMessage } from './types/types';
import TextMessage from './components/messages/TextMessage';
import { useAppSelector } from '../../hooks/redux';
import MoreLayout from './components/MoreLayout';
import { useGetMessageQuery } from '../../store/api/Chat';
import { HubConnection, HubConnectionBuilder, LogLevel } from '@microsoft/signalr';

type Props = {
  onOpen: () => void;
  onOpenImages: () => void;
  activeTab: 'search' | 'call' | 'options' | 'more' | null;
  setActiveTab: (tab: 'search' | 'call' | 'options' | 'more' | null) => void;
};

export default function Chat({ onOpen, activeTab, setActiveTab, onOpenImages }: Props) {
  const activeMoreTab = useAppSelector((state) => state.chat.activeMoreTab);
  const activeChat = useAppSelector((state) => state.chat.activeChat);
  const connectionRef = useRef<HubConnection | null>(null);
  const [messages, setMessages] = useState<any[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null); // Ref для контейнера сообщений

  const { data, refetch: refetchMessage, isError } = useGetMessageQuery(activeChat && activeChat.id, {
    // skip: !activeChat || !activeChat.messages,
  });

  useEffect(() => {
    if (isError) {
      setMessages([]);
      console.log('error');
    }
  }, [isError]);

  useEffect(() => {
    if (data) {
      setMessages(data.data);
    }
  }, [data, activeChat, refetchMessage]);

  useEffect(() => {
    if (activeChat && activeChat.messages) {
      refetchMessage();
    }
  }, [activeChat, refetchMessage]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const connection = new HubConnectionBuilder()
        .withUrl('http://localhost:5199/ws/tableUpdate', {
            accessTokenFactory: () => Promise.resolve(token || '')
        })
        .configureLogging(LogLevel.Information)
        .build();

    connection.start().then(() => console.log('Connection started'));

    connection.on('ReceiveMessage', (message: any) => {
        const data = message;
        console.log(data);
        setMessages((prevMessages) => [...prevMessages, data]);
    });

    connectionRef.current = connection;

    return () => {
        connection.off('ReceiveMessage');
        connection.stop().then(() => console.log('Connection stopped'));
    };
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  return (
    <div className='w-full h-[100dvh] flex'>
      <div className='flex flex-col justify-between w-full'>
        <div className="w-full">
          <ChatHeader onOpen={onOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
        <div className='flex-1 p-[16px] overflow-y-auto scrollbar-hidden'>
          {messages && messages.map((item: any) => <TextMessage key={item.id} message={item} />)}
          <div ref={messagesEndRef} />
        </div>
        <div className="w-full">
          <ChatFooter setMessages={setMessages} />
        </div>
      </div>
      {activeMoreTab && (
        <div className='min-w-[350px] max-w-[350px] scrollbar-hidden'>
          <MoreLayout onOpenImages={onOpenImages} />
        </div>
      )}
    </div>
  );
}