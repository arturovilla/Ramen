import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <div className='pt-5'>
      <Navbar />
      <Component {...pageProps} />
    </div>
    )
}
