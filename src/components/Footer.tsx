export default function Footer({ setActivePage }: { setActivePage: (p: string) => void }) {
  return (
    <footer id="sharedFt">
      <div className="ft-grid">
        <div>
          <div className="ft-bn">MEDICAL LUZ</div>
          <div className="ft-bs">Spa &amp; Wellness · Córdoba</div>
          <p className="ft-desc">Rituales de bienestar médico y estético en el corazón de Urca-Cerro, Córdoba. Donde la ciencia y el arte se encuentran.</p>
        </div>
        <div>
          <div className="ft-ct">Servicios</div>
          <ul className="ft-links">
            <li><a onClick={() => setActivePage('servicios')}>Masajes Terapéuticos</a></li>
            <li><a onClick={() => setActivePage('servicios')}>Tratamientos Faciales</a></li>
            <li><a onClick={() => setActivePage('servicios')}>Medicina Estética</a></li>
            <li><a onClick={() => setActivePage('servicios')}>Circuito Spa</a></li>
            <li><a onClick={() => setActivePage('servicios')}>Ritual Completo</a></li>
          </ul>
        </div>
        <div>
          <div className="ft-ct">Navegación</div>
          <ul className="ft-links">
            <li><a onClick={() => setActivePage('inicio')}>Inicio</a></li>
            <li><a onClick={() => setActivePage('servicios')}>Servicios</a></li>
            <li><a onClick={() => setActivePage('gift-cards')}>Gift Cards</a></li>
            <li><a onClick={() => setActivePage('reservas')}>Reservas</a></li>
            <li><a onClick={() => setActivePage('contacto')}>Contacto</a></li>
          </ul>
        </div>
        <div>
          <div className="ft-ct">Contacto</div>
          <div className="ft-ci"><span className="ft-cl">Ubicación</span><span className="ft-cv">Urca / Cerro · Córdoba</span></div>
          <div className="ft-ci"><span className="ft-cl">WhatsApp</span><a href="https://wa.me/5493515000000" style={{color: 'var(--gold)', textDecoration: 'none', fontSize: '15px'}}>+54 9 351 500-0000</a></div>
          <div className="ft-ci"><span className="ft-cl">Horarios</span><span className="ft-cv" style={{fontSize: '14px'}}>Lun–Vie 9–20hs · Sáb 9–14hs</span></div>
        </div>
      </div>
      <div className="ft-bot">
        <span className="ft-copy">© 2025 Medical Luz Spa &amp; Wellness · Todos los derechos reservados</span>
        <div className="ft-soc">
          <a href="#">Instagram</a>
          <a href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}
