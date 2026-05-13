import { useState, useEffect } from 'react';

export default function Nav({ activePage, setActivePage }: { activePage: string, setActivePage: (p: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTo = (page: string) => {
    setActivePage(page);
    setMobOpen(false);
  };

  return (
    <>
      <div className={`mob-nav ${mobOpen ? 'open' : ''}`} id="mobNav">
        <button className="mob-close" onClick={() => setMobOpen(false)}>✕</button>
        <a onClick={() => navTo('inicio')}>Inicio</a>
        <a onClick={() => navTo('servicios')}>Servicios</a>
        <a onClick={() => navTo('gift-cards')}>Gift Cards</a>
        <a onClick={() => navTo('reservas')}>Reservas</a>
        <a onClick={() => navTo('contacto')}>Contacto</a>
      </div>

      <nav id="mainNav" className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo" onClick={() => navTo('inicio')}>
          <span className="nl-name">MEDICAL LUZ</span>
          <span className="nl-sub">Spa &amp; Wellness · Córdoba</span>
        </div>
        <ul className="nav-links">
          <li><a className={activePage === 'inicio' ? 'active' : ''} onClick={() => navTo('inicio')}>Inicio</a></li>
          <li><a className={activePage === 'servicios' ? 'active' : ''} onClick={() => navTo('servicios')}>Servicios</a></li>
          <li><a className={activePage === 'gift-cards' ? 'active' : ''} onClick={() => navTo('gift-cards')}>Gift Cards</a></li>
          <li><a className={activePage === 'reservas' ? 'active' : ''} onClick={() => navTo('reservas')}>Reservas</a></li>
          <li><a className={activePage === 'contacto' ? 'active' : ''} onClick={() => navTo('contacto')}>Contacto</a></li>
        </ul>
        <button className="nav-btn" onClick={() => navTo('reservas')}>Reservar Turno</button>
        <div className="hamburger" onClick={() => setMobOpen(true)}><span></span><span></span><span></span></div>
      </nav>
    </>
  );
}
