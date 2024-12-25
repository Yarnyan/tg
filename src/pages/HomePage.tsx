import ChatsBar from '../modules/chatsBar/ChatsBar'

type Props = {}

export default function HomePage({ }: Props) {
  return (
    <div className="flex">
      <ChatsBar />
      <div className='w-full h-[100dvh] flex justify-center items-center flex flex-col'>
        <img src="/image/1.png" alt="" />
        <h1 className='text-[20px] font-bold text-[var(--callsBarCallNameColor)] mt-[12px]'>Welcome to TeleClone</h1>
        <p className='text-[var(--homeText)] text-[14px]'>Choose a chat to begin your conversation</p>
      </div>
    </div>
  )
}