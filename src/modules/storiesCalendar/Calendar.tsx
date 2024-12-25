import { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import dayjs from 'dayjs';
import Day from './components/Day';
import { ICall } from './types/types';

type Props = {}

export default function Calendar({ }: Props) {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [daysArray, setDaysArray] = useState<ICall[]>([]);

    const prevMonth = () => {
        setCurrentDate(currentDate.subtract(1, 'month'));
    };

    const nextMonth = () => {
        setCurrentDate(currentDate.add(1, 'month'));
    };

    const daysOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    useEffect(() => {
        const startOfMonth = currentDate.startOf('month');
        const endOfMonth = currentDate.endOf('month');
        const daysInMonth = endOfMonth.date();

        const newDaysArray = Array.from({ length: daysInMonth }, (_, index) => {
            const day = startOfMonth.date(index + 1);
            return {
                date: day,
                calls: Math.floor(Math.random() * 10)
            };
        });

        setDaysArray([...newDaysArray]);
    }, [currentDate]);

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='max-w-[962px]'>
                <div className='p-[14px] '>
                    <div className='w-full flex justify-center items-center'>
                        <button onClick={nextMonth}>
                            <KeyboardArrowUpIcon sx={{ color: 'var(--callsCalendarDateColor)' }} />
                        </button>
                        <p className='mx-4 text-[var(--callsCalendarDateColor)] text-[20px] font-normal'>
                            {currentDate.format('MMMM, YYYY')}
                        </p>
                        <button onClick={prevMonth}>
                            <KeyboardArrowDownIcon sx={{ color: 'var(--callsCalendarDateColor)' }} />
                        </button>
                    </div>
                    <div className='mt-[8px] w-full flex justify-between items-center'>
                        {daysOfWeek.map((day, index) => (
                            <div key={index} className='text-center max-w-[123px] w-full'>
                                <p className='text-[16px] font-normal text-[var(--callsCalendarDateColor)]'>{day}</p>
                            </div>
                        ))}
                    </div>
                    <div className='mt-[8px] w-full flex-wrap flex gap-[8px]'>
                        {daysArray.map((day, index) => (
                            <Day key={index} date={day} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}