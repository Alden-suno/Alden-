import React from 'react'
import { useParams } from 'react-router-dom'

export default function Business(){
  const { id } = useParams()
  return (
    <div className='card'>
      <h2 className='text-xl font-semibold'>Business Profile (ID: {id})</h2>
      <p className='text-gray-600 mt-2'>This page will show business details, map, reviews, contact buttons, and subscription status.</p>
    </div>
  )
}
