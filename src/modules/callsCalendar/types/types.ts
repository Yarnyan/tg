import dayjs from 'dayjs';

export interface ICall {
    date: dayjs.Dayjs;
    calls: number;
}