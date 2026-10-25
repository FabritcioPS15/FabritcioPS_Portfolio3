'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'
import { ArrowUpRight, Check, ChevronRight, Globe2, Mail, Menu, Network, Send, X } from 'lucide-react'
import { TechStack } from './tech-badge'

const projects = [
  { name: 'Talenthree', type: 'Producto web', description: 'Aplicación web para organizar talento, procesos y decisiones en un mismo flujo.', stack: ['React', 'TypeScript', 'Tailwind', 'Vite'], tone: 'mint', problem: 'Convertir información dispersa en una experiencia clara y accionable.', contribution: 'Diseño y desarrollo de la interfaz, estructura de componentes y experiencia responsive.' },
  { name: 'CRM San Cristóbal', type: 'Sistema empresarial', description: 'Sistema orientado a la gestión de procesos y funcionalidades CRM.', stack: ['React', 'Node.js', 'SQL'], tone: 'blue', problem: 'Dar visibilidad a procesos internos que necesitaban más orden y trazabilidad.', contribution: 'Arquitectura de pantallas, flujos de trabajo y componentes de gestión.' },
  { name: 'Cotizador de Madera', type: 'Herramienta', description: 'Herramienta web para facilitar cálculos, medidas y cotizaciones de madera.', stack: ['JavaScript', 'CSS', 'SQL'], tone: 'orange', problem: 'Reducir fricción y errores al pasar de medidas a una cotización.', contribution: 'Lógica de cálculo, formularios y una interfaz orientada a la operación.' },
  { name: 'Noticias Región 24H', type: 'Editorial digital', description: 'Proyecto de noticias desarrollado con Next.js y atención al contenido.', stack: ['Next.js', 'SEO', 'CMS'], tone: 'violet', problem: 'Presentar contenido noticioso con una jerarquía útil y rápida de explorar.', contribution: 'Estructura editorial, componentes de contenido y optimización SEO.' },
]

const skills = {
  Frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Tailwind CSS'],
  'Backend y servicios': ['Node.js', 'Express', 'Supabase', 'Firebase'],
  'Datos y automatización': ['SQL Server', 'PostgreSQL', 'Python', 'pandas'],
  'Infraestructura': ['Windows', 'Redes', 'Impresoras', 'Soporte remoto', 'Administración'],
  Herramientas: ['Git', 'Docker', 'Linux', 'Hosting', 'Despliegue'],
}

function Mark({ small = false }: { small?: boolean }) {
  return <span className={`mark ${small ? 'mark-small' : ''}`}><Image src="/Logotipo.png" alt="Logotipo de Fabritcio Peña" width={1536} height={1024} priority={!small} className="logo-mark" /></span>
}

export function Portfolio() {
  const [active, setActive] = useState('Talenthree')
  const [skillTab, setSkillTab] = useState('Frontend')
  const [menuOpen, setMenuOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const selected = useMemo(() => projects.find((p) => p.name === active) ?? projects[0], [active])

  const go = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false) }

  return <div className="portfolio-shell">
    <header className="site-header">
      <button className="brand" onClick={() => go('inicio')} aria-label="Ir al inicio"><Mark small /><span>FP<span className="brand-dot">/</span>26</span></button>
      <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegación principal">
        {['inicio', 'perfil', 'proyectos', 'laboratorio', 'experiencia', 'contacto'].map((id) => <button key={id} onClick={() => go(id)}>{id}</button>)}
      </nav>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}>{menuOpen ? <X /> : <Menu />}</button>
      <button className="header-contact" onClick={() => go('contacto')}>Hablemos <ArrowUpRight data-icon="inline-end" /></button>
    </header>

    <main>
      <section id="inicio" className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow"><span className="status-dot" /> PORTAFOLIO PERSONAL · 2026</p>
          <h1>Fabritcio<br /><em>Peña.</em></h1>
          <p className="hero-lede">Tecnología que <span>resuelve</span><br /> problemas reales.</p>
          <p className="hero-description">Desarrollo experiencias web, sistemas y automatizaciones que convierten lo complejo en algo más claro, útil y humano.</p>
          <div className="hero-actions"><button className="button-primary" onClick={() => go('proyectos')}>Explorar proyectos <ArrowUpRight data-icon="inline-end" /></button><button className="text-button" onClick={() => go('contacto')}>Iniciar conversación <ChevronRight data-icon="inline-end" /></button></div>
        </div>
        <div className="hero-art" aria-label="Composición visual de proyectos" role="img">
          <div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="art-index mono">/ system.profile</div>
          <div className="fp-display"><Mark /><p className="mono">FABRITCIO<br /><span>PEÑA</span></p></div>
          <div className="code-window"><div className="window-bar"><i /><i /><i /><span className="mono">workspace.tsx</span></div><div className="code-lines mono"><p><b>const</b> <span>focus</span> = <strong>&quot;useful&quot;</strong></p><p><b>const</b> <span>approach</span> = [</p><p className="indent"><strong>&quot;curious&quot;</strong>, <strong>&quot;precise&quot;</strong>,</p><p className="indent"><strong>&quot;human&quot;</strong></p><p>]</p></div></div>
          <div className="art-tag mono">01 / BUILDING BETTER<br /><span>digital tools</span></div>
          <div className="hero-scan" />
        </div>
        <div className="hero-bottom mono"><span>SCROLL TO EXPLORE <ChevronRight /></span><span>DOMINICAN REPUBLIC · REMOTE</span></div>
      </section>

      <section id="perfil" className="profile section-wrap">
        <div className="section-kicker"><span>01</span><span>PERFIL / APPROACH</span></div>
        <div className="profile-grid"><h2>Entre sistemas<br />y personas<span>.</span></h2><div><p className="lead">Me muevo entre el desarrollo de aplicaciones, el soporte técnico y la automatización para encontrar soluciones que funcionan en el mundo real.</p><p className="muted">No construyo por construir. Me interesa entender el problema, ordenar el ruido y crear herramientas que hagan que el trabajo diario se sienta más sencillo.</p><button className="text-button" onClick={() => go('contacto')}>Conocer mi enfoque <ArrowUpRight data-icon="inline-end" /></button></div></div>
        <div className="profile-notes"><div><span className="mono">01 — ORDENAR</span><p>Traducir necesidades en flujos entendibles.</p></div><div><span className="mono">02 — CONSTRUIR</span><p>Crear interfaces que respondan al contexto.</p></div><div><span className="mono">03 — MEJORAR</span><p>Iterar hasta que la tecnología sea natural.</p></div></div>
      </section>

      <section id="proyectos" className="projects section-wrap"><div className="section-kicker"><span>02</span><span>SELECTED WORK / 04</span></div><div className="projects-heading"><h2>Proyectos<br /><em>con propósito.</em></h2><p>Una selección de productos, herramientas y sistemas pensados para resolver algo específico.</p></div><div className="project-explorer"><div className="project-list">{projects.map((project, i) => <button key={project.name} className={active === project.name ? 'project-item active' : 'project-item'} onClick={() => setActive(project.name)}><span className="mono">0{i + 1}</span><span><b>{project.name}</b><small>{project.type}</small></span><ArrowUpRight /></button>)}</div><div className={`project-preview tone-${selected.tone}`}><div className="preview-top mono"><span>CASE STUDY / {selected.name.toUpperCase()}</span><span>↗</span></div><div className="preview-interface"><div className="mini-sidebar"><Mark small /><span /><span /><span /><span /></div><div className="mini-main"><div className="mini-heading"><i /><i /><i /></div><div className="mini-chart"><span /><span /><span /><span /><span /><span /></div><div className="mini-cards"><i /><i /><i /></div></div></div><div className="preview-info"><span className="mono">{selected.type}</span><h3>{selected.name}</h3><p>{selected.description}</p><TechStack stack={selected.stack} /></div></div></div><div className="project-context"><span className="mono">THE BRIEF</span><p>{selected.problem}</p><span className="mono">MY CONTRIBUTION</span><p>{selected.contribution}</p></div></section>

      <section id="laboratorio" className="lab section-wrap"><div className="section-kicker"><span>03</span><span>LABORATORIO / IN PROGRESS</span></div><div className="lab-grid"><div><h2>Ideas en<br /><em>movimiento.</em></h2><p className="lead">Un espacio para probar, fallar rápido y aprender algo nuevo en el proceso.</p></div><div className="lab-card"><span className="lab-signal mono">EXPERIMENT / 001</span><div className="signal-visual"><Network /><span /><span /><span /></div><h3>Próximo experimento</h3><p>Este espacio está preparado para nuevos prototipos, herramientas pequeñas y exploraciones visuales.</p><span className="badge"><span /> EDITABLE PLACEHOLDER</span></div></div></section>

      <section id="experiencia" className="skills section-wrap"><div className="section-kicker"><span>04</span><span>TOOLKIT / CAPABILITIES</span></div><div className="skills-heading"><h2>Las herramientas<br />son el <em>medio.</em></h2><p>Un mapa honesto de las tecnologías que uso para pasar de la pregunta a una solución.</p></div><div className="skills-explorer"><div className="skill-tabs">{Object.keys(skills).map((tab) => <button key={tab} className={skillTab === tab ? 'skill-tab active' : 'skill-tab'} onClick={() => setSkillTab(tab)}>{tab}<ChevronRight /></button>)}</div><div className="skill-content"><span className="mono">{skillTab.toUpperCase()} / {String(Object.keys(skills).indexOf(skillTab) + 1).padStart(2, '0')}</span><div className="skill-cloud">{skills[skillTab as keyof typeof skills].map((skill) => <span key={skill}><Check />{skill}</span>)}</div></div></div></section>

      <section id="contacto" className="contact section-wrap"><div className="contact-aside"><div className="section-kicker"><span>05</span><span>CONTACT / OPEN CHANNEL</span></div><h2>Hagamos algo<br /><em>que importe.</em></h2><p>Si tienes una idea, un proceso que mejorar o simplemente quieres conversar sobre tecnología, escríbeme.</p><div className="contact-links"><a href="mailto:configurar@email.com"><Mail />configurar@email.com</a><a href="#contacto"><Globe2 />LinkedIn / configurable</a><a href="#contacto"><Globe2 />GitHub / configurable</a></div></div><form className="contact-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>{sent ? <div className="sent-state"><Check /><h3>Mensaje preparado.</h3><p>La integración de envío está lista para conectarse con tu proveedor de correo.</p><button type="button" className="text-button" onClick={() => setSent(false)}>Enviar otro <ArrowUpRight /></button></div> : <><label>Tu nombre<input required name="name" placeholder="¿Cómo te llamas?" /></label><label>Tu correo<input required type="email" name="email" placeholder="nombre@correo.com" /></label><label>Tu mensaje<textarea required name="message" rows={4} placeholder="Cuéntame sobre el proyecto..." /></label><button className="button-primary" type="submit">Enviar mensaje <Send data-icon="inline-end" /></button></>}</form></section>
    </main>
    <footer className="footer section-wrap"><span className="mono">© 2026 FABRITCIO PEÑA</span><span>TECNOLOGÍA QUE RESUELVE PROBLEMAS.</span><span className="mono">FP / 26</span></footer>
  </div>
}
