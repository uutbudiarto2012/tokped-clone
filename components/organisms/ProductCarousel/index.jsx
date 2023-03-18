import TextHeading from '@/components/atoms/TextHeading'
import Link from 'next/link'

import { useRef } from 'react'

import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'

import productDummy from '../../../dummy/product.json'
import CardProduct from '../../molecules/Cards/CardProduct'

const ProductCarousel = ({ title, textUrl, url, data }) => {
  const swiperRef = useRef(null)
  return (
    <div>
      <div className={`flex items-end gap-2`}>
        <TextHeading font='h2' text={title} />
        <Link href={url} className='text-lg font-semibold text-green-500'>
          {textUrl}
        </Link>
      </div>
      <div>
        <Swiper
          ref={swiperRef}
          speed={500}
          initialSlide={0}
          spaceBetween={10}
          slidesPerView={6}
          slidesPerGroup={6}
          loopFillGroupWithBlank={true}
          onSwiper={swiper => console.log(swiper)}
          className='my-4 group'
        >
          {productDummy?.data.map(item => (
            <SwiperSlide key={item.id}>
              <CardProduct
                data={{
                  name: 'AQUA Cube 220ml x 24 botol (1 box) AQUA Cube 220ml x 24 botol (1 box)',
                  price: 200000,
                  image: '/images/products/5.png',
                  discount: 20,
                  seller: {
                    address: 'Kota tangerang selatan',
                    name: 'Tokoku jos',
                    level: 1
                  },
                  star: 4.8,
                  sold: 10000
                }}
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

export default ProductCarousel
