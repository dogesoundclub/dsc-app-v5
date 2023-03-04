import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router';
import Layout from '../components/layout';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter(); 

  return (
    <Layout>
      <div className="relative h-[120px]">

        </div>
    </Layout>
  )
}
