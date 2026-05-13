import React from 'react';

export default function Servicios({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <div className="page active">
      <div className="pg-hero" style={{paddingTop: '80px'}}>
        <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=80" alt="" />
        <div className="pg-hero-c">
          <span className="s-label">Catálogo Completo</span>
          <h1 style={{fontFamily: 'var(--fd)', fontSize: 'clamp(58px,7.5vw,110px)', fontWeight: 300, lineHeight: '.95'}}>
            Nuestros<br/><em style={{color: 'var(--gold)'}}>Rituales</em></h1>
        </div>
      </div>
      <div className="fs-grid">
        <div className="fs-item anim-el">
          <div>
            <h3 className="fs-name">Masaje Descontracturante</h3>
            <p className="fs-desc">Técnica profunda orientada a la liberación de contracturas musculares. Aceites botánicos de primera calidad, presión adaptada a cada persona.</p>
            <span className="fs-dur">60 / 90 min · Desde $18.000</span><br/>
            <button className="btn-g" style={{marginTop: '26px', padding: '14px 32px'}} onClick={() => setActivePage('reservas')}>Reservar</button>
          </div>
          <img className="fs-img" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80" alt="" />
        </div>
        <div className="fs-item anim-el">
          <div>
            <h3 className="fs-name">Masaje con Piedras Calientes</h3>
            <p className="fs-desc">Piedras de basalto volcánico combinadas con masoterapia para disolver tensiones profundas. Una experiencia sensorial única.</p>
            <span className="fs-dur">75 min · Desde $22.000</span><br/>
            <button className="btn-g" style={{marginTop: '26px', padding: '14px 32px'}} onClick={() => setActivePage('reservas')}>Reservar</button>
          </div>
          <img className="fs-img" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=400&q=80" alt="" />
        </div>
        <div className="fs-item anim-el">
          <div>
            <h3 className="fs-name">Facial Premium</h3>
            <p className="fs-desc">Limpieza profunda, hidratación ultrasónica y activos reafirmantes. Protocolo para piel viva, luminosa y saludable.</p>
            <span className="fs-dur">60 min · Desde $20.000</span><br/>
            <button className="btn-g" style={{marginTop: '26px', padding: '14px 32px'}} onClick={() => setActivePage('reservas')}>Reservar</button>
          </div>
          <img className="fs-img" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80" alt="" />
        </div>
        <div className="fs-item anim-el">
          <div>
            <h3 className="fs-name">Ritual de Bienestar Completo</h3>
            <p className="fs-desc">La experiencia total: circuito de hidroterapia + masaje + facial. Para quienes merecen el tiempo que no se dan.</p>
            <span className="fs-dur">3 horas · Desde $45.000</span><br/>
            <button className="btn-g" style={{marginTop: '26px', padding: '14px 32px'}} onClick={() => setActivePage('reservas')}>Reservar</button>
          </div>
          <img className="fs-img" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=400&q=80" alt="" />
        </div>
        <div className="fs-item anim-el">
          <div>
            <h3 className="fs-name">Medicina Estética</h3>
            <p className="fs-desc">Tratamientos no invasivos con tecnología médica: radiofrecuencia, ultracavitación y más. Resultados reales, sin cirugía.</p>
            <span className="fs-dur">45 – 60 min · Desde $28.000</span><br/>
            <button className="btn-g" style={{marginTop: '26px', padding: '14px 32px'}} onClick={() => setActivePage('reservas')}>Reservar</button>
          </div>
          <img className="fs-img" src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=400&q=80" alt="" />
        </div>
        <div className="fs-item anim-el">
          <div>
            <h3 className="fs-name">Circuito Spa &amp; Hidroterapia</h3>
            <p className="fs-desc">Jacuzzi, sauna seco, sala de vapor y ducha escocesa. Un circuito completo de termoterapia para desintoxicar cuerpo y mente.</p>
            <span className="fs-dur">90 min · Desde $15.000</span><br/>
            <button className="btn-g" style={{marginTop: '26px', padding: '14px 32px'}} onClick={() => setActivePage('reservas')}>Reservar</button>
          </div>
          <img className="fs-img" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=400&q=80" alt="" />
        </div>
      </div>
      <div className="stripe-cta">
        <div>
          <h3>¿No sabés por dónde empezar?</h3>
          <p>Contactanos y te asesoramos sin costo ni compromiso.</p>
        </div>
        <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
          <button className="btn-p" onClick={() => setActivePage('reservas')}>Reservar Turno</button>
          <a className="btn-g" href="https://wa.me/5493515000000" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div>
    </div>
  );
}
