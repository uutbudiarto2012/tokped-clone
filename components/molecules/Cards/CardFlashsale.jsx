import Image from 'next/image'

const CardFlashsale = ({
  image = '/images/products/1.png',
  count = 100,
  sold = 50,
  price = 100000,
  discount = 50
}) => {
  return (
    <div className='rounded-lg overflow-hidden shadow-md my-2 mx-1 bg-white'>
      <div className='aspect-square relative'>
        <Image fill src={image} alt='product' className='object-cover' />
      </div>
      <div className='p-3'>
        <div>
          <h2 className='font-bold text-gray-800'>
            Rp {price * (discount / 100)}
          </h2>
          <div className='flex mt-2 gap-1'>
            <div className='bg-red-200 text-[12px] py-0.5 px-1 rounded-md text-red-500 font-bold'>
              {discount}%
            </div>
            <span className='text-xs text-slate-500'>
              <del>
                <i>Rp {price}</i>
              </del>
            </span>
          </div>
        </div>
        <div className='mt-3'>
          <div className='h-1 overflow-hidden rounded-md bg-gray-100'>
            <div
              className='h-1 block bg-red-500'
              style={{
                width: `${(sold / count) * 100}%`
              }}
            />
          </div>
          <span className='text-xs font-semibold text-gray-500'>
            <>{count > sold ? 'Tersedia' : 'Habis'}</>
          </span>
        </div>
      </div>
    </div>
  )
}

export default CardFlashsale
