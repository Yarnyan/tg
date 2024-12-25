import { Box } from '@mui/material';
import { styleModal } from '../../../style/modal';
import { forwardRef } from 'react';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

type Props = {
    onClose: () => void;
}

const ImagesModal = forwardRef<HTMLDivElement, Props>(({ onClose }, _ref) => {
    return (
        <Box sx={{ ...styleModal }} tabIndex={0}>
            <div>
                <div className='flex items-center p-[16px] justify-end'>
                    <button onClick={() => onClose()}>
                        <CloseOutlinedIcon sx={{ color: '#FFFFFF', width: '24px', height: '24px' }} />
                    </button>
                </div>
            </div>
            <div>
                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px] mb-[14px]'>October</p>
            </div>
            <div className='px-[16px] pb-[16px] flex flex-wrap gap-2 justify-center'>
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
                <img src="/image/2.jpg" alt="" className='min-w-[80px] h-[80px] rounded-[20px] max-w-[60px]' />
            </div>
        </Box>
    );
});

export default ImagesModal;