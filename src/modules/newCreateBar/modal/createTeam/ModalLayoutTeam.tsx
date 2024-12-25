import { useAppSelector } from '../../../../hooks/redux'
import CreateTeamModal from './CreateTeam';
import { Box } from '@mui/material';
import { styleModal } from '../../../../style/modal';
import { forwardRef } from 'react';

type Props = {
    onClose: () => void
}

const ModalLayoutTeam = forwardRef<HTMLDivElement, Props>(({ onClose }, _ref) => {
    const step = useAppSelector((state) => state.step.currentStepTeam)
    const renderModal = (step: number) => {
        switch (step) {
            case 1:
                return <CreateTeamModal onClose={onClose} />
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

export default ModalLayoutTeam;