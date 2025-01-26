import { useAppDispatch } from "../../../hooks/redux";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import ShareIcon from '@mui/icons-material/Share';
import { nextStep } from "../../../store/reducers/profileSlice";
type Props = {

}


const ProfileModal = ({ }: Props) => {

    const dispatch = useAppDispatch();

    return (
        <div className='w-full flex flex-col scrollbar-hidden'>
            <div className='p-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <p className="text-[16px] font-normal text-[var(--storiesBarMenuTextColor)] text-center">Profile</p>
                <div className='mt-[16px] flex flex-col items-center'>
                    <img src="/image/1.jpg" alt="" className="w-[120px] h-[120px] rounded-full" />
                    <p className="text-[20px] font-semibold text-[var(--callsBarCallNameColor)] mt-[16px]">Anna Forton</p>
                    <p className="text-[14px] font-medium text-[var(--callsBarCallDateColor)]">Online</p>
                </div>
                <div className="flex items-center mt-[16px] justify-center gap-4">
                    <button className="w-[46px] h-[46px] rounded-full bg-[var(--createModalHoverColorButton)] flex items-center justify-center" onClick={() => dispatch(nextStep())}>
                        <AutoFixHighIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                    </button>
                    <button className="w-[46px] h-[46px] rounded-full bg-[var(--createModalHoverColorButton)] flex items-center justify-center">
                        <ShareIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                    </button>
                </div>
            </div>
            <div className='mt-[16px] p-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <div className='flex flex-col'>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>+000 00  000 00 00</p>
                    <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Mobile</p>
                </div>
                <div className='mt-[8px] flex flex-col'>
                    <p className='text-[14px] font-medium text-[var(--pinnedMessageTextColor)]'>@mariua</p>
                    <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Username</p>
                </div>
                <div className='mt-[8px] flex flex-col'>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>UI & Ux designer</p>
                    <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Bio</p>
                </div>
            </div>
            <div className='mt-[16px] p-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <div className='mt-[8px] flex flex-col'>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Text</p>
                    <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Date of birth</p>
                </div>
            </div>
            {/* <div className='mt-[16px] p-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <div className='mt-[8px] flex flex-col'>
                    <p className='text-[14px] font-medium text-[#F8717C]'>Closed</p>
                    <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Business hours</p>
                </div>
            </div> */}
        </div>
    );
}

export default ProfileModal;