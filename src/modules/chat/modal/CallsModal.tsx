import { Box } from '@mui/material';
import { styleModal } from '../../../style/modal';
import { forwardRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import CropSquareIcon from '@mui/icons-material/CropSquare';
import RemoveIcon from '@mui/icons-material/Remove';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';

type Props = {
    onClose: () => void;
}

const CallsModal = forwardRef<HTMLDivElement, Props>(({ onClose }, _ref) => {
    return (
        <Box sx={{ ...styleModal, width: '1021px', maxWidth: 'unset', height: '713px', borderRadius: '0px' }} tabIndex={0}>
            <div className='bg-[var(--callsModalHeaderColor)] w-full h-[32px] flex items-center justify-end gap-4 px-[12px]'>
                <button>
                    <RemoveIcon sx={{ color: '#FFFFFF', width: '16px', height: '16px' }} />
                </button>
                <button>
                    <CropSquareIcon sx={{ color: '#FFFFFF', width: '16px', height: '16px' }} />
                </button>
                <button>
                    <CloseIcon sx={{ color: '#FFFFFF', width: '16px', height: '16px' }} onClick={() => { onClose() }} />
                </button>
            </div>
            <div className='w-full flex items-center justify-center flex-col' style={{ height: '650px' }}>
                <div className='flex flex-col items-center justify-end h-full'>
                    <img src="/image/1.jpg" alt="" className='w-[140px] h-[140px] rounded-full' />
                    <p className='text-[20px] font-normal text-[var(--callsBarCallNameColor)] text-center mt-[16px]'>John Doe</p>
                    <p className='text-[14px] font-normal text-[var(--callsBarCallDateColor)] text-center max-w-[264px]'>Click on the Camera icon if you want to start a video call</p>
                    <div className='flex items-center mt-[136px] gap-6 mb-[64px]'>
                        <button className='bg-[#6558E8] w-[48px] h-[48px] rounded-full flex items-center justify-center'>
                            <VideocamOutlinedIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
                        </button>
                        <button className='bg-[#303031] w-[48px] h-[48px] rounded-full flex items-center justify-center' onClick={() => { onClose() }}>
                            <CloseIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
                        </button>
                        <button className='bg-[#6558E8] w-[48px] h-[48px] rounded-full flex items-center justify-center'>
                            <CallOutlinedIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
                        </button>
                    </div>
                </div>
            </div>
        </Box>
    );
});

export default CallsModal;