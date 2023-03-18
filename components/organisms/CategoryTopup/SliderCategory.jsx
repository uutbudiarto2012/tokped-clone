import Image from 'next/image'

const CtgItem = ({ icon, title }) => {
  return (
    <button className='flex flex-1 min-w-sm w-full  items-center gap-2 border px-4 rounded-2xl h-10'>
      <div className='h-6 w-6 relative'>
        <Image src={icon} fill alt='icon' className='object-contain' />
      </div>
      <div className='text-gray-500 font-light text-xs truncate'>{title}</div>
    </button>
  )
}
const SliderCategory = () => {
  return (
    <div className='flex gap-4 no-scroll overflow-auto'>
      <CtgItem url='/' icon='/icons/category.svg' title='Kategori' />
      <CtgItem url='/' icon='/icons/handphone.svg' title='Handphone & Tablet' />
      <CtgItem url='/' icon='/icons/tagihan.svg' title='Top-Up & Tagihan' />
      <CtgItem
        url='/'
        icon='/icons/travel.svg'
        title='Travel & Entertainment'
      />
      <CtgItem
        url='/'
        icon='/icons/perawatan-hewan.svg'
        title='Perawatan Hewan'
      />
      <CtgItem url='/' icon='/icons/keuangan.svg' title='Keuangan' />
      <CtgItem url='/' icon='/icons/komputer.svg' title='Komputer & Laptop' />
    </div>
  )
}

export default SliderCategory
