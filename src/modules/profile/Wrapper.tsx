import { useAppSelector } from "../../hooks/redux"
import ProfileModal from "./modal/ProfileModal"
import EditProfileModal from "./modal/EditProfileModal"
import { Box } from "@mui/material"
import { styleModal } from "../../style/modal"
type Props = {}

export default function Wrapper({ }: Props) {
    const step = useAppSelector((state) => state.profile.currentStep)
    const renderComponents = (step: number) => {
        switch (step) {
            case 1:
                return <ProfileModal />
            case 2:
                return <EditProfileModal />
        }
    }
    return (
        <Box sx={{ ...styleModal, backgroundColor: '#252525' }} tabIndex={0}>
            {renderComponents(step)}
        </Box>
    )
}