import TextHeading from '@/components/atoms/TextHeading'
import classNames from 'classnames'
import Link from 'next/link'

const FlashSale = () => {
  const ClassTimerItem = classNames({
    'bg-red-600 text-white rounded-md flex items-center justify-center h-8 w-8': true
  })
  return (
    <div className='overflow-hidden'>
      <div className={`flex items-end gap-2`}>
        <TextHeading font='h2' text={'Kejar Diskon Spesial'} />
        <span className='text-gray-500 text-md'>Berakhir dalam</span>
        <div className='flex items-center text-red-600 font-semibold gap-1'>
          <div className={ClassTimerItem}>00</div>
          <div>:</div>
          <div className={ClassTimerItem}>00</div>
          <div>:</div>
          <div className={ClassTimerItem}>00</div>
        </div>
        <Link href={'/'} className='text-lg font-semibold text-green-500'>
          Lihat Semua
        </Link>
      </div>
      <div className='my-4 flex items-center'>
        {/* <div className={ClassBanner}>
          <Image
            src={'/images/banner/diskon-banner-1.png'}
            alt='diskon'
            className='pl-4 h-full w-full object-contain object-left'
            fill
          />
        </div> */}
        <div>SWIPER</div>
      </div>
    </div>
  )
}

export default FlashSale
