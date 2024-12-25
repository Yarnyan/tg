import { ITextMessage } from '../../types/types'
import DoneAllIcon from '@mui/icons-material/DoneAll';

type Props = {
    message: ITextMessage
}

export default function TextMessage({message}: Props) {
    const myId = 1
  return (
    <div className={`max-w-[400px] flex items-end mt-[12px]`}>
        <div>
            <img src={message.senderSrc} alt="" className='min-w-[40px] h-[40px] rounded-full max-w-[40px]'/>
        </div>
        <div className={`flex items-center flex-col py-[8px] ml-[10px] px-[16px] min-h-[56px] rounded-[20px] ${message.senderId === myId ? 'bg-[var(--myMessageColor)]' : 'bg-[var(--chatsBarItemColor)]'}`}>
            <p className='text-[var(--callsBarCallNameColor)] text-[14px] font-medium'>{message.text}</p>
            <div className='flex justify-end mt-[8px] w-full items-center'>
                <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)]'>{message.time}</p>
                {message.isRead ? <DoneAllIcon sx={{color: '#58A0FD', width: '14px', height: '14px', marginLeft: '8px'}} /> : <DoneAllIcon sx={{color: '#909090',  width: '14px', height: '14px', marginLeft: '8px'}}/>}
            </div>
        </div>
    </div>
  )
}