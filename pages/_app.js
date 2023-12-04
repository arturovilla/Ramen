import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import localFont from 'next/font/local'

const lithos = localFont({
	src: "..//public/fonts/Lithos-Bold.ttf",
	variable: "--font-lithos-bold",
});

export default function App({ Component, pageProps }) {
  return (
    <main className={`${lithos.variable}`}>
      <div className='pt-5'>
        <Navbar />
        <Component {...pageProps} />
      </div>
    </main>
  )
}
