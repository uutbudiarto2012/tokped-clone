import Divider from '@/components/atoms/Divider'
import CategoryTopup from '@/components/organisms/CategoryTopup'
import FlashSale from '@/components/organisms/FlashSale'
import Hero from '@/components/organisms/Hero'
import ProductCarousel from '@/components/organisms/ProductCarousel'

const Home = () => {
  return (
    <div className='max-w-7xl px-10 w-full mx-auto'>
      <Hero />
      <CategoryTopup />
      <Divider className={'my-6'} />
      <FlashSale />
      <Divider className={'my-6'} />
      <ProductCarousel
        title='Berdasarkan pencarianmu'
        textUrl='Lihat Semua'
        url='/'
      />
      {/* Banner Promo */}
    </div>
  )
}

export default Home
