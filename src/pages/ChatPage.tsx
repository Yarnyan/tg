import { useState } from 'react';
import ChatsBar from '../modules/chatsBar/ChatsBar';
import Chat from '../modules/chat/Chat';
import SearchBar from '../modules/searchBar/SearchBar';
import { useAppSelector } from '../hooks/redux';
import CallsModal from '../modules/chat/modal/CallsModal';
import ImagesModal from '../modules/chat/modal/ImagesModal';
import { Modal } from '@mui/material';

type Props = {};

export default function ChatPage({}: Props) {
  const activeTabChat = useAppSelector((state) => state.chat.activeTabChat);
  const [openCallsModal, setOpenCallsModal] = useState(false);
  const [openImagesModal, setOpenImagesModal] = useState(false);
  const [activeTab, setActiveTab] = useState<'search' | 'call' | 'options' | 'more' | null>(null);

  const handleCloseCallsModal = () => {
    setOpenCallsModal(false);
    setActiveTab(null);
  };

  return (
    <div className="flex">
      {activeTabChat === "search" ? <SearchBar /> : <ChatsBar />}
      <Chat onOpen={() => setOpenCallsModal(true)} activeTab={activeTab} setActiveTab={setActiveTab} onOpenImages={() => setOpenImagesModal(true)} />
      <Modal
        open={openCallsModal}
        onClose={(_event, reason) => {
          if (reason === 'backdropClick') {
          } else {
            handleCloseCallsModal();
          }
        }}
      >
        <CallsModal onClose={handleCloseCallsModal} />
      </Modal>
      <Modal
        open={openImagesModal}
        onClose={() => setOpenImagesModal(false)}
      >
        <ImagesModal onClose={() => setOpenImagesModal(false)} />
      </Modal>
    </div>
  );
}