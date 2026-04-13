import AutomationText from '@/components/AutomationText'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import HowWeWork from '@/components/HowWeWork'
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
      <Testimonials/>
      <Contact/>
    </>
  )
}

export default Home