import { Inter } from 'next/font/google'
import About from '@/components/About';

const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <div className="">
			<div className=" mt-32 md:mt-64">
				<About />
			</div>
		</div>
  )
}
