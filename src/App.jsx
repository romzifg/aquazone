import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FishSection from './components/FishSection';
import Features from './components/Features';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FishSection />
        <Features />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
