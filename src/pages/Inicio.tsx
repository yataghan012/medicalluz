import React, { useState, useEffect, useRef } from 'react';

const slides = [
  "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1561049501-e1f96bdd98fd?auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80"
];

const tickerItems = [
  "Masajes Terapéuticos", "Tratamientos Faciales", "Hidroterapia", 
  "Medicina Estética", "Rituales de Bienestar", "Gift Cards", "Membresías Exclusivas"
];

export default function Inicio({ setActivePage }: { setActivePage: (p: string) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [nlOk, setNlOk] = useState(false);
  const tickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(s => (s + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let pos = 0;
    let rafId: number;
    let isDragging = false;
    let startX = 0;
    let startPos = 0;
    const speed = 0.5;
    
    const inner = tickerRef.current;
    if (!inner) return;

    function getHalfWidth() {
      return inner!.scrollWidth / 2;
    }

    function autoScroll() {
      if (!isDragging && inner) {
        pos -= speed;
        if (Math.abs(pos) >= getHalfWidth()) pos = 0;
        inner.style.transform = `translateX(${pos}px)`;
      }
      rafId = requestAnimationFrame(autoScroll);
    }

    const touchStart = (e: TouchEvent) => {
      isDragging = true;
      startX = e.touches[0].clientX;
      startPos = pos;
    };

    const touchMove = (e: TouchEvent) => {
      if (!isDragging || !inner) return;
      const dx = e.touches[0].clientX - startX;
      pos = startPos + dx;
      const half = getHalfWidth();
      if (pos > 0) pos -= half;
      if (pos < -half) pos += half;
      inner.style.transform = `translateX(${pos}px)`;
    };

    const touchEnd = () => { isDragging = false; };

    inner.addEventListener('touchstart', touchStart, { passive: true });
    inner.addEventListener('touchmove', touchMove, { passive: true });
    inner.addEventListener('touchend', touchEnd);

    autoScroll();

    return () => {
      cancelAnimationFrame(rafId);
      inner.removeEventListener('touchstart', touchStart);
      inner.removeEventListener('touchmove', touchMove);
      inner.removeEventListener('touchend', touchEnd);
    };
  }, []);

  const handleNlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNlOk(true);
    e.currentTarget.reset();
  };

  return (
    <div className="page active">
      <section className="hero">
        <div className="hero-l">
          <span className="hero-lbl">· Urca / Cerro · Córdoba, Argentina ·</span>
          <h1 className="hero-h1">Donde<br/>la <em>luz</em><br/>transforma</h1>
          <p className="hero-p">Rituales de bienestar médico y estético para quienes entienden que el cuidado verdadero no admite concesiones.</p>
          <div className="hero-acts">
            <button className="btn-p" onClick={() => setActivePage('reservas')}>Reservar Experiencia</button>
            <button className="btn-g" onClick={() => setActivePage('servicios')}>Explorar Servicios</button>
          </div>
        </div>
        <div className="hero-r">
          <div className="hero-slides">
            {slides.map((src, i) => (
              <div key={i} className={`hero-slide ${i === currentSlide ? 'active' : ''}`}>
                <img src={src} alt="Spa slide" />
              </div>
            ))}
          </div>
          <div className="hero-dots">
            {slides.map((_, i) => (
              <div key={i} className={`hero-dot ${i === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(i)} />
            ))}
          </div>
        </div>
      </section>

      <div className="ticker">
        <div className="ticker-inner" ref={tickerRef}>
          {tickerItems.concat(tickerItems).map((txt, i) => (
            <span key={i} style={{display: 'flex'}}>
              <span className="ticker-item">{txt}</span>
              <span className="ticker-dot">◆</span>
            </span>
          ))}
        </div>
      </div>

      <section className="sv-section">
        <div className="sv-head">
          <div>
            <span className="s-label">Nuestros Servicios</span>
            <h2 className="s-title">Rituales <em>curados</em><br/>para cada necesidad</h2>
          </div>
          <button className="btn-g" onClick={() => setActivePage('servicios')}>Ver todos →</button>
        </div>
        <div className="sv-grid">
          <div className="sv-card anim-el" onClick={() => setActivePage('servicios')}>
            <img src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80" alt="" />
            <div className="sv-card-c">
            <h3 className="sv-name">Masajes &amp; Cuerpo</h3>
              <p className="sv-desc">Desde descontracturantes hasta rituales con aceites botánicos. Cada sesión es un protocolo personalizado.</p>
              <div className="sv-arr">Reservar →</div>
            </div>
          </div>
          <div className="sv-card anim-el" style={{transitionDelay: '.1s'}} onClick={() => setActivePage('servicios')}>
            <img src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80" alt="" />
            <div className="sv-card-c">
            <h3 className="sv-name">Tratamientos Faciales</h3>
              <p className="sv-desc">Tecnología de última generación con activos premium. Resultados visibles desde la primera sesión.</p>
              <div className="sv-arr">Reservar →</div>
            </div>
          </div>
          <div className="sv-card anim-el" style={{transitionDelay: '.2s'}} onClick={() => setActivePage('servicios')}>
            <img src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=900&q=80" alt="" />
            <div className="sv-card-c">
            <h3 className="sv-name">Wellness Integral</h3>
              <p className="sv-desc">Sauna, hidroterapia y programas de bienestar para restablecer el equilibrio cuerpo-mente.</p>
              <div className="sv-arr">Reservar →</div>
            </div>
          </div>
        </div>
      </section>

      <div className="about">
        <div className="about-img">
          <img src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=900&q=80" alt="Medical Luz Spa & Wellness Interior" />
          <div className="about-badge">+ de 10 años<br/><em>de experiencia</em></div>
        </div>
        <div className="about-body">
          <span className="s-label">Nosotras</span>
          <h2 className="s-title" style={{fontSize: 'clamp(44px,4.5vw,72px)'}}>El bienestar<br/>como <em>ciencia<br/>y arte</em></h2>
          <p>En Medical Luz entendemos que el cuidado profundo requiere tanto rigor médico como sensibilidad estética. Por eso integramos protocolos validados con rituales de lujo en un espacio diseñado para que el tiempo se detenga.</p>
          <p>Ubicadas en el corazón de Urca-Cerro, Córdoba, atendemos a quienes no negocian con su bienestar.</p>
          <div className="about-stats">
            <div><div className="st-n">10+</div><div className="st-l">Años de trayectoria</div></div>
            <div><div className="st-n">30+</div><div className="st-l">Tratamientos</div></div>
            <div><div className="st-n">4k+</div><div className="st-l">Clientes felices</div></div>
          </div>
        </div>
      </div>

      <section className="gt-sec">
        <span className="s-label" style={{textAlign: 'center'}}>El Regalo Perfecto</span>
        <h2 className="s-title" style={{textAlign: 'center', marginBottom: '16px'}}>Gift Cards <em>Medical Luz</em></h2>
        <p className="gt-sub">Regala bienestar. La forma más elegante de decirle a alguien que merece lo mejor.</p>
        <button className="btn-p" onClick={() => setActivePage('gift-cards')}>Ver Gift Cards</button>
      </section>

      <section className="nl-sec">
        <span className="s-label" style={{textAlign: 'center'}}>Newsletter Exclusivo</span>
        <h2 className="nl-title">Promociones <em>sólo</em><br/>para miembros</h2>
        <p className="nl-sub2">Rituales de temporada · Descuentos especiales · Novedades antes que nadie</p>
        <form className="nl-form" onSubmit={handleNlSubmit}>
          <input type="email" className="nl-input" placeholder="Tu email" required />
          <button type="submit" className="nl-sbtn">Suscribirme</button>
        </form>
        {nlOk && <p style={{marginTop: '20px', fontSize: '21px', color: 'var(--gold)', letterSpacing: '2px'}}>✓ Bienvenida a la comunidad Medical Luz</p>}
      </section>
    </div>
  );
}
