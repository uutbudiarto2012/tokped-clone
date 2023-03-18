import DefaultLayout from '@/components/layouts/DefaultLayout'
import '@/styles/globals.css'
import 'swiper/css';

export default function App({ Component, pageProps }) {
  return (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  )
}
