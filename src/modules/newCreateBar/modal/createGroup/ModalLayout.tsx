import { useAppSelector } from '../../../../hooks/redux'
import CreateGroupModal from './CreateGroupModal'
import AddContactsModal from './AddContactsModal'
import { Box } from '@mui/material';
import { styleModal } from '../../../../style/modal';
import { forwardRef } from 'react';

type Props = {
    onClose: () => void
}

const ModalLayout = forwardRef<HTMLDivElement, Props>(({ onClose }, _ref) => {
    const step = useAppSelector((state) => state.step.currentStep)
    const renderModal = (step: number) => {
        switch (step) {
            case 1:
                return <CreateGroupModal onClose={onClose} />
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

export default ModalLayout;