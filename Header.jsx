import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className='bg-white shadow-sm'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex items-center justify-between'>
        <Link to='/' className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-md bg-gradient-to-br from-primary to-blue-400 flex items-center justify-center text-white font-bold'>A</div>
          <div>
            <div className='text-lg header-brand'>Alden</div>
            <div className='text-xs text-gray-500'>Connect. Discover. Grow.</div>
          </div>
        </Link>
        <nav className='flex gap-4 items-center'>
          <Link to='/pricing' className='text-sm text-gray-700 hover:text-primary'>Pricing</Link>
          <Link to='/' className='text-sm text-gray-700 hover:text-primary'>Directory</Link>
          <a href='/admin' className='text-sm px-3 py-2 rounded-md border border-gray-100 bg-white text-gray-700 shadow-sm'>Admin</a>
        </nav>
      </div>
    </header>
  )
}
