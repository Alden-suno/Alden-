import React from 'react'

const tiers = [
  { id:'regular', name:'Regular', price:1560, bullets:['Basic listing','Map placement','5★ rating'] },
  { id:'pro', name:'Pro', price:3000, bullets:['Priority placement','Analytics','Contact leads'] },
  { id:'premium', name:'Premium', price:5000, bullets:['Featured','Verified badge','Priority support'] },
]

export default function Pricing(){
  const publicKey = process.env.REACT_APP_FLW_PUBLIC_KEY || ''
  const makeLink = (tier) => {
    // placeholder: use user-provided Flutterwave payment links or implement inline flow
    return `https://flutterwave.com/pay/REPLACE_WITH_${tier.toUpperCase()}`
  }
  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Pricing & Subscriptions</h2>
      <div className='grid md:grid-cols-3 gap-4'>
        {tiers.map(t => (
          <div key={t.id} className='card p-6'>
            <h3 className='text-xl font-semibold'>{t.name}</h3>
            <div className='text-3xl font-bold mt-2'>₦{t.price}</div>
            <ul className='mt-3 text-sm text-gray-600 space-y-1'>
              {t.bullets.map((b,i)=> <li key={i}>• {b}</li>)}
            </ul>
            <a className='inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md' href={makeLink(t.id)} target='_blank' rel='noreferrer'>Subscribe</a>
          </div>
        ))}
      </div>
    </div>
  )
}
