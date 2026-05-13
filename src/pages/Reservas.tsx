import React, { useState } from 'react';

export default function Reservas() {
  const [ok, setOk] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOk(true);
    e.currentTarget.reset();
    setTimeout(() => setOk(false), 6000);
  };

  return (
    <div className="page active" style={{background: 'var(--dark)'}}>
      <div className="bk-wrap" style={{paddingTop: '120px'}}>
        <div className="bk-img">
          <img src="https://images.unsplash.com/photo-1529539795054-3c162aab037a?auto=format&fit=crop&w=900&q=80" alt="" />
          <div className="bk-img-txt">
            <span className="s-label">Agenda tu Momento</span>
            <h2>Reservá<br/>tu <em>experiencia</em></h2>
            <p>Confirmamos tu turno en menos de 2 horas. También podés escribirnos directamente por WhatsApp.</p>
          </div>
        </div>
        <div className="bk-form">
          <form onSubmit={handleSubmit}>
            <div className="f-row">
              <div className="fg"><label className="fl-lbl">Nombre</label><input type="text" className="f-in" placeholder="Tu nombre" required /></div>
              <div className="fg"><label className="fl-lbl">Apellido</label><input type="text" className="f-in" placeholder="Tu apellido" required /></div>
            </div>
            <div className="f-row">
              <div className="fg"><label className="fl-lbl">Email</label><input type="email" className="f-in" placeholder="email@ejemplo.com" required /></div>
              <div className="fg"><label className="fl-lbl">Teléfono</label><input type="tel" className="f-in" placeholder="+54 9 351 ..." /></div>
            </div>
            <div className="fg">
              <label className="fl-lbl">Servicio</label>
              <select className="f-sel f-in" defaultValue="">
                <option value="" disabled>— Seleccioná un tratamiento —</option>
                <option>Masaje Descontracturante (60 min)</option>
                <option>Masaje Descontracturante (90 min)</option>
                <option>Masaje con Piedras Calientes</option>
                <option>Facial Premium</option>
                <option>Ritual de Bienestar Completo</option>
                <option>Medicina Estética</option>
                <option>Circuito Spa &amp; Hidroterapia</option>
              </select>
            </div>
            <div className="f-row">
              <div className="fg"><label className="fl-lbl">Fecha Preferida</label><input type="date" className="f-in" /></div>
              <div className="fg"><label className="fl-lbl">Horario</label>
                <select className="f-sel f-in" defaultValue="Mañana / Tarde">
                    <option>Mañana / Tarde</option>
                    <option>09:00 – 11:00</option>
                    <option>11:00 – 13:00</option>
                    <option>14:00 – 16:00</option>
                    <option>16:00 – 18:00</option>
                    <option>18:00 – 20:00</option>
                </select>
              </div>
            </div>
            <div className="fg"><label className="fl-lbl">¿Algo que debamos saber?</label><textarea className="f-ta" style={{height: '48px'}} placeholder="Alergias, lesiones..."></textarea></div>
            <button type="submit" className="btn-p" style={{width: '100%', textAlign: 'center', border: 'none', padding: '16px'}}>Enviar Solicitud</button>
            {ok && <p style={{marginTop: '12px', fontSize: '16px', color: 'var(--gold)', textAlign: 'center', letterSpacing: '1px'}}>✓ Solicitud recibida.</p>}
            <div style={{marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(201,169,110,.12)', textAlign: 'center'}}>
              <p style={{fontSize: '15px', color: 'var(--muted)', letterSpacing: '1px', marginBottom: '12px'}}>¿Preferís por WhatsApp?</p>
              <a href="https://wa.me/5493515000000" target="_blank" rel="noreferrer" style={{display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--gold)', fontFamily: 'var(--fl)', fontSize: '12px', letterSpacing: '2px', textDecoration: 'none'}}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Escribirnos al WhatsApp
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
