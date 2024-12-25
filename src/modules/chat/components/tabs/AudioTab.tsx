import { useAppDispatch } from '../../../../hooks/redux';
import { setInitialMoreTab } from '../../../../store/reducers/chatSlice';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Audio from './tabsComponents/Audio';
type Props = {}

export default function AutioTab({ }: Props) {
    const dispatch = useAppDispatch();
    return (
        <div className='w-full h-full flex flex-col bg-[var(--callsCalendarActiveDayColor)] overflow-y-scroll min-w-[350px]'>
            <div className='flex flex-col'>
                <div className='flex items-center p-[16px]'>
                    <button onClick={() => dispatch(setInitialMoreTab())}>
                        <ArrowBackIosOutlinedIcon sx={{color: '#FFFFFF', width: '16px', height: '16px'}}/>
                    </button>
                    <p className='text-[16px] font-normal text-[var(--callsBarCallNameColor)] ml-[14px]'>Audio files</p>
                </div>
                <div className='w-full overflow-y-scroll mt-[30px]'>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px] mb-[14px]'>October</p>
                    <div className='flex flex-col px-[16px] gap-4'>
                        <Audio />
                        <Audio />
                        <Audio />
                        <Audio />
                        <Audio />
                    </div>
                </div>
            </div>
        </div>
    )
}