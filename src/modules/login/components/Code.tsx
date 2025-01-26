import { useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useAppDispatch } from "../../../hooks/redux";
import { prevStep } from "../../../store/reducers/loginSlice";
type Props = {};

export default function Code({ }: Props) {
    const dispatch = useAppDispatch();
    const [inputValue, setInputValue] = useState<string>('');
    const isBlocked = inputValue.length === 0;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleBackClick = () => {
        dispatch(prevStep());
    };

    return (
        <div className='w-full h-[100dvh] flex pr-[76px]'>
            <div>
                <button className="flex mt-6" onClick={handleBackClick}>
                    <ArrowBackIosIcon className='h-[40px] w-[40px] text-[var(--callsBarCallNameColor)]' />
                    <p className="ml-[1px] text-[16px] font-medium text-[var(--callsBarCallNameColor)]">Back</p>
                </button>
            </div>
            <div className="flex flex-col items-center w-full h-[100dvh] justify-center">
                <img src="/image/Lock.png" alt="" className='' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[20px] font-bold text-[var(--callsBarCallNameColor)] mt-[12px]'>+000 00 000 00 00</h1>
                    <p className='text-[#8F8F8F] text-[14px] max-w-[340px] text-center mt-2'>A code has been sent to your phone.</p>
                    <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder='Code'
                    className='w-full h-[46px] rounded-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)] mt-4'
                />
                    <button className={`mt-[32px] w-[340px] py-[16px] rounded-[20px] ${isBlocked ? 'bg-[#251D49] text-[#583FC3]' : 'bg-[#6558E8] text-[#FFFFFF]'}`} disabled={isBlocked}>
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}