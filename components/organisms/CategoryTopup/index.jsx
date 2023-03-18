import Link from 'next/link'
import CategoryPopular from './CategoryPopular'
import SliderCategory from './SliderCategory'
import TopUp from './TopUp'

const CategoryTopup = () => {
  return (
    <div className='rounded-xl p-5 shadow'>
      <div className='grid gap-x-8 grid-cols-2'>
        <div>
          <div className='flex items-center'>
            <h2 className='text-lg font-bold text-gray-700'>
              Kategori Pilihan
            </h2>
          </div>
          <CategoryPopular />
        </div>
        <div>
          <div className='flex items-center gap-2'>
            <h2 className='text-lg font-bold text-gray-700'>
              Top Up & Tagihan
            </h2>
            <Link href={'/'} className='text-green-600 font-semibold'>
              Lihat Semua
            </Link>
          </div>
          <TopUp />
        </div>
      </div>
      <div>
        <SliderCategory />
      </div>
    </div>
  )
}

export default CategoryTopup
