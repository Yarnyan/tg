import { useAppSelector } from '../../../hooks/redux'
import ChatMore from './tabs/ChatMore'
import VoiceTab from './tabs/VoiceTab'
import AudioTab from './tabs/AudioTab'
import VideoTab from './tabs/VideoTab'
import FilesTab from './tabs/FilesTab'
import LinksTab from './tabs/LinksTab'
import GifsTab from './tabs/GifsTab'
type Props = {
    onOpenImages: () => void,
}

export default function MoreLayout({onOpenImages}: Props) {
    const tab = useAppSelector((state) => state.chat.moreTab)
    const renderMoreTab = () => {
        switch (tab) {
            case 0:
                return <ChatMore onOpenImages={onOpenImages}/>;
            case 1:
                return <VoiceTab />;
            case 2:
                return <AudioTab />;
            case 3:
                return <VideoTab />;
            case 4:
                return <FilesTab />;
            case 5:
                return <LinksTab />;
            case 6:
                return <GifsTab />;
            default:
                break;
        }
    }
  return (
    <div className='overflow-y-scroll h-full'>
        {renderMoreTab()} 
    </div>
  )
}