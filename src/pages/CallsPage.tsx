import React from 'react'
import CallsBar from '../modules/callsBar/CallsBar'
import Calendar from '../modules/callsCalendar/Calendar'
type Props = {}

export default function CallsPage({}: Props) {
  return (
    <div className='flex w-full'>
      <CallsBar />
      <Calendar /> 
    </div>
  )
}