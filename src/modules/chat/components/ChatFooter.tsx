import { useRef, useState } from 'react';
import Picker from 'emoji-picker-react';

type Props = {};

export default function ChatFooter({}: Props) {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [showPicker, setShowPicker] = useState(false);
  const [message, setMessage] = useState('');

  const handleFileButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onEmojiClick = (_event: any, emojiObject: any) => {
    setMessage((prev) => prev + emojiObject.emoji); 
    setShowPicker(false);
  };

  return (
    <div className='w-full h-[62px] bg-[var(--chatsBarButtonColor)]'>
      <div className='py-[12px] px-[20px] flex justify-between items-center h-full'>
        <div className='flex items-center w-full'>
          <button onClick={handleFileButtonClick}>
            <img src="/icons/FooterFirst.svg" alt="" className='w-[24px] h-[24px]' />
          </button>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <input
            type="text"
            placeholder="Write a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='ml-[20px] bg-[transparent] text-[var(--chatsBarTextColor)] w-full'
          />
        </div>
        <div className='flex items-center'>
          <button className='ml-[30px] min-w-[24px] min-h-[24px]' onClick={() => setShowPicker(!showPicker)}>
            <img src="/icons/FooterSecond.svg" alt="" className='w-[24px] h-[24px]'/>
          </button>
          <button className='ml-[30px] min-w-[24px] min-h-[24px]'>
            <img src="/icons/FooterThird.svg" alt="" className='w-[24px] h-[24px]'/>
          </button>
        </div>
      </div>
      {showPicker && (
        <div className="absolute bottom-[70px] right-[10px] z-10">
          <Picker onEmojiClick={onEmojiClick} />
        </div>
      )}
    </div>
  );
}