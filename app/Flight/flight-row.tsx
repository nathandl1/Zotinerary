import Link from 'next/link'
import React from 'react'

export default function FlightRow({airline, date, departure, destination, time, link}) {
  return (
    <tr className='border-2 border-black'>
        <td className='border-2 border-black text-sm'>{airline}</td>
        <td className='border-2 border-black text-sm'>{date}</td>
        <td className='border-2 border-black text-sm'>{departure}</td>
        <td className='border-2 border-black text-sm'>{destination}</td>
        <td className='border-2 border-black text-sm'>{time}</td>
        <td><Link target='_blank' href={link} className='text-sm'>Link</Link></td>
    </tr>
  )
}
