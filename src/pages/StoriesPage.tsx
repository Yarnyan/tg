import React from 'react'
import StoriesBar from '../modules/storiesBar/StoriesBar'
import Calendar from '../modules/storiesCalendar/Calendar'
type Props = {}

export default function StoriesPage({}: Props) {
  return (
    <div className='flex w-full'>
        <StoriesBar />
        <Calendar />
    </div>
  )
}