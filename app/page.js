'use client'
import { useState } from 'react'
import Image from 'next/image'

const T = {
  es: {
    'nav-srv':'Servicios','nav-team':'Equipo','nav-doc':'Doctor','nav-rev':'Testimonios','nav-cta':'Agendar cita',
    'hero-eyebrow':'Especialistas en Implantes Dentales — CDMX',
    'h1a':'Tu sonrisa', 'h1b':'permanente.',
    'hero-desc':'Implantes de última generación con el Dr. Alejandro Hurtado. Tecnología de precisión, resultados para toda la vida.',
    'hero-cta1':'Agendar cita','hero-cta2':'Ver servicios',
    's1':'Implantes colocados','s2':'Años de experiencia','s3':'Clientes sonriendo',
    't1':'Programa tu diagnóstico','t2':'MSI disponibles','t3':'Atención en inglés y español','t4':'Garantía en implantes',
    'sec-srv-lbl':'Nuestros servicios','sec-srv-title':'Especialistas en restaurar tu sonrisa completa',
    'sec-srv-sub':'Desde el implante unitario hasta la rehabilitación total — tecnología de precisión y experiencia clínica al servicio de tu salud.',
    'sv1t':'Implantes Dentales','sv1d':'Nuestra especialidad. Titanio grado médico con guía computarizada. Resultado natural, duración de por vida.',
    'sv2t':'All-on-4 / All-on-6','sv2d':'Rehabilitación completa con 4 o 6 implantes. La solución definitiva para quienes perdieron todos sus dientes.',
    'sv3t':'Coronas sobre implante','sv3d':'Zirconia de alta resistencia. Idénticas a un diente natural en forma, color y función masticatoria.',
    'sv4t':'Diagnóstico 3D','sv4d':'Tomografía cone-beam para planificación quirúrgica milimétrica. Precisión que marca la diferencia.',
    'sv5t':'Injerto óseo','sv5d':'Regeneración de hueso para casos complejos. Recuperamos el volumen necesario para recibir un implante.',
    'sv6t':'Implante inmediato','sv6d':'Extracción e implante en una sola cita. Salga del consultorio con un diente provisional el mismo día.',
    'sv7t':'Limpieza Dental','sv7d':'Profilaxis profesional para eliminar sarro y placa bacteriana. Fundamental para mantener la salud de tus encías e implantes.',
    'sv8t':'Blanqueamiento Dental','sv8d':'Tratamiento profesional con tecnología LED. Resultados visibles desde la primera sesión, sin dañar el esmalte.',
    'sv9t':'Endodoncia','sv9d':'Tratamiento de conductos para salvar dientes con infección o daño pulpar. Procedimiento indoloro con resultados duraderos.',
    'sec-team-lbl':'Nuestro equipo','sec-team-title':'Los especialistas detrás de tu sonrisa',
    'doc-tag':'Director Médico','doc1-spec':'Implantólogo · Cirujano Oral','slot':'Próximamente','slot-spec':'Especialista',
    'sec-doc-lbl':'Director médico',
    'doc-bio':'Cirujano Oral e Implantólogo con más de 15 años de experiencia clínica. Especialista certificado en rehabilitación oral y cirugía de implantes. Ha realizado más de 500 procedimientos exitosos en la Ciudad de México, atendiendo pacientes locales e internacionales.',
    'cr1t':'Cirujano Dentista — UNAM','cr1d':'Cédula Profesional verificada',
    'cr2t':'Especialidad en Implantología','cr2d':'Posgrado con reconocimiento internacional',
    'cr3t':'Atención multilingüe','cr3d':'Consultas en español e inglés',
    'doc-spec':'Implantólogo · Cirujano Oral',
    'sec-rev-lbl':'Testimonios','sec-rev-title':'Lo que dicen nuestros pacientes',
    'r1':'"Tenía mucho miedo, pero el Dr. Hurtado me explicó todo con paciencia. El resultado es increíble, nadie nota que es un implante."',
    'r2':'"Vine desde Polanco porque me lo recomendaron. Precio justo, calidad excelente y atención muy profesional."',
    'r3':'"As an expat in CDMX, I was nervous finding a reliable dentist. Dr. Hurtado and his team made me feel completely at ease."',
    'cta-h':'¿Listo para recuperar tu sonrisa?','cta-p':'Agenda tu consulta hoy. Sin compromiso.',
    'cta-b1':'WhatsApp ahora','cta-b2':'Llamar al consultorio',
    'foot-desc':'Centro Dental especializado en implantes dentales. Benito Juárez, CDMX. Atendemos pacientes locales e internacionales.',
    'fc1':'Servicios','fc1-1':'Implantes dentales','fc1-2':'All-on-4 / All-on-6','fc1-3':'Coronas de zirconia','fc1-4':'Injerto óseo','fc1-5':'Diagnóstico 3D',
    'fc2':'Clínica','fc2-1':'El doctor','fc2-2':'El equipo','fc2-3':'Testimonios',
    'fc3':'Contacto','foot-rights':'Todos los derechos reservados.','foot-by':'Diseño web · CDMX',
    'maps-btn':'Cómo llegar — Manzanas 44-4, Tlacoquemecatl del Valle, Benito Juárez, CDMX 03200',
  },
  en: {
    'nav-srv':'Services','nav-team':'Team','nav-doc':'Doctor','nav-rev':'Reviews','nav-cta':'Book appointment',
    'hero-eyebrow':'Dental Implant Specialists — Mexico City',
    'h1a':'Your smile,','h1b':'permanent.',
    'hero-desc':'State-of-the-art implants with Dr. Alejandro Hurtado. Precision technology, results that last a lifetime.',
    'hero-cta1':'Book appointment','hero-cta2':'See services',
    's1':'Implants placed','s2':'Years of experience','s3':'Smiling clients',
    't1':'Schedule your diagnosis','t2':'MSI available','t3':'Care in English & Spanish','t4':'Implant warranty',
    'sec-srv-lbl':'Our services','sec-srv-title':'Specialists in restoring your complete smile',
    'sec-srv-sub':'From single implants to full mouth rehabilitation — precision technology and clinical expertise at your service.',
    'sv1t':'Dental Implants','sv1d':'Our specialty. Medical-grade titanium with computer-guided technology. Natural result, lifetime durability.',
    'sv2t':'All-on-4 / All-on-6','sv2d':'Full mouth rehabilitation with just 4 or 6 implants. The definitive solution for edentulous patients.',
    'sv3t':'Implant Crowns','sv3d':'High-strength zirconia crowns. Identical to natural teeth in shape, color and chewing function.',
    'sv4t':'3D Diagnosis','sv4d':'Cone-beam CT for millimetric surgical planning. Precision that makes the difference.',
    'sv5t':'Bone Graft','sv5d':'Bone regeneration for complex cases. We restore the volume needed to receive an implant.',
    'sv6t':'Same-day Implant','sv6d':'Extraction and implant in one appointment. Leave with a provisional tooth the same day.',
    'sv7t':'Dental Cleaning','sv7d':'Professional prophylaxis to remove tartar and plaque. Essential for maintaining the health of your gums and implants.',
    'sv8t':'Teeth Whitening','sv8d':'Professional LED whitening treatment. Visible results from the first session, safely without damaging enamel.',
    'sv9t':'Endodontics','sv9d':'Root canal treatment to save teeth with infection or pulp damage. Painless procedure with lasting results.',
    'sec-team-lbl':'Our team','sec-team-title':'The specialists behind your smile',
    'doc-tag':'Medical Director','doc1-spec':'Implantologist · Oral Surgeon','slot':'Coming soon','slot-spec':'Specialist',
    'sec-doc-lbl':'Medical Director',
    'doc-bio':'Oral Surgeon and Implantologist with over 15 years of clinical experience. Certified specialist in oral rehabilitation and implant surgery. Successfully performed over 500 procedures in Mexico City.',
    'cr1t':'Dental Surgeon — UNAM','cr1d':'Verified professional license',
    'cr2t':'Implantology Specialty','cr2d':'Postgraduate degree with international recognition',
    'cr3t':'Multilingual care','cr3d':'Consultations in Spanish and English',
    'doc-spec':'Implantologist · Oral Surgeon',
    'sec-rev-lbl':'Reviews','sec-rev-title':'What our patients are saying',
    'r1':'"I was afraid, but Dr. Hurtado explained everything patiently. The result is incredible — no one notices it\'s an implant."',
    'r2':'"I came from Polanco on a recommendation. Fair price, excellent quality and very professional care."',
    'r3':'"As an expat in CDMX, I was nervous finding a reliable dentist. Dr. Hurtado and his team made me feel completely at ease."',
    'cta-h':'Ready to get your smile back?','cta-p':'Book your consultation today. No commitment.',
    'cta-b1':'WhatsApp now','cta-b2':'Call the clinic',
    'foot-desc':'Dental center specialized in dental implants. Benito Juárez, CDMX. Serving local and international patients.',
    'fc1':'Services','fc1-1':'Dental implants','fc1-2':'All-on-4 / All-on-6','fc1-3':'Zirconia crowns','fc1-4':'Bone graft','fc1-5':'3D Diagnosis',
    'fc2':'Clinic','fc2-1':'The doctor','fc2-2':'The team','fc2-3':'Reviews',
    'fc3':'Contact','foot-rights':'All rights reserved.','foot-by':'Web design · CDMX',
    'maps-btn':'Get directions — Manzanas 44-4, Tlacoquemecatl del Valle, Benito Juárez, CDMX 03200',
  }
}

const IconPhone = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.5 10.81 19.79 19.79 0 01.44 2.18 2 2 0 012.42 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.16 6.16l1.27-.76a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
const IconMsg = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
const IconPin = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
const IconArrow = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
const IconCheck = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
const IconCard = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
const IconGlobe = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
const IconShield = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
const IconStar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="#3AADAD" stroke="#3AADAD" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IconLeft = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
const IconRight = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
const IconIG = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
const IconFB = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
const IconWA = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>

const services = [
  { featured: true, icon: <svg width="32" height="38" viewBox="0 0 32 38" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2 C9 2 4 7 4 14 C4 20 7 25 11 28 L13 36 L16 34 L19 36 L21 28 C25 25 28 20 28 14 C28 7 23 2 16 2Z"/><line x1="16" y1="14" x2="16" y2="28"/><line x1="13" y1="17" x2="19" y2="17"/><line x1="13" y1="21" x2="19" y2="21"/></svg>, tk:'sv1t', dk:'sv1d' },
  { icon: <svg width="36" height="30" viewBox="0 0 36 30" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 8 C2 4 5 2 9 2 C11 2 13 3 14 5 C15 3 17 2 18 2 C19 2 21 3 22 5 C23 3 25 2 27 2 C31 2 34 4 34 8"/><path d="M2 8 C2 14 5 20 10 24 C12 26 14 27 18 27 C22 27 24 26 26 24 C31 20 34 14 34 8"/><circle cx="9" cy="10" r="1.5" fill="#3AADAD"/><circle cx="18" cy="10" r="1.5" fill="#3AADAD"/><circle cx="27" cy="10" r="1.5" fill="#3AADAD"/></svg>, tk:'sv2t', dk:'sv2d' },
  { icon: <svg width="34" height="32" viewBox="0 0 34 32" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 26 L4 10 L10 18 L17 6 L24 18 L30 10 L30 26 Z"/><line x1="4" y1="26" x2="30" y2="26"/></svg>, tk:'sv3t', dk:'sv3d' },
  { icon: <svg width="34" height="32" viewBox="0 0 34 32" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><polyline points="17 2 30 9 30 23 17 30 4 23 4 9 17 2"/><line x1="17" y1="2" x2="17" y2="30"/><line x1="4" y1="9" x2="30" y2="9"/></svg>, tk:'sv4t', dk:'sv4d' },
  { icon: <svg width="34" height="32" viewBox="0 0 36 32" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M8 6 C4 6 2 9 2 12 C2 15 4 17 7 17 L15 17 L15 25 C12 25 9 27 9 30"/><path d="M28 6 C32 6 34 9 34 12 C34 15 32 17 29 17 L21 17 L21 25 C24 25 27 27 27 30"/><line x1="15" y1="17" x2="21" y2="17"/></svg>, tk:'sv5t', dk:'sv5d' },
  { icon: <svg width="30" height="36" viewBox="0 0 30 36" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 2 L4 20 L13 20 L13 34 L26 16 L17 16 Z"/></svg>, tk:'sv6t', dk:'sv6d' },
  { icon: <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4 C10 4 5 9 5 16 C5 20 7 24 10 26 L10 30 L24 30 L24 26 C27 24 29 20 29 16 C29 9 24 4 17 4Z"/><line x1="12" y1="20" x2="22" y2="20"/><circle cx="17" cy="14" r="3"/></svg>, tk:'sv7t', dk:'sv7d' },
  { icon: <svg width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M17 4 C10 4 5 9 5 16 C5 20 7 24 10 26 L10 30 L24 30 L24 26 C27 24 29 20 29 16 C29 9 24 4 17 4Z"/><line x1="17" y1="4" x2="17" y2="8"/><line x1="24" y1="7" x2="21" y2="10"/><line x1="10" y1="7" x2="13" y2="10"/></svg>, tk:'sv8t', dk:'sv8d' },
  { icon: <svg width="30" height="36" viewBox="0 0 30 36" fill="none" stroke="#3AADAD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2 C9 2 5 7 5 13 C5 18 7 22 10 24 L11 34 L15 32 L19 34 L20 24 C23 22 25 18 25 13 C25 7 21 2 15 2Z"/><line x1="15" y1="13" x2="15" y2="28"/><line x1="12" y1="16" x2="18" y2="16"/><line x1="12" y1="20" x2="18" y2="20"/></svg>, tk:'sv9t', dk:'sv9d' },
]

export default function Home() {
  const [lang, setLang] = useState('es')
  const [carPos, setCarPos] = useState(0)
  const t = (k) => T[lang][k] || k

  const slide = (d) => {
    setCarPos(p => Math.max(0, Math.min(4, p + d)))
  }

  return (
    <>
      {/* TOPBAR */}
      <div className="topbar">
        <div className="topbar-left">
          <a href="tel:5512330305"><IconPhone /> 55 1233 0305</a>
          <a href="https://wa.me/525512330305" target="_blank" rel="noopener noreferrer"><IconMsg /> WhatsApp</a>
          <span className="topbar-sep">|</span>
          <span className="topbar-loc"><IconPin /> Benito Juárez, CDMX</span>
        </div>
        <div className="lang-switcher">
          <button className={`lang-btn${lang==='es'?' active':''}`} onClick={()=>setLang('es')}>ES</button>
          <button className={`lang-btn${lang==='en'?' active':''}`} onClick={()=>setLang('en')}>EN</button>
        </div>
      </div>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <img src="/logo.png" alt="Centro Dental Alroza" />
        </div>
        <div className="nav-links">
          <a href="#servicios">{t('nav-srv')}</a>
          <a href="#equipo">{t('nav-team')}</a>
          <a href="#doctor">{t('nav-doc')}</a>
          <a href="#testimonios">{t('nav-rev')}</a>
        </div>
        <a href="https://wa.me/525512330305" className="nav-cta" target="_blank" rel="noopener noreferrer">{t('nav-cta')}</a>
      </nav>

      {/* HERO */}
      <section className="hero" id="inicio">
        <img className="hero-bg" src="/consultorio.jpg" alt="Centro Dental Alroza — Consultorio" />
        <div className="hero-overlay" />
        <div className="hero-body">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line" />
            <span>{t('hero-eyebrow')}</span>
          </div>
          <h1>{t('h1a')}<br /><em>{t('h1b')}</em></h1>
          <p className="hero-desc">{t('hero-desc')}</p>
          <div className="hero-btns">
            <a href="https://wa.me/525512330305" className="btn-teal" target="_blank" rel="noopener noreferrer">
              <IconMsg />{t('hero-cta1')}
            </a>
            <a href="#servicios" className="btn-outline">
              {t('hero-cta2')} <IconArrow />
            </a>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">500<sup>+</sup></div><div className="stat-lbl">{t('s1')}</div></div>
            <div><div className="stat-num">15<sup>+</sup></div><div className="stat-lbl">{t('s2')}</div></div>
            <div><div className="stat-num">1000<sup>+</sup></div><div className="stat-lbl">{t('s3')}</div></div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <div className="trust-strip">
        <div className="trust-item"><IconCheck />{t('t1')}</div>
        <div className="trust-divider" />
        <div className="trust-item"><IconCard />{t('t2')}</div>
        <div className="trust-divider" />
        <div className="trust-item"><IconGlobe />{t('t3')}</div>
        <div className="trust-divider" />
        <div className="trust-item"><IconShield />{t('t4')}</div>
      </div>

      {/* SERVICES */}
      <section className="section services" id="servicios">
        <div className="sec-label">{t('sec-srv-lbl')}</div>
        <h2 className="sec-title">{t('sec-srv-title')}</h2>
        <p className="sec-sub">{t('sec-srv-sub')}</p>
        <div className="services-grid">
          {services.map((s, i) => (
            <article key={i} className={`srv-card${s.featured?' featured':''}`}>
              <div className="srv-icon">{s.icon}</div>
              <h3>{t(s.tk)}</h3>
              <p>{t(s.dk)}</p>
            </article>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="section team" id="equipo">
        <div className="team-head">
          <div>
            <div className="sec-label">{t('sec-team-lbl')}</div>
            <h2 className="sec-title">{t('sec-team-title')}</h2>
          </div>
          <div className="car-btns">
            <button className="car-btn" onClick={()=>slide(-1)} aria-label="Anterior"><IconLeft /></button>
            <button className="car-btn" onClick={()=>slide(1)} aria-label="Siguiente"><IconRight /></button>
          </div>
        </div>
        <div className="car-wrap">
          <div className="car-track" style={{transform:`translateX(-${carPos*(25)}%)`}}>
            <div className="doc-card">
              <div className="doc-photo">
                <img src="/doctor.jpg" alt="Dr. Alejandro Hurtado — Implantólogo CDMX" />
                <div className="doc-tag">{t('doc-tag')}</div>
              </div>
              <div className="doc-info">
                <h3>Dr. Alejandro Hurtado</h3>
                <div className="spec">{t('doc1-spec')}</div>
              </div>
            </div>
            {[1,2,3,4].map(i => (
              <div className="doc-card" key={i}>
                <div className="doc-slot">
                  <div className="slot-circle">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1.2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
                  </div>
                  <div className="slot-label">{t('slot')}</div>
                </div>
                <div className="doc-info">
                  <h3 style={{color:'var(--border)'}}>— —</h3>
                  <div className="spec" style={{color:'var(--border)'}}>{t('slot-spec')}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCTOR DETAIL */}
      <section className="doctor-detail" id="doctor">
        <div className="sec-label" style={{color:'rgba(58,173,173,.7)'}}>{t('sec-doc-lbl')}</div>
        <div className="doc-grid">
          <div>
            <h2 className="sec-title" style={{color:'#fff',fontSize:'52px'}}>Dr. Alejandro<br/>Hurtado</h2>
            <p className="doc-bio-text">{t('doc-bio')}</p>
            <div className="creds">
              <div className="cred-row">
                <div className="cred-icon-wrap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3AADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg></div>
                <div className="cred-text"><strong>{t('cr1t')}</strong><span>{t('cr1d')}</span></div>
              </div>
              <div className="cred-row">
                <div className="cred-icon-wrap"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3AADAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg></div>
                <div className="cred-text"><strong>{t('cr2t')}</strong><span>{t('cr2d')}</span></div>
              </div>
              <div className="cred-row">
                <div className="cred-icon-wrap"><IconGlobe /></div>
                <div className="cred-text"><strong>{t('cr3t')}</strong><span>{t('cr3d')}</span></div>
              </div>
            </div>
            <div className="doc-links">
              <a href="https://www.instagram.com/centrodentalalroza/" target="_blank" rel="noopener noreferrer" className="doc-link-btn">Instagram</a>
            </div>
          </div>
          <div className="doc-frame">
            <img src="/doctor.jpg" alt="Dr. Alejandro Hurtado — Cirujano Oral e Implantólogo CDMX" />
            <div className="doc-frame-caption">
              <div className="doc-frame-name">Dr. Alejandro Hurtado</div>
              <div className="doc-frame-spec">{t('doc-spec')}</div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section testimonials" id="testimonios">
        <div className="sec-label">{t('sec-rev-lbl')}</div>
        <h2 className="sec-title">{t('sec-rev-title')}</h2>
        <div className="reviews-grid">
          {[['MG','María González','Google · Implante unitario','r1'],['CR','Carlos Ramírez','Google · All-on-4','r2'],['JS','James S.','Google · Dental Implant','r3']].map(([ini,name,src,rk])=>(
            <article key={ini} className="rev-card">
              <div className="rev-stars">{[1,2,3,4,5].map(i=><IconStar key={i}/>)}</div>
              <p className="rev-text">{t(rk)}</p>
              <div className="rev-author">
                <div className="rev-initials">{ini}</div>
                <div><div className="rev-name">{name}</div><div className="rev-source">{src}</div></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-band">
        <div>
          <h2>{t('cta-h')}</h2>
          <p>{t('cta-p')}</p>
        </div>
        <div className="cta-btns">
          <a href="https://wa.me/525512330305" className="btn-white" target="_blank" rel="noopener noreferrer"><IconWA />{t('cta-b1')}</a>
          <a href="tel:5512330305" className="btn-white-outline"><IconPhone />{t('cta-b2')}</a>
        </div>
      </div>

      {/* MAPS */}
      <div className="maps-bar">
        <a href="https://maps.app.goo.gl/96bfjtTjixAfkBVg7" target="_blank" rel="noopener noreferrer" className="maps-btn">
          <IconPin />{t('maps-btn')}
        </a>
      </div>

      {/* FOOTER */}
      <footer>
        <div className="foot-grid">
          <div>
            <div className="foot-logo"><img src="/logo.png" alt="Centro Dental Alroza" /></div>
            <p className="foot-desc">{t('foot-desc')}</p>
            <div className="foot-social">
              <a href="https://www.instagram.com/centrodentalalroza/" className="soc-btn" target="_blank" rel="noopener noreferrer"><IconIG /></a>
              <a href="https://www.facebook.com/centrodentalalroza/" className="soc-btn" target="_blank" rel="noopener noreferrer"><IconFB /></a>
              <a href="https://wa.me/525512330305" className="soc-btn" target="_blank" rel="noopener noreferrer"><IconWA /></a>
            </div>
          </div>
          <div className="foot-col">
            <h4>{t('fc1')}</h4>
            <ul>
              {['fc1-1','fc1-2','fc1-3','fc1-4','fc1-5'].map(k=><li key={k}><a href="#servicios">{t(k)}</a></li>)}
            </ul>
          </div>
          <div className="foot-col">
            <h4>{t('fc2')}</h4>
            <ul>
              <li><a href="#doctor">{t('fc2-1')}</a></li>
              <li><a href="#equipo">{t('fc2-2')}</a></li>
              <li><a href="#testimonios">{t('fc2-3')}</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>{t('fc3')}</h4>
            <ul>
              <li><a href="tel:5512330305">55 1233 0305</a></li>
              <li><a href="https://wa.me/525512330305" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              <li><a href="https://www.instagram.com/centrodentalalroza/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/centrodentalalroza/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            </ul>
            <div className="foot-addr">Manzanas 44-4, Tlacoquemecatl del Valle<br/>Benito Juárez, CDMX 03200</div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2025 Centro Dental Alroza. {t('foot-rights')}</span>
          <span>{t('foot-by')}</span>
        </div>
      </footer>

      {/* WA FLOAT */}
      <a href="https://wa.me/525512330305" className="wa-float" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <IconWA />
      </a>
    </>
  )
}
