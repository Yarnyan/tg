import { useAppDispatch, useAppSelector } from "../../../hooks/redux"; 
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RedeemOutlinedIcon from '@mui/icons-material/RedeemOutlined';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import PhoneLockedIcon from '@mui/icons-material/PhoneLocked';
import { useChangePhoneVisibleMutation, useChangeProfileVisibleMutation } from "../../../store/api/Privacy";
import { Switch } from '@mui/material';
import { setProfileVisible, setPhoneVisible } from '../../../store/reducers/profileSlice'; 
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { prevStep } from "../../../store/reducers/profileSlice";

type Props = {}

const EditProfileModal = ({ }: Props) => {
    const dispatch = useAppDispatch();
    const [changePhoneVisible] = useChangePhoneVisibleMutation();
    const [changeProfileVisible] = useChangeProfileVisibleMutation();

    const profileVisible = useAppSelector((state) => state.profile.profileVisible);
    const phoneVisible = useAppSelector((state) => state.profile.phoneVisible);

    const handleProfileVisibilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isVisible = event.target.checked;
        const formData = new FormData();
        formData.append('profileVisible', String(isVisible));
        changeProfileVisible(formData);

        dispatch(setProfileVisible(isVisible));
        localStorage.setItem('profileVisible', String(isVisible));
    };

    const handlePhoneVisibilityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const isVisible = event.target.checked;
        const formData = new FormData();
        formData.append('phoneVisible', String(isVisible));
        changePhoneVisible(formData);

        dispatch(setPhoneVisible(isVisible));
        localStorage.setItem('phoneVisible', String(isVisible));
    };

    return (
        <div className='w-full flex flex-col scrollbar-hidden'>
            <div className='p-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <button className="flex items-center" onClick={() => dispatch(prevStep())}>
                    <ArrowBackIosIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                    <p className="text-[16px] font-normal text-[var(--storiesBarMenuTextColor)] text-center">Edit</p>
                </button>
                <div className='mt-[16px] flex flex-col items-center'>
                    <img src="/image/1.jpg" alt="" className="w-[120px] h-[120px] rounded-full" />
                    <div className="flex justify-between items-center w-full">
                        <p className="text-[14px] font-normal text-[var(--callsBarCallNameColor)] mt-[16px]">Anna Forton</p>
                        <p className="text-[14px] font-medium text-[var(--callsBarCallDateColor)]">54</p>
                    </div>
                </div>
            </div>
            <div className='mt-[16px] p-[16px] w-full flex bg-[var(--activeTab)] justify-between items-center'>
                <div className="flex items-center">
                    <LocalPhoneOutlinedIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                    <div className="flex flex-col ml-[12px]">
                        <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Phone number</p>
                        <p className='text-[12px] font-medium text-[var(--callsBarCallDateColor)] mt-[4px]'>Editable only on mobile</p>
                    </div>
                </div>
                <div>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>+000 00 000 00 00</p>
                </div>
            </div>
            <div className='mt-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <div className='w-full p-[16px] flex justify-between items-center'>
                    <div className="flex items-center">
                        <img src="/icons/at.svg" alt="" className="w-[24px] h-[24px]" />
                        <div className="flex flex-col ml-[12px]">
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Username</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>@annasya</p>
                    </div>
                </div>
                <div className='w-full p-[16px] flex justify-between items-center'>
                    <div className="flex items-center">
                        <PersonOutlineOutlinedIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                        <div className="flex flex-col ml-[12px]">
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Name</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>Anna Forton</p>
                    </div>
                </div>
                <div className='w-full p-[16px] flex justify-between items-center'>
                    <div className="flex items-center">
                        <RedeemOutlinedIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                        <div className="flex flex-col ml-[12px]">
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Date of birth</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>12/12/2000</p>
                    </div>
                </div>
            </div>
            <div className='mt-[16px] w-full flex flex-col bg-[var(--activeTab)]'>
                <div className='w-full p-[16px] flex justify-between items-center'>
                    <div className="flex items-center">
                        <PrivacyTipIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                        <div className="flex flex-col ml-[12px]">
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Profile visibility</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Switch checked={profileVisible} onChange={handleProfileVisibilityChange} />
                    </div>
                </div>
                <div className='w-full p-[16px] flex justify-between items-center'>
                    <div className="flex items-center">
                        <PhoneLockedIcon sx={{ color: '#AEAEAE', width: '24px', height: '24px' }} />
                        <div className="flex flex-col ml-[12px]">
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Phone visibility</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Switch checked={phoneVisible} onChange={handlePhoneVisibilityChange} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProfileModal;