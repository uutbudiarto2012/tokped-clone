import TextHeading from '@/components/atoms/TextHeading'
import CardFlashsale from '@/components/molecules/Cards/CardFlashsale'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, useState } from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import flashsaleDummy from '../../../dummy/flashsale.json'

const FlashSale = () => {
  const swiperRef = useRef(null)
  const [activeIndex, setActiveIndex] = useState(1)
  const handleChangeIndex = swiper => {
    setActiveIndex(swiper.activeIndex)
  }

  const ClassTimerItem = classNames({
    'bg-red-600 text-white rounded-md flex items-center justify-center h-8 w-8': true
  })

  const ClassBanner = classNames({
    'absolute rounded-xl duration-700 bg-green-500 left-0 top-0 bottom-0 w-[300px]': true,
    '-translate-x-[300px]': activeIndex > 1
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
      <div className='relative py-[4px] group my-8'>
        <div className={ClassBanner}>
          <Image
            src={'/images/banner/diskon-banner-1.png'}
            alt='diskon'
            className='pl-12 h-full w-full object-contain object-left'
            fill
          />
        </div>
        <Swiper
          ref={swiperRef}
          speed={500}
          initialSlide={0}
          spaceBetween={5}
          slidesPerView={6}
          slidesPerGroup={6}
          loopFillGroupWithBlank={true}
          onSlideChange={swiper => handleChangeIndex(swiper)}
          onSwiper={swiper => console.log(swiper)}
          className='my-4'
        >
          <SwiperSlide />
          {flashsaleDummy?.data.map(item => (
            <SwiperSlide key={item.id}>
              <CardFlashsale
                image={item.image}
                count={item.count}
                sold={item.sold}
                price={item.price}
                discount={item.discount}
              />
            </SwiperSlide>
          ))}
          <div
            className='absolute  flex items-center justify-center top-0 bottom-0 w-12 z-30 left-0'
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <button className='h-9 w-9 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-3xl duration-300 translate-x-6 flex justify-center shadow-md items-center bg-white rounded-full'>
              <MdChevronLeft />
            </button>
          </div>
          <div
            className='absolute  top-0 bottom-0 w-12 z-30 right-0 flex items-center justify-center'
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <button className='h-9 w-9 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-6 text-3xl shadow-md flex justify-center items-center bg-white rounded-full'>
              <MdChevronRight />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  )
}

export default FlashSale
