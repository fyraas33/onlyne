import Image from 'next/image'
import logo from '../public/img/logo.svg'
import Banner from '@/components/banner'
import Services from '@/components/services'
import Time from '@/components/time'

                

export default function Home() {
  return (

       <div>
        <Image src={logo} alt="onlyne" className='w-32 pb-20 ml-5' />
       <Banner/>
       <Services/>
       <Time/>
       </div>
    
      
 
  )
}
