import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import AtAGlance from '../components/AtAGlance';
import Projects from '../components/Projects';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <AtAGlance />
      <Projects />
      <Partners />
      <Testimonials />
    </>
  );
}
