'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const links = [['/', 'Inicio'], ['/sobre-mi', 'Sobre mí'], ['/proyectos', 'Proyectos'], ['/experiencia', 'Experiencia'], ['/contacto', 'Contacto']]

export function Mark({ small = false }: { small?: boolean }) { return <span className={`mark ${small ? 'mark-small' : ''}`}><Image src="/Logotipo.png" alt="Logotipo de Fabritcio Peña" width={1536} height={1024} priority={!small} className="logo-mark" /></span> }

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const [open, setOpen] = useState(false)
  return <div className="portfolio-shell"><header className="site-header"><Link className="brand" href="/" onClick={() => setOpen(false)}><Mark small /><span>FP<span className="brand-dot">/</span>26</span></Link><nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegación principal">{links.map(([href, label], i) => <Link key={href} href={href} className={pathname === href || (href !== '/' && pathname.startsWith(href)) ? 'active' : ''} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}</Link>)}</nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button><Link className="header-contact" href="/contacto">Hablemos <ArrowUpRight /></Link></header>{children}<footer className="footer section-wrap"><span className="mono">© 2026 FABRITCIO PEÑA</span><span>TECNOLOGÍA QUE RESUELVE PROBLEMAS.</span><span className="mono">FP / 26</span></footer></div>
}
