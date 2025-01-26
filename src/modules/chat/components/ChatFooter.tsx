import { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Picker from 'emoji-picker-react';
import { useSendMessageMutation } from '../../../store/api/Chat';

type Props = {};


export default function ChatFooter({}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState('');
  const { control, handleSubmit, setValue } = useForm();
  const [sendMessage] = useSendMessageMutation();

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onEmojiClick = (_event: any, emojiObject: any) => {
    setMessage((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
  };

  const onSubmit = async (data: any) => {
    const formData = new FormData();
    formData.append('chatId', '1');
    formData.append('message', data.message);
    
    if (data.file[0]) {
      formData.append('file', data.file[0]);
    }

    try {
      await sendMessage(formData).unwrap();
      setMessage('');
      setValue('message', '');
    } catch (error) {
      console.error('Failed to send message:', error);
    }
  };

  return (
    <div className='w-full h-[62px] bg-[var(--chatsBarButtonColor)]'>
      <form onSubmit={handleSubmit(onSubmit)} className='py-[12px] px-[20px] flex justify-between items-center h-full'>
        <div className='flex items-center w-full'>
          {/* Контролируем первый input с файлом */}
          <Controller
            name="file"
            control={control}
            render={({ field }) => (
              <>
                <button type="button" onClick={handleFileButtonClick}>
                  <img src="/icons/FooterFirst.svg" alt="" className='w-[24px] h-[24px]' />
                </button>
                <input
                  type="file"
                  ref={(e) => {
                    fileInputRef.current = e;
                    field.ref(e);
                  }}
                  style={{ display: 'none' }}
                  {...field}
                />
              </>
            )}
          />
          
          {/* Контролируем второй input для ввода текста */}
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                placeholder="Write a message..."
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value); // обновляем локальное состояние
                  field.onChange(e); // передаем изменения в react-hook-form
                }}
                className='ml-[20px] bg-[transparent] text-[var(--chatsBarTextColor)] w-full'
              />
            )}
          />
        </div>
        <div className='flex items-center'>
          <button type="button" className='ml-[30px] min-w-[24px] min-h-[24px]' onClick={() => setShowPicker(!showPicker)}>
            <img src="/icons/FooterSecond.svg" alt="" className='w-[24px] h-[24px]'/>
          </button>
          <button type="submit" className='ml-[30px] min-w-[24px] min-h-[24px]'>
            <img src="/icons/FooterThird.svg" alt="" className='w-[24px] h-[24px]'/>
          </button>
        </div>
      </form>
      {showPicker && (
        <div className="absolute bottom-[70px] right-[10px] z-10">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}
