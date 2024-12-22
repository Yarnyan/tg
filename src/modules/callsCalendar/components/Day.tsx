import React from 'react';
import { ICall } from '../types/types';
import dayjs from 'dayjs';

type Props = {
  date: ICall;
};

export default function Day({ date }: Props) {

  const day = dayjs(date.date).date();

  const currentDate = dayjs().date();

  return (
    <div className={`w-[125px] h-[172px] rounded-[20px] p-[16px] flex flex-col justify-between ${date.calls > 0 ? 'bg-[var(--callsCalendarActiveDayColor)]' : 'bg-[var(--callsCalendarDayColor)]'}`}>
      <div className='w-full h-full flex items-end flex-col'>
        <p className={`text-[14px] font-normal ${currentDate === day ? 'text-[var(--callsCalendarActiveCallTextColor)]' : 'text-[var(--callsCalendarCallTextColor)]'}`}>{day}</p>
        <p className='text-[var(--callsBarCallDateColor)] text-[14px] font-medium mt-[8px]'>{currentDate === day ? 'Today' : ''}</p>
      </div>
      {date.calls > 0 && (
        <div className={`w-full min-h-[54px] flex-col flex justify-center items-center rounded-[16px] ${currentDate === day ? 'bg-[var(--callsCalendarActiveCallColor)]' : 'bg-[var(--callsCalendarCallColor)]'}`}>
          <p className={`text-[16px] font-bold ${currentDate === day ? 'text-[var(--callsCalendarActiveCallTextColor)]' : 'text-[var(--callsCalendarCallTextColor)]'}`}>{date.calls}</p>
          <p className={`text-[14px] font-normal ${currentDate === day ? 'text-[var(--callsCalendarActiveCallTextColor)]' : 'text-[var(--callsCalendarCallTextColor)]'}`}>calls</p>
        </div>
      )}
    </div>
  );
}