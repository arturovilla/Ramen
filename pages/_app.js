import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import localFont from 'next/font/local'
import { Roboto_Flex } from 'next/font/google'

const lithos = localFont({
	src: "..//public/fonts/Lithos-Bold.ttf",
	variable: "--font-lithos-bold",
});
const robotoFlex = Roboto_Flex({
  subsets: ['latin'],
  variable: '--font-roboto-flex',
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${lithos.variable},${robotoFlex.variable}`}>
      <div className='pt-5'>
        <Navbar />
      </div>
      <Component {...pageProps} />
      <div className='pt-5'>
        <Footer/>
      </div>
    </main>
  )
}
