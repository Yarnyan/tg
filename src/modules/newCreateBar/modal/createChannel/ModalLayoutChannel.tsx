import { useAppSelector } from '../../../../hooks/redux'
import CreateChannelModal from './CreateChannelModal';
import AddContactsModal from './AddContactsModal'
import { Box } from '@mui/material';
import { styleModal } from '../../../../style/modal';
import { forwardRef } from 'react';

type Props = {
    onClose: () => void
}

const ModalLayoutChannel = forwardRef<HTMLDivElement, Props>(({ onClose }, _ref) => {
    const step = useAppSelector((state) => state.step.currentStepChannel)
    const renderModal = (step: number) => {
        switch (step) {
            case 1:
                return <CreateChannelModal onClose={onClose} />
            case 2:
                return <AddContactsModal />
            default:
                return null
        }
    }
    return (
        <Box sx={{ ...styleModal }} tabIndex={0}>
            {renderModal(step)}
        </Box>
    )
})

export default ModalLayoutChannel;