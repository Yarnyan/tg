import { useAppDispatch } from '../../../../hooks/redux';
import { setInitialMoreTab } from '../../../../store/reducers/chatSlice';
import ArrowBackIosOutlinedIcon from '@mui/icons-material/ArrowBackIosOutlined';
import Gifs from './tabsComponents/Gifs';
type Props = {}

export default function GifsTab({ }: Props) {
    const dispatch = useAppDispatch();
    return (
        <div className='w-full h-full flex flex-col bg-[var(--callsCalendarActiveDayColor)] overflow-y-scroll min-w-[350px]'>
            <div className='flex flex-col'>
                <div className='flex items-center p-[16px]'>
                    <button onClick={() => dispatch(setInitialMoreTab())}>
                        <ArrowBackIosOutlinedIcon sx={{color: '#FFFFFF', width: '16px', height: '16px'}}/>
                    </button>
                    <p className='text-[16px] font-normal text-[var(--callsBarCallNameColor)] ml-[14px]'>Gifs</p>
                </div>
                <div className='w-full overflow-y-scroll mt-[30px]'>
                    <p className='text-[14px] font-medium text-[var(--callsBarCallNameColor)] ml-[14px] mb-[14px]'>October</p>
                    <div className='flex flex-col px-[16px] gap-4'>
                        <Gifs />
                        <Gifs />
                        <Gifs />
                        <Gifs />
                        <Gifs />
                    </div>
                </div>
            </div>
        </div>
    )
}