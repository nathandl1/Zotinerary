import Link from 'next/link'
import React from 'react'

export default function FlightRow({airline, date, departure, destination, time, link}) {
  return (
    <tr className='border-2 border-black'>
        <td className='border-2 border-black'>{airline}</td>
        <td className='border-2 border-black'>{date}</td>
        <td className='border-2 border-black'>{departure}</td>
        <td className='border-2 border-black'>{destination}</td>
        <td className='border-2 border-black'>{time}</td>
        <td><Link target='_blank' href={link}>Link</Link></td>
    </tr>
  )
}
