import Image from 'next/image'
import React from 'react'

const TabPln = () => {
  return (
    <div className='flex items-end gap-2 text-gray-600'>
      <div className='flex-1'>
        <span className='block mb-2 text-sm font-semibold'>
          Jenis Produk Pilihan
        </span>
        <div className='border px-2 h-10 rounded-lg flex'>
          <input
            placeholder='dropdown'
            type='tel'
            className='w-full text-xs outline-none'
          />
        </div>
      </div>
      <div className='flex-1'>
        <span className='block mb-2 text-sm font-semibold'>
          Nomor Meter/ID Pel
        </span>
        <div className='border h-10 px-2 rounded-lg flex items-center'>
          <input
            placeholder='08123456789'
            type='tel'
            className='w-full text-xs outline-none'
          />
        </div>
      </div>

      <div className='flex-1'>
        <span className='block mb-2 text-sm font-semibold'>Nominal</span>
        <div className='border px-2 h-10 rounded-lg flex'>
          <input
            placeholder='dropdown'
            type='tel'
            className='w-full text-xs outline-none'
          />
        </div>
      </div>
      <button className='px-6 flex items-center justify-center h-10 text-sm font-semibold rounded-lg bg-gray-200'>
        Bayar
      </button>
    </div>
  )
}

export default TabPln
