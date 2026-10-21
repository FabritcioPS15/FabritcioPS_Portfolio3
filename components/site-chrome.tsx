'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Download, Menu, Search, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { projects } from '@/lib/portfolio-data'

const links = [['/', 'Inicio'], ['/sobre-mi', 'Sobre mí'], ['/proyectos', 'Proyectos'], ['/experiencia', 'Experiencia'], ['/contacto', 'Contacto']]

export function Mark({ small = false }: { small?: boolean }) { return <span className={`mark ${small ? 'mark-small' : ''}`}><Image src="/Logotipo.png" alt="Logotipo de Fabritcio Peña" width={1536} height={1024} priority={!small} className="logo-mark" /></span> }

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); const [open, setOpen] = useState(false); const [searchOpen, setSearchOpen] = useState(false); const [searchQuery, setSearchQuery] = useState('')
  const filteredProjects = searchQuery ? projects.filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.description.toLowerCase().includes(searchQuery.toLowerCase()) || p.stack.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))) : []

  return <div className="portfolio-shell"><header className="site-header"><Link className="brand" href="/" onClick={() => setOpen(false)}><Mark small /><span>FP<span className="brand-dot">/</span>26</span></Link><nav className={open ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegación principal">{links.map(([href, label]) => <Link key={href} href={href} className={pathname === href || (href !== '/' && pathname.startsWith(href)) ? 'active' : ''} onClick={() => setOpen(false)}>{label}</Link>)}<button className="search-toggle glitch-effect" data-text=" Buscar" onClick={() => setSearchOpen(true)} aria-label="Buscar proyectos"><Search /> Buscar</button><Link href="/cv.pdf" download className="cv-button desktop-only"><Download /> CV</Link><Link href="/cv.pdf" download className="cv-button mobile-only"><Download /> Descargar CV</Link></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'}>{open ? <X /> : <Menu />}</button><Link className="header-contact" href="/contacto">Hablemos <ArrowUpRight /></Link></header>{searchOpen && <div className="search-overlay" onClick={() => setSearchOpen(false)}><div className="search-modal" onClick={e => e.stopPropagation()}><div className="search-header"><input type="text" placeholder="Buscar proyectos por nombre, tecnología o descripción..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} autoFocus /><button onClick={() => setSearchOpen(false)}><X /></button></div><div className="search-results">{filteredProjects.length > 0 ? filteredProjects.map(p => <Link key={p.slug} href={`/proyectos/${p.slug}`} onClick={() => setSearchOpen(false)}><span className="mono">{p.type}</span><h3>{p.name}</h3><p>{p.description}</p><div className="stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div></Link>) : searchQuery ? <p className="search-empty">No se encontraron proyectos que coincidan con tu búsqueda.</p> : <p className="search-empty">Escribe para buscar proyectos...</p>}</div></div></div>}{children}<footer className="footer section-wrap"><span className="mono">© 2026 FABRITCIO PEÑA</span><span>TECNOLOGÍA QUE RESUELVE PROBLEMAS.</span><span className="mono">FP / 26</span></footer></div>
}
