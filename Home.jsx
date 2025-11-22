import React from 'react'
import { Link } from 'react-router-dom'

const sample = [
  { id:1, name:'Green Salon', desc:'Cuts & styling', rating:4.6, tier:'Premium', price:5000, logo:'' },
  { id:2, name:'QuickFix Plumbing', desc:'Plumbing services', rating:4.3, tier:'Pro', price:3000, logo:'' },
  { id:3, name:'TasteBite', desc:'Local food & delivery', rating:4.8, tier:'Regular', price:1560, logo:'' },
]

export default function Home(){
  return (
    <div>
      <section className='mb-8'>
        <div className='card p-6'>
          <h2 className='text-2xl font-semibold'>Find trusted local businesses</h2>
          <p className='text-gray-600 mt-2'>Search by category, location or rating — discover verified businesses near you.</p>
        </div>
      </section>

      <section>
        <h3 className='text-xl font-semibold mb-4'>Featured</h3>
        <div className='grid md:grid-cols-3 gap-4'>
          {sample.map(b => (
            <div key={b.id} className='card'>
              <div className='flex items-center gap-4'>
                <div className='w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center text-gray-500'>Logo</div>
                <div className='flex-1'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <h4 className='font-semibold'>{b.name} <span className='text-xs ml-2 px-2 py-1 bg-blue-50 text-blue-700 rounded-full'>Verified</span></h4>
                      <div className='text-sm text-gray-500'>{b.desc}</div>
                    </div>
                    <div className='text-right'>
                      <div className='text-sm font-semibold'>₦{b.price}</div>
                      <div className='text-xs text-gray-500'>{b.tier}</div>
                    </div>
                  </div>
                  <div className='mt-3 flex items-center justify-between'>
                    <div className='text-sm text-yellow-500 font-medium'>{'★'.repeat(Math.round(b.rating))} <span className='text-xs text-gray-600 ml-2'>{b.rating}</span></div>
                    <Link to={'/business/' + b.id} className='text-sm text-primary'>View profile</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
