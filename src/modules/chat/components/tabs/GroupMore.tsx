import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import Switch from '@mui/material/Switch';
import { useAppDispatch } from '../../../../hooks/redux';
import SettingsIcon from '@mui/icons-material/Settings';
import Members from './tabsComponents/Members';
import { setMoreTab } from '../../../../store/reducers/chatSlice';
type Props = {

}

export default function GroupMore({ }: Props) {
    const dispatch = useAppDispatch();
    return (
        <div className='w-full h-full flex flex-col bg-[var(--callsCalendarActiveDayColor)] overflow-y-scroll'>
            <div className='flex flex-col'>
                <div className='flex flex-col items-center justify-center bg-[var(--activeTab)]'>
                    <div className='flex flex-col items-center px-[16px] pt-[80px]'>
                        <img src="/image/1.jpg" alt="" className='w-[120px] h-[120px] rounded-full' />
                        <p className='text-[20px] font-semibold text-[var(--callsBarCallNameColor)] mt-[8px]'>Interface</p>
                        <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>3 members</p>
                    </div>
                    <div className='mt-[24px] w-full justify-between flex items-center px-[16px] pb-[16px]'>
                        <div className='flex items-center'>
                            <NotificationsNoneOutlinedIcon sx={{ color: 'var(--iconsColor)', width: '24px', height: '24px' }} />
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px]'>Notifications</p>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-[var(--activeTab)] mt-2'>
                    <div className='w-full justify-between flex items-center px-[16px] pb-[16px]'>
                        <div className='flex items-center'>
                            <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Accept direct messages</p>
                        </div>
                        <div>
                            <Switch />
                        </div>
                    </div>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)] px-[16px] pb-[16px]'>Members can message you directly, but they will not see your phone number</p>
                </div>
                <div className='flex flex-col items-center justify-center bg-[var(--activeTab)] mt-2'>
                    <div className='w-full justify-between flex items-center px-[16px]'>
                        <button className='flex items-center py-[16px]' onClick={() => dispatch(setMoreTab(0))}>
                            <div>
                                <SettingsIcon sx={{ color: 'var(--iconsColor)', width: '24px', height: '24px' }} />
                            </div>
                            <div className='flex items-center ml-[14px]'>
                                <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)]'>Manage group</p>
                            </div>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center bg-[var(--activeTab)] mt-2'>
                    <div className='w-full px-[16px] py-[16px]'>
                        <p className='text-[14px] font-medium text-[var(--callsBarCallDateColor)]'>Members</p>
                        <div className='flex flex-col gap-4 mt-[8px]'>
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                            <Members />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}