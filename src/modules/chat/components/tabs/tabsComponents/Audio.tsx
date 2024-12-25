import PlayArrowOutlinedIcon from '@mui/icons-material/PlayArrowOutlined';
type Props = {}

export default function Audio({}: Props) {
  return (
    <div className='w-full flex items-center'>
        <div>
            <button className='bg-[var(--voiceMessageColor)] w-[40px] h-[40px] rounded-full flex items-center justify-center'>
                <PlayArrowOutlinedIcon sx={{color: '#FFFFFF', width: '16px', height: '16px'}}/>
            </button>
        </div>
        <div className='ml-[12px]'>
            <p className='text-[16px] font-medium text-[var(--callsBarCallNameColor)]'>Audio</p>
            <p className='text-[12px] font-normal text-[var(--callsBarCallDateColor)]'>Oct 16, 322.1 KB</p>
        </div>
    </div>
  )
}