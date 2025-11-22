import React, { useState } from 'react'
import axios from 'axios'

export default function Admin(){
  const [msg, setMsg] = useState('')
  const [form, setForm] = useState({ name:'', email:'', phone:'', description:'', category:'', tier:'Regular', price:1560 })

  const save = async () => {
    setMsg('Saving...')
    try {
      # For production, swap this to your API endpoint: `${import.meta.env.VITE_API_URL}/api/admin/business`
      await axios.post('/api/admin/business', form, { headers: { 'x-admin-email': 'abdullateefabdulazeez84@gmail.com' } })
      setMsg('Saved.')
    } catch(e){
      setMsg('Error saving.')
    }
  }

  return (
    <div>
      <h2 className='text-2xl font-semibold mb-4'>Admin — Add Business</h2>
      <div className='card p-4'>
        <div className='grid gap-3'>
          <input placeholder='Name' value={form.name} onChange={e=>setForm({...form,name:e.target.value})} className='p-2 border rounded' />
          <input placeholder='Email' value={form.email} onChange={e=>setForm({...form,email:e.target.value})} className='p-2 border rounded' />
          <input placeholder='Phone' value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} className='p-2 border rounded' />
          <textarea placeholder='Description' value={form.description} onChange={e=>setForm({...form,description:e.target.value})} className='p-2 border rounded' />
          <div className='flex gap-2'>
            <select value={form.tier} onChange={e=>setForm({...form,tier:e.target.value})} className='p-2 border rounded'>
              <option>Regular</option><option>Pro</option><option>Premium</option>
            </select>
            <input type='number' value={form.price} onChange={e=>setForm({...form,price:parseInt(e.target.value||0)})} className='p-2 border rounded' />
          </div>
          <button onClick={save} className='bg-primary text-white px-4 py-2 rounded'>Save</button>
          <div className='text-sm text-gray-600 mt-2'>{msg}</div>
        </div>
      </div>
      <p className='text-xs text-gray-500 mt-3'>Admin demo page: real admin endpoints will be connected to your backend.</p>
    </div>
  )
}
