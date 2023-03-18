import Divider from '@/components/atoms/Divider'
import CategoryTopup from '@/components/organisms/CategoryTopup'
import FlashSale from '@/components/organisms/FlashSale'
import Hero from '@/components/organisms/Hero'

const Home = () => {
  return (
    <div className='container mx-auto'>
      <Hero />
      <CategoryTopup />
      <Divider className={'my-6'} />
      <FlashSale />
      {/* Recent Search */}
      {/* Banner Promo */}
    </div>
  )
}

export default Home
