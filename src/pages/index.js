import SEO from '@/components/seo'
import Layout from '@/components/layout'
import Banner from '@/sections/banner'
import About from '@/sections/about'
import Solutions from '@/sections/solutions'
import Services from '@/sections/services'
import Testimonial from '@/sections/testimonials'
import Partnership from '@/sections/partnership'
import Contact from '@/sections/contact'

export default function Home() {
  return (
    <>
    <SEO title="Cloud Wave" />
      <Layout>
        <Banner/>
        <About/>
        <Solutions/>
        <Services/>
        <Partnership/>
        <Testimonial/>
        <Contact/>
      </Layout>
    </>
  )
}
