import AutomationText from '@/components/AutomationText'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import HowWeWork from '@/components/HowWeWork'
import Numbers from '@/components/Numbers'
import Services from '@/components/Services'
import AppProcessCards from '@/components/Technologies'
import Testimonials from '@/components/Testmonials'

const Home = () => {
  return (
    <>
      <Hero/>
      <AutomationText/>
      <Services/>
      <HowWeWork/>
      <AppProcessCards/>
      <Numbers/>
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default Home