
import { Box } from "@mui/material"
import { styleEditModal } from "../../../style/editModal"

type Props = {
    onClose: () => void;
 
}

export default function EditUsernameModal({onClose}: Props) {

    return (
        <Box sx={{ ...styleEditModal, backgroundColor: '#252525' }} tabIndex={0}>
            <div className="p-[16px] w-full h-full">
                <p className="text-[16px] font-normal text-[var(--callsBarCallNameColor)]">Edit username</p>
                <div className="flex flex-col w-full mt-[8px]">
                    <p className="text-[14px] font-medium text-[var(--callsBarCallDateColor)]">Username</p>
                    <input type="text" placeholder="First name..." className="mt-[8px] h-[46px] w-full rounded-[20px] p-[16px] bg-[var(--chatsBarItemColor)] text-[var(--callsBarCallNameColor)]"/>
                    <p className="text-[14px] font-medium text-[var(--callsBarCallDateColor)] mt-[8px]">You can use a-z, 0-9 and underscores. Minimum length is 6 characters. </p>
                </div>
                <div className="mt-[20px] flex w-full justify-end">
                    <button className="text-[var(--callsBarCallNameColor)] px-[16px] py-[8px] rounded-[20px]" onClick={onClose}>Cancel</button>
                    <button className="ml-[8px] bg-[var(--createModalHoverColorButton)] text-[var(--callsBarCallNameColor)] px-[16px] py-[8px] rounded-[20px]">Save</button>
                </div>
            </div>
        </Box>  
    )
}