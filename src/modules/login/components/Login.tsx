    import { useState } from "react";
    import { useAppDispatch } from "../../../hooks/redux";
    import { nextStep } from "../../../store/reducers/loginSlice";
    import { useForm } from "react-hook-form";
    import { useLoginMutation } from "../../../store/api/Auth";
    import { useNavigate, Link } from "react-router-dom";

    type Props = {};

    export default function Login({ }: Props) {
        const dispatch = useAppDispatch();
        const { register, handleSubmit, formState: { errors } } = useForm();
        const [errorMessage, setErrorMessage] = useState<string>('');
        const navigate = useNavigate();
        const [login] = useLoginMutation();

        const onSubmit = async (data: any) => {
            const body = {
                phone: String(data.phoneNumber),
            }
            try {
                const res = await login(body);
                if (res.error) {
                    setErrorMessage(res.error.data?.message);
                } else {
                    localStorage.setItem('token', res.data.data.token);
                    localStorage.setItem('refreshToken', res.data.data.refreshToken);
                    localStorage.setItem('userId', res.data.data.userId);
                    navigate('/');
                    localStorage.setItem('activeTab', 'Chats');
                    // dispatch(nextStep());
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        return (
            <div className='w-full h-[100dvh] flex justify-center items-center flex-col pr-[11px]'>
                <img src="/image/Lock.png" alt="" className='' />
                <div className='flex flex-col items-center'>
                    <h1 className='text-[20px] font-bold text-[var(--callsBarCallNameColor)] mt-[12px]'>Sign in to TeleClonefdsfs</h1>
                    <p className='text-[#8F8F8F] text-[14px] max-w-[340px] text-center mt-2'>Please provide your phone number with the correct country code to access your account</p>
                    
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col items-center'>
                        <input
                            type="text"
                            {...register("phoneNumber", { required: true })}
                            placeholder='+0 000 000 00 00'
                            className='w-[340px] h-[46px] rounded-[20px] bg-[var(--chatsBarItemColor)] pl-[16px] no-outline text-[var(--chatsBarTextColor)] mt-4'
                        />
                        {errors.phoneNumber && <span className='text-red-500'>Phone number is required</span>}
                        
                        <button 
                            type="submit" 
                            className={`mt-[32px] w-full py-[16px] rounded-[20px] ${!errors.phoneNumber ? 'bg-[#6558E8] text-[#FFFFFF]' : 'bg-[#251D49] text-[#583FC3]'}`} 
                            disabled={!!errors.phoneNumber}
                        >
                            Continue
                        </button>
                        <p className="text-center text-[#f8717c] mt-2">{errorMessage}</p>
                        <p className="text-[#8F8F8F] text-[14px] max-w-[340px] text-center">Don't have an account? <Link to="/reg" className="text-[#6558E8]">Sign up</Link></p>
                    </form>
                </div>
            </div>
        );
    }