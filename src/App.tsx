import { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import GiftCards from './pages/GiftCards';
import Reservas from './pages/Reservas';
import Contacto from './pages/Contacto';

export default function App() {
  const [activePage, setActivePage] = useState('inicio');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) en.target.classList.add('visible'); });
    }, { threshold: 0.08 });
    document.querySelectorAll('.anim-el').forEach(el => obs.observe(el));
    
    return () => obs.disconnect();
  }, [activePage]);

  return (
    <>
      <Nav activePage={activePage} setActivePage={setActivePage} />
      
      {activePage === 'inicio' && <Inicio setActivePage={setActivePage} />}
      {activePage === 'servicios' && <Servicios setActivePage={setActivePage} />}
      {activePage === 'gift-cards' && <GiftCards setActivePage={setActivePage} />}
      {activePage === 'reservas' && <Reservas />}
      {activePage === 'contacto' && <Contacto setActivePage={setActivePage} />}

      <Footer setActivePage={setActivePage} />
      <WhatsApp />
    </>
  );
}
