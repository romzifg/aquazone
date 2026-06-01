import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Species from './components/Species';
import WhyChoose from './components/WhyChoose';
import Facility from './components/Facility';
import About from './components/About';
import FAQSection from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

/**
 * PT. Mutiara Tetra Indonesia — Landing Page
 *
 * Konversi ke Next.js:
 *  1. Semua komponen di src/components/ → app/components/
 *  2. src/data/content.js → app/data/content.js
 *  3. src/hooks/useInView.js → app/hooks/useInView.js
 *  4. Tambahkan 'use client'; di setiap file komponen (semua pakai hooks)
 *  5. src/index.css → app/globals.css (import di app/layout.jsx)
 *  6. App.jsx ini → app/page.jsx (hapus baris import './index.css')
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Species />
        <WhyChoose />
        <Facility />
        <About />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
