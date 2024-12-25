import { useState } from 'react'
import CreateBar from "../modules/newCreateBar/Create"
import { Modal } from '@mui/material'
import ModalLayout from '../modules/newCreateBar/modal/createGroup/ModalLayout'
import ModalLayoutChannel from '../modules/newCreateBar/modal/createChannel/ModalLayoutChannel'
import ModalLayoutTeam from '../modules/newCreateBar/modal/createTeam/ModalLayoutTeam'
type Props = {}

export default function NewCreatePage({ }: Props) {
    const [open, setOpen] = useState(false);
    const [channelOpen, setChannelOpen] = useState(false);
    const [teamOpen, setTeamOpen] = useState(false);
    return (
        <div className='flex w-full'>
            <CreateBar onOpen={() => setOpen(true)} onChannelOpen={() => setChannelOpen(true)} onTeamOpen={() => setTeamOpen(true)} />
            <div className='w-full h-[100dvh] flex justify-center items-center flex flex-col'>
                <img src="/image/Add.png" alt="" />
                <p className='text-[var(--homeText)] text-[14px] font-medium text-center mt-[12px]'>You can create a group or a channel, invite your users, or start a <br /> chat to communicate with them</p>
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <ModalLayout onClose={() => setOpen(false)} />
            </Modal>
            <Modal
                open={channelOpen}
                onClose={() => setChannelOpen(false)}
            >
                <ModalLayoutChannel onClose={() => setChannelOpen(false)} />
            </Modal>
            <Modal
                open={teamOpen}
                onClose={() => setTeamOpen(false)}
            >
                <ModalLayoutTeam onClose={() => setTeamOpen(false)} />
            </Modal>
        </div>
    )
}