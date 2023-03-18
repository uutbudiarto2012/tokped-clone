import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

const ItemSlider = ({ url, image }) => {
  return (
    <Link
      href={url}
      className='block rounded-lg overflow-hidden border relative aspect-square'
    >
      <Image
        className='object-cover w-full h-full'
        alt='image'
        src={image}
        fill
      />
    </Link>
  )
}
const CategoryPopular = () => {
  const swiperRef = React.useRef(null)
  return (
    <div>
      <div className='relative my-5 group'>
        <Swiper
          loop={true}
          ref={swiperRef}
          autoplay={true}
          speed={500}
          slidesPerView={4}
          slidesPerGroupSkip={4}
          spaceBetween={20}
        >
          <SwiperSlide>
            <ItemSlider url={'/'} image='/images/category/1.png' />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlider url={'/'} image='/images/category/2.png' />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlider url={'/'} image='/images/category/3.png' />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlider url={'/'} image='/images/category/4.png' />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlider url={'/'} image='/images/category/6.png' />
          </SwiperSlide>
          <SwiperSlide>
            <ItemSlider url={'/'} image='/images/category/7.png' />
          </SwiperSlide>
        </Swiper>
        <div
          className='absolute flex items-center justify-center top-0 bottom-0 w-12 z-40 -left-6'
          onClick={() => swiperRef.current.swiper.slidePrev()}
        >
          <button className='h-8 w-8 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 text-2xl duration-300 translate-x-12 flex justify-center shadow-md items-center bg-white rounded-full'>
            <MdChevronLeft />
          </button>
        </div>
        <div
          className='absolute top-0 bottom-0 w-12 z-40 -right-6 flex items-center justify-center'
          onClick={() => swiperRef.current.swiper.slideNext()}
        >
          <button className='h-8 w-8 duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-12 text-2xl shadow-md flex justify-center items-center bg-white rounded-full'>
            <MdChevronRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CategoryPopular
