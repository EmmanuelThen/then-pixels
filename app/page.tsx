import Pricing from '@/components/Pricing';
import Link from 'next/link'
import Stats from '@/components/Stats';
import Hero from '@/components/Hero';
import ColorDiv from '@/components/ColorDiv';
import LandingPageSection from '@/components/LandingPageSection';
import ArrowButton from '@/components/ArrowButton';
import MaintenanceSVG from '@/components/MaintenanceSVG';
import SoftwareSVG from '@/components/SoftwareSVG';
import {
  getSession,
  getSubscription,
  getActiveProductsWithPrices
} from '@/app/supabase-server';
import Footer from '@/components/ui/Footer/Footer';

export default async function PricingPage() {
  const [session, products, subscription] = await Promise.all([
    getSession(),
    getActiveProductsWithPrices(),
    getSubscription()
  ]);

  return (
    <>
      <div className='color-div-container'>
        <ColorDiv />
      </div>
      <main>
        <section className=''>
          <Hero />
        </section>
        <section className='mt-[150px]'>
          <Stats />
        </section>
        <section>
          <LandingPageSection topTitle='Website Development' shinyText='Every business needs an online presence, make it count.' side={<SoftwareSVG />} bgColor=''>
            <p className='mb-10'>
              In the ever-evolving world of web development, different types of websites cater to varying objectives. At ThenDigital, we specialize in crafting exceptional <span className='text-red9'>static</span> websites,
              <span className='text-red9'> single-page web applications</span> (SPAs), and <span className='text-red9'>e-commerce</span> websites. Our commitment to creating bespoke solutions ensures that your website aligns perfectly with your unique requirements.
            </p>
            <ArrowButton buttonText='Learn more' href='/webdevelopment' />
          </LandingPageSection>
          <LandingPageSection topTitle='Software Development' shinyText='Streamline your tasks with innovative software solutions.' side={<SoftwareSVG />} bgColor=''>
            <p className='mb-10'>
              Unleash your productivity and efficiency with a suite of powerful and user-friendly software solutions designed to simplify your tasks.
              Our cutting-edge tools are meticulously crafted to cater to your specific needs, offering intuitive interfaces and robust functionalities.
              From automating repetitive processes to organizing complex workflows, our software empowers you to accomplish more in less time.
              Experience the seamless integration, customizable features, and comprehensive support that our tools provide, revolutionizing the way you work.
              Discover a new level of productivity and unlock your true potential with our helpful software tools.
            </p>
            <ArrowButton buttonText='Coming soon' href='/softwaredevelopment' />
          </LandingPageSection>
          <LandingPageSection topTitle='Maintenance' shinyText='Keep your website running smoothly with PixelCare*, our reliable maintenance service.' side={<MaintenanceSVG />} bgColor=''>
            <p className='mb-10'>
              In todays fast-paced digital landscape, its crucial to have a website that consistently performs at its best. With our comprehensive website maintenance services,
              we take the hassle out of managing and optimizing your online presence, allowing you to focus on what matters most—your business.
            </p>
            <ArrowButton buttonText='Learn more' href='/pixelcare' />
          </LandingPageSection>
          <LandingPageSection topTitle='Dashboard' shinyText='Get to know your dashboard, your personal command center.' side={<MaintenanceSVG />} bgColor=''>
            <p className='mb-10'>
              Experience the power of custom solutions as you manage your web projects with ease. Our platform empowers you to collaborate,
              track progress, and bring your unique vision to life. Explore a new era of web development, tailored just for you.
            </p>
            <ArrowButton buttonText='Get started' href='/pixelcare' />
          </LandingPageSection>
        </section>
        {/* <section className='mt-[390px] lg:mt-[530px]'>
          <OptimizationSection />
          <GridAnimation />
        </section> */}
      </main>
      <footer className='mt-20'>
        <Footer />
      </footer>
    </>
  );
}
