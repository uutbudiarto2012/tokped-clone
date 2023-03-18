import Image from 'next/image'
import Link from 'next/link'
import { BiChevronDown, BiMap } from 'react-icons/bi'
import { FaMobileAlt, FaSearch } from 'react-icons/fa'
import { MdEmail, MdNotifications, MdShoppingCart } from 'react-icons/md'
const Navbar = () => {
  return (
    <div className='shadow-md sticky bg-white top-0 z-40'>
      <div className='px-8 h-[30px] text-slate-600 flex items-center justify-between bg-gray-100'>
        <div>
          <button className='flex gap-1 items-center'>
            <FaMobileAlt />
            <span className='text-xs font-light hover:text-green-500 duration-300'>
              Download Tokopedia App
            </span>
          </button>
        </div>
        <div className='flex gap-x-3'>
          <Link
            className='hover:text-green-500 text-xs duration-300'
            href={'/'}
          >
            Tentang Tokopedia
          </Link>
          <Link
            className='hover:text-green-500 text-xs duration-300'
            href={'/'}
          >
            Mitra Tokopedia
          </Link>
          <Link
            className='hover:text-green-500 text-xs duration-300'
            href={'/'}
          >
            Pusat Edukasi Seller
          </Link>
          <Link
            className='hover:text-green-500 text-xs duration-300'
            href={'/'}
          >
            Promo
          </Link>
          <Link
            className='hover:text-green-500 text-xs duration-300'
            href={'/'}
          >
            Tokopedia Care
          </Link>
        </div>
      </div>
      <div className='flex gap-x-6 h-[80px] items-start px-8'>
        <div className='w-[240px] flex gap-4 justify-between items-center'>
          <Link href={'/'}>
            <div className='w-36 h-12 relative'>
              <Image
                className='w-full h-full object-contain'
                src={'/images/logo-text.png'}
                alt='logo'
                fill
              />
            </div>
          </Link>
          <div>
            <button className='py-2 px-3 text-gray-500 hover:bg-gray-50 hover:text-green-500 duration-300 text-sm'>
              Kategori
            </button>
          </div>
        </div>
        <div className='flex-1 h-full flex flex-col justify-center'>
          <div className='w-full'>
            <div className='px-3 py-1.5 border focus-within:border-green-500 duration-300 flex gap-2 items-center rounded-xl'>
              <FaSearch className='text-slate-500' />
              <input
                type='text'
                placeholder='Cari di tokopedia'
                className='outline-none text-sm bg-transparent w-full'
              />
            </div>
          </div>
          <div className='text-xs text-gray-500 flex items-center mt-2 gap-x-4'>
            <Link
              className='hover:text-green-500 text-xs duration-300'
              href={'/'}
            >
              Baju Muslim
            </Link>
            <Link
              className='hover:text-green-500 text-xs duration-300'
              href={'/'}
            >
              Baju Wanita
            </Link>
            <Link
              className='hover:text-green-500 text-xs duration-300'
              href={'/'}
            >
              Elektronik
            </Link>
            <Link
              className='hover:text-green-500 text-xs duration-300'
              href={'/'}
            >
              Travel
            </Link>
            <Link
              className='hover:text-green-500 text-xs duration-300'
              href={'/'}
            >
              Iphone second
            </Link>
          </div>
        </div>
        <div className='w-[420px] h-full flex flex-col justify-center'>
          <div className='flex gap-x-3 items-center'>
            <div className='flex items-center gap-x-8'>
              <button className='relative mt-2'>
                <div className='absolute left-2 -top-3 bg-red-500 w-full rounded-full border-2 border-slate-100 font-semibold text-white text-[10px]'>
                  9
                </div>
                <MdShoppingCart className='text-xl text-gray-500' />
              </button>
              <button className='relative mt-2'>
                <div className='absolute left-2 -top-3 bg-red-500 w-full rounded-full border-2 border-slate-100 font-semibold text-white text-[10px]'>
                  9
                </div>
                <MdNotifications className='text-xl text-gray-500' />
              </button>
              <button className='relative mt-2'>
                <div className='absolute left-2 -top-3 bg-red-500 w-full rounded-full border-2 border-slate-100 font-semibold text-white text-[10px]'>
                  9
                </div>
                <MdEmail className='text-xl text-gray-500' />
              </button>
            </div>
            <div className='flex gap-x-4 justify-end items-center flex-1'>
              <div className='h-6 w-[1px] bg-gray-500' />
              <button className='flex items-center gap-2 p-1.5 hover:bg-gray-100 hover:text-green-500 duration-300'>
                <div className='h-7 w-7 relative overflow-hidden rounded-full flex items-center justify-center bg-slate-400'>
                  <Image
                    fill
                    src='/images/store.png'
                    className='w-full h-full object-cover'
                    alt='image'
                  />
                </div>
                <span className='text-xs'>fvsejahtera</span>
              </button>
              <button className='flex items-center gap-2 p-1.5 hover:bg-gray-100 hover:text-green-500 duration-300'>
                <div className='h-7 w-7 relative overflow-hidden rounded-full flex items-center justify-center bg-slate-400'>
                  <Image
                    fill
                    src='/images/user.png'
                    className='w-full h-full object-cover'
                    alt='image'
                  />
                </div>
                <span className='text-xs'>iliana vero</span>
              </button>
            </div>
          </div>
          <div className='flex justify-end mt-2'>
            <button className='text-slate-500 text-sm flex items-center gap-1'>
              <BiMap />
              <span>Dikirim</span>
              <span className='font-semibold text-gray-800'>Rumah Liana</span>
              <BiChevronDown />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
