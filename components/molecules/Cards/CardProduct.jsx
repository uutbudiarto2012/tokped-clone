import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const CardProduct = ({ data }) => {
  return (
    <div className='cursor-pointer group rounded-lg overflow-hidden shadow my-2'>
      <div className='aspect-square relative'>
        <Image
          src={data.image}
          alt='diskon'
          className='h-full w-full object-cover'
          fill
        />
      </div>
      <div className='p-2'>
        <p className='line-clamp-2 text-xs'>{data.name}</p>
        <div className='my-1'>
          <h2 className='text-md font-bold'>Rp 200000</h2>
          <div className='flex gap-1'>
            <div className='bg-red-200 text-[12px] py-0.5 px-1 rounded-md text-red-500 font-bold'>
              {data.discount}%
            </div>
            <span className='text-xs text-slate-500'>
              <del>Rp {data.price}</del>
            </span>
          </div>
        </div>
        <div>
          <div className='flex items-start h-5 gap-1 overflow-hidden'>
            <div className='h-5 w-5 relative flex items-center justify-center bg-white'>
              <Image
                fill
                alt='os'
                src={'/icons/os.svg'}
                className='object-contain'
              />
            </div>
            <div className='text-[12px] text-gray-600'>
              <div>
                <div className='group-hover:-translate-y-full duration-300'>
                  Nama Tokonya
                </div>
                <div className='group-hover:-translate-y-full duration-300'>
                  Dikirim Dari
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center text-xs gap-2 mt-3'>
          <div className='flex gap-1 items-center'>
            <FaStar className='text-orange-300' />
            <span>2.8</span>
          </div>
          <div>|</div>
          <div>Terjual 790+</div>
        </div>
      </div>
    </div>
  )
}

export default CardProduct
