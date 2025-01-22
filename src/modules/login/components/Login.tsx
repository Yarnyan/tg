import { useState } from "react";
import { useAppDispatch } from "../../../hooks/redux";
import { nextStep } from "../../../store/reducers/loginSlice";
type Props = {};

export default function Login({ }: Props) {
    const [inputValue, setInputValue] = useState<string>('');
    const isBlocked = inputValue.length === 0;
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleContinueClick = () => {
        dispatch(nextStep());
    };

    return (
        <div className='w-full h-[100dvh] flex justify-center items-center flex-col pr-[11px]'>
            <img src="/image/Lock.png" alt="" className='' />
            <div className='flex flex-col items-center'>
                <h1 className='text-[20px] font-bold text-[var(--callsBarCallNameColor)] mt-[12px]'>Sign in to TeleClone</h1>
                <p className='text-[#8F8F8F] text-[14px] max-w-[340px] text-center mt-2'>Please provide your phone number with the correct country code to access your account</p>
                <input
                    type="text"
                    onChange={handleInputChange}
                    placeholder='Code'
                    className='w-full h-[46px] rounded-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)] mt-4'
                />
                <button className={`mt-[32px] w-full py-[16px] rounded-[20px] ${isBlocked ? 'bg-[#251D49] text-[#583FC3]' : 'bg-[#6558E8] text-[#FFFFFF]'}`} disabled={isBlocked} onClick={handleContinueClick}>
                    Continue
                </button>
            </div>
        </div>
    );
}