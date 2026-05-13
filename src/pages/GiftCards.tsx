import React, { useState } from 'react';

export default function GiftCards({ setActivePage }: { setActivePage: (p: string) => void }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [gTitle, setGTitle] = useState("");
  const [isCustom, setIsCustom] = useState(false);

  const openGift = (name: string, price: string, custom: boolean) => {
    setGTitle(name + (price ? ' · ' + price : ''));
    setIsCustom(custom);
    setModalOpen(true);
  };

  return (
    <div className="page active">
      <div className="pg-hero" style={{paddingTop: '80px'}}>
        <img src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=1600&q=80" alt="" />
        <div className="pg-hero-c">
          <span className="s-label">El Regalo que no Falla</span>
          <h1 style={{
            fontFamily: 'var(--fd)', 
            fontSize: 'clamp(58px,7.5vw,110px)', 
            fontWeight: 300, 
            lineHeight: '.95',
            textShadow: '0 4px 24px rgba(0,0,0,0.4)'
          }}>Gift Cards<br/><em style={{color: 'var(--gold)'}}>Medical Luz</em></h1>
        </div>
      </div>
      <section style={{background: 'var(--brown)', padding: '104px 64px'}}>
        <div style={{maxWidth: '580px', marginBottom: '8px'}}>
          <span className="s-label">Regala Bienestar</span>
          <h2 className="s-title" style={{fontSize: 'clamp(44px,4.5vw,68px)'}}>Para quienes <em>merecen</em><br/>lo mejor</h2>
          <p style={{fontSize: '17px', color: 'rgba(253,254,255,.62)', lineHeight: 2.1}}>Elegí la experiencia, personalizá el mensaje y recibís una gift card digital lista para enviar. Válida por 6 meses desde la compra.</p>
        </div>
        <div className="gc-grid">
          <div className="gc-card anim-el">
            <div className="gc-cat">Experiencia Inicial</div>
            <h3 className="gc-name">Ritual<br/>Esencial</h3>
            <p className="gc-desc">1 masaje descontracturante (60 min) + acceso al circuito de hidroterapia. El punto de partida perfecto.</p>
            <div className="gc-price"><sup>$</sup>28.000</div>
            <button className="gc-gbtn" onClick={() => openGift('Ritual Esencial','$28.000',false)}>Regalar Ahora</button>
          </div>
          <div className="gc-card gc-highlight anim-el" style={{transitionDelay: '.1s'}}>
            <div className="gc-cat" style={{color: 'var(--gold-light)'}}>✦ Más Elegido</div>
            <h3 className="gc-name">Ritual<br/>Completo</h3>
            <p className="gc-desc">Circuito Spa + masaje de 90 min + facial premium. La experiencia Medical Luz en su máxima expresión.</p>
            <div className="gc-price"><sup>$</sup>55.000</div>
            <button className="gc-gbtn" onClick={() => openGift('Ritual Completo','$55.000',false)}>Regalar Ahora</button>
          </div>
          <div className="gc-card anim-el" style={{transitionDelay: '.2s'}}>
            <div className="gc-cat">Monto Libre</div>
            <h3 className="gc-name">Gift Card<br/>Personalizada</h3>
            <p className="gc-desc">Vos elegís el monto. Quien la recibe elige la experiencia. Máxima flexibilidad, máximo impacto.</p>
            <div className="gc-price" style={{fontSize: '30px', paddingTop: '12px'}}>A tu medida</div>
            <button className="gc-gbtn" onClick={() => openGift('Gift Card Personalizada','',true)}>Personalizar</button>
          </div>
        </div>
      </section>
      
      {modalOpen && (
        <div className="g-modal open" onClick={(e) => { if(e.target === e.currentTarget) setModalOpen(false) }}>
          <div className="g-modal-box">
            <button className="g-modal-close" onClick={() => setModalOpen(false)}>✕</button>
            <span className="s-label">Adquirir Gift Card</span>
            <h3 style={{fontFamily: 'var(--fd)', fontSize: '40px', fontWeight: 300, marginBottom: '32px'}}>{gTitle}</h3>
            <div className="fg"><label className="fl-lbl">Tu Nombre</label><input type="text" className="f-in" placeholder="Nombre del comprador" /></div>
            <div className="fg"><label className="fl-lbl">Email</label><input type="email" className="f-in" placeholder="email@ejemplo.com" /></div>
            {isCustom && <div className="fg"><label className="fl-lbl">Monto (ARS $)</label><input type="number" className="f-in" placeholder="Ej: 35000" /></div>}
            <div className="fg"><label className="fl-lbl">Mensaje Personal (opcional)</label><textarea className="f-ta" placeholder="Un mensaje para quien lo recibe..."></textarea></div>
            <button className="btn-p" style={{width: '100%', textAlign: 'center', border: 'none', padding: '20px'}} onClick={() => { alert('Redirigiendo al pago seguro (Mercado Pago)...'); setModalOpen(false); }}>Proceder al Pago →</button>
            <p style={{fontSize: '13px', color: 'var(--muted)', textAlign: 'center', marginTop: '16px', letterSpacing: '1px'}}>Pago seguro · Mercado Pago · Envío inmediato por email</p>
          </div>
        </div>
      )}
    </div>
  );
}
