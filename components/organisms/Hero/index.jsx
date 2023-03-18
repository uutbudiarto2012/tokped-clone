import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { Pagination, Autoplay } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const Hero = () => {
  const swiperRef = React.useRef(null)

  return (
    <div className='py-5'>
      <div className='relative group'>
        <Swiper
          loop={true}
          ref={swiperRef}
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          speed={1000}
          slidesPerView={1}
          className='h-[40vh] bg-slate-100 rounded-xl overflow-hidden'
        >
          <SwiperSlide>
            <div>
              <Link href={'/'}>
                <Image
                  src='/images/banner/1.png'
                  className='w-full h-full object-cover'
                  fill
                  alt='hero'
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href={'/'}>
                <Image
                  src='/images/banner/2.png'
                  className='w-full h-full object-cover'
                  fill
                  alt='hero'
                />
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Link href={'/'}>
                <Image
                  src='/images/banner/3.png'
                  className='w-full h-full object-cover'
                  fill
                  alt='hero'
                />
              </Link>
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className='absolute flex items-center justify-center top-0 bottom-0 w-12 z-30 -left-6'
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <button className='h-9 w-9 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-3xl duration-300 translate-x-12 flex justify-center shadow-md items-center bg-white rounded-full'>
            <MdChevronLeft />
          </button>
        </div>
        <div
          className='absolute top-0 bottom-0 w-12 z-30 -right-6 flex items-center justify-center'
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <button className='h-9 w-9 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-12 text-3xl shadow-md flex justify-center items-center bg-white rounded-full'>
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
