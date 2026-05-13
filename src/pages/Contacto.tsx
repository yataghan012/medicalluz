import React from 'react';

export default function Contacto({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <div className="page active">
      <section style={{padding: '148px 64px 60px', background: 'var(--dark-deep)'}}>
        <span className="s-label">Encontranos</span>
        <h1 style={{fontFamily: 'var(--fd)', fontSize: 'clamp(56px,8vw,104px)', fontWeight: 300, lineHeight: '.95'}}>Estamos en <em style={{color: 'var(--gold)'}}>Córdoba</em></h1>
      </section>
      <div className="ct-grid">
        <div className="ct-map">
          <iframe src="https://maps.google.com/maps?q=barrio+urca+cordoba+argentina&output=embed" loading="lazy" title="Ubicación Medical Luz" style={{width: '100%', height: '100%', border: 'none', filter: 'invert(.88) hue-rotate(180deg) saturate(.25)', opacity: .65, minHeight: '400px'}}></iframe>
        </div>
        <div className="ct-info">
          <div className="ft-ci"><span className="ft-cl">Dirección</span><span className="ft-cv" style={{fontSize: '19px', lineHeight: 1.9}}>Barrio Urca / Cerro<br/>Córdoba, Argentina</span></div>
          <div className="ft-ci" style={{marginTop: '40px'}}><span className="ft-cl">WhatsApp</span><a href="https://wa.me/5493515000000" target="_blank" rel="noreferrer" style={{color: 'var(--gold)', fontSize: '19px', textDecoration: 'none'}}>+54 9 351 500-0000</a></div>
          <div className="ft-ci" style={{marginTop: '40px'}}><span className="ft-cl">Email</span><a href="mailto:info@medicalluz.com.ar" style={{color: 'var(--gold)', fontSize: '19px', textDecoration: 'none'}}>info@medicalluz.com.ar</a></div>
          <div className="ft-ci" style={{marginTop: '40px'}}><span className="ft-cl">Horarios</span>
            <div style={{fontSize: '17px', color: 'rgba(253,254,255,.7)', lineHeight: 2.1}}>Lunes a Viernes: 9:00 – 20:00<br/>Sábados: 9:00 – 14:00<br/>Domingos: Cerrado</div>
          </div>
          <div style={{marginTop: '52px', paddingTop: '48px', borderTop: '1px solid rgba(201,169,110,.14)', display: 'flex', gap: '16px', flexWrap: 'wrap'}}>
            <button className="btn-p" onClick={() => setActivePage('reservas')}>Reservar Turno</button>
            <a className="btn-g" href="https://wa.me/5493515000000" target="_blank" rel="noreferrer">WhatsApp</a>
          </div>
          <div style={{marginTop: '48px', display: 'flex', gap: '32px'}}>
            <a href="#" style={{fontFamily: 'var(--fl)', fontSize: '13px', letterSpacing: '3px', color: 'var(--muted)', textDecoration: 'none', transition: 'color .3s'}}>Instagram</a>
            <a href="#" style={{fontFamily: 'var(--fl)', fontSize: '13px', letterSpacing: '3px', color: 'var(--muted)', textDecoration: 'none', transition: 'color .3s'}}>Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
